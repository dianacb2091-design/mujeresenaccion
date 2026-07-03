# Seguridad, Autenticación y Roles

**Responsable:** Anthony Cevallos  
**Área:** Autenticación, roles y políticas RLS  
**Archivos de esta área:**
- `backend/supabase/policies/auth_policies.sql`
- `backend/supabase/policies/perfiles_policies.sql`
- `backend/supabase/policies/modulos_policies.sql`
- `backend/supabase/policies/recursos_policies.sql`
- `backend/supabase/policies/sugerencias_policies.sql`
- `frontend/src/services/auth.js`

---

## 1. Conceptos clave

### ¿Qué es RLS (Row Level Security)?

RLS es un mecanismo de seguridad de PostgreSQL (la base de datos que usa Supabase) que permite controlar **qué filas puede ver o modificar cada usuario**, directamente en la base de datos.

Sin RLS, cualquier persona que tenga la clave de Supabase podría leer o modificar **todos** los datos. Con RLS activado, cada consulta pasa por un filtro automático antes de devolver resultados.

**Analogía:** Es como un guardia de seguridad en la entrada de cada tabla. Antes de dejar pasar una consulta, el guardia verifica quién la hace y decide qué información puede ver o tocar.

### ¿Qué es `auth.uid()`?

Cuando un usuario inicia sesión, Supabase le asigna un identificador único (UUID). La función `auth.uid()` devuelve ese identificador dentro de las políticas RLS.

Así se puede preguntar: *"¿El usuario que hace esta consulta es el dueño de este registro?"*

### Los dos roles del sistema

| Rol | Descripción | Permisos |
|-----|-------------|----------|
| `administrador` | Gestiona la plataforma | Lee y escribe en todo |
| `visitante` | Usuaria de la plataforma | Solo lee contenido y gestiona su propio perfil |

El rol de cada usuario está almacenado en la columna `rol` de la tabla `perfiles`.

---

## 2. Función `is_admin()`

**Archivo:** `backend/supabase/policies/auth_policies.sql`

```sql
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM perfiles
    WHERE id = auth.uid()
      AND rol = 'administrador'
  );
$$;
```

### ¿Qué hace?

Busca en la tabla `perfiles` si el usuario actual (identificado por `auth.uid()`) tiene el rol `'administrador'`. Devuelve `true` si es admin, `false` si no lo es.

### ¿Por qué `SECURITY DEFINER`?

Sin esta opción, cuando la función intenta leer la tabla `perfiles`, Supabase aplicaría las políticas RLS de esa tabla. Eso crearía una recursión infinita: la política llama a `is_admin()`, que llama a la política, que llama a `is_admin()`... y así sin parar.

`SECURITY DEFINER` hace que la función se ejecute con los permisos del dueño de la base de datos (Supabase), saltándose las políticas RLS únicamente para esta consulta interna. El resultado que devuelve sigue siendo usado por las políticas para tomar decisiones.

### ¿Por qué `STABLE`?

Indica que la función siempre devuelve el mismo resultado dentro de una misma consulta. Esto permite que Supabase la ejecute una sola vez por consulta en lugar de recalcularla en cada fila, mejorando el rendimiento.

### Uso en políticas

```sql
-- Ejemplo: solo admins pueden borrar módulos
USING (is_admin())
```

---

## 3. Políticas RLS por tabla

### Tabla: `perfiles`

| Operación | ¿Quién puede? | Condición |
|-----------|---------------|-----------|
| SELECT | Cualquier usuario autenticado | Solo su propio perfil, o todos si es admin |
| INSERT | Usuarios autenticados | Solo pueden crear su propio perfil (`id = auth.uid()`) |
| UPDATE | Visitante | Su propio perfil, pero no puede cambiar el campo `rol` |
| UPDATE | Administrador | Cualquier perfil, incluyendo el campo `rol` |
| DELETE | Administrador | Cualquier perfil |

**Detalle importante del UPDATE:**

Hay dos políticas de UPDATE separadas. En PostgreSQL, cuando hay varias políticas permisivas, el sistema las combina con OR: si cualquiera de las dos pasa, la operación se permite.

- **Política del visitante:** puede actualizar su perfil, pero la condición `WITH CHECK` verifica que el campo `rol` no haya cambiado. Si intenta cambiarlo a `'administrador'`, la política falla.
- **Política del admin:** puede actualizar cualquier perfil y cualquier campo.

Esto evita que un visitante se auto-asigne permisos de administrador.

---

### Tabla: `modulos`

| Operación | ¿Quién puede? |
|-----------|---------------|
| SELECT | Cualquier usuario autenticado |
| INSERT | Solo administradores |
| UPDATE | Solo administradores |
| DELETE | Solo administradores |

Los módulos son contenido educativo creado por el equipo. Los visitantes pueden verlos pero nunca modificarlos.

---

### Tabla: `recursos`

| Operación | ¿Quién puede? |
|-----------|---------------|
| SELECT | Cualquier usuario autenticado |
| INSERT | Solo administradores |
| UPDATE | Solo administradores |
| DELETE | Solo administradores |

Misma lógica que módulos: contenido de solo lectura para visitantes.

---

### Tabla: `visualizaciones`

**Archivo:** `backend/supabase/policies/auth_policies.sql`

| Operación | ¿Quién puede? | Condición |
|-----------|---------------|-----------|
| SELECT | Administrador | Todas las visualizaciones |
| SELECT | Visitante | Solo las suyas (`usuario_id = auth.uid()`) |
| INSERT | Cualquier autenticado | Solo puede registrar sus propias (`usuario_id = auth.uid()`) |
| DELETE | Solo administrador | Cualquier registro |

Esta tabla es la que permite medir el indicador del 70% de avance por usuaria. Un visitante puede ver cuánto ha consumido, pero no puede ver las métricas de otras usuarias.

---

### Tabla: `sugerencias`

| Operación | ¿Quién puede? |
|-----------|---------------|
| SELECT | Solo administradores |
| INSERT | Cualquier persona (con o sin sesión) |
| UPDATE | Solo administradores |
| DELETE | Solo administradores |

El INSERT está habilitado para el rol `anon` (anónimo) de Supabase. Esto permite que el formulario de sugerencias funcione sin que la usuaria tenga que iniciar sesión, lo cual es importante para accesibilidad.

---

## 4. Servicio de autenticación (`auth.js`)

**Archivo:** `frontend/src/services/auth.js`

Este archivo es la **capa de comunicación** entre el frontend (React) y el sistema de autenticación de Supabase. El resto del equipo debe importar estas funciones en lugar de llamar a Supabase directamente.

---

### `iniciarSesion(correo, contrasena)`

```js
import { iniciarSesion } from '../services/auth'

const { user, session } = await iniciarSesion('admin@ejemplo.com', '123456')
```

**¿Qué hace internamente?**
Llama a `supabase.auth.signInWithPassword()`. Supabase verifica el correo y la contraseña contra su sistema de autenticación (`auth.users`). Si son correctos, devuelve un objeto con:
- `user`: datos del usuario (id, email, etc.)
- `session`: token de acceso (JWT) que se enviará automáticamente en cada consulta posterior

**¿Qué pasa con las políticas RLS después del login?**
A partir de ese momento, todas las consultas a Supabase llevan el JWT en la cabecera. Supabase decodifica ese token, extrae el `user.id` y lo hace disponible como `auth.uid()`. Las políticas RLS usan ese valor para filtrar los datos.

---

### `cerrarSesion()`

```js
import { cerrarSesion } from '../services/auth'

await cerrarSesion()
```

Llama a `supabase.auth.signOut()`. Elimina el token de sesión del cliente. A partir de ese momento, `auth.uid()` deja de tener valor y las políticas RLS bloquearán el acceso a datos protegidos.

---

### `recuperarContrasena(correo)`

```js
import { recuperarContrasena } from '../services/auth'

await recuperarContrasena('usuaria@ejemplo.com')
```

Llama a `supabase.auth.resetPasswordForEmail()`. Supabase envía un correo con un enlace seguro. Cuando la usuaria hace clic en ese enlace es redirigida a `/nueva-contrasena` en la aplicación, donde puede ingresar su nueva contraseña.

---

### `actualizarContrasena(nuevaContrasena)`

```js
import { actualizarContrasena } from '../services/auth'

await actualizarContrasena('miNuevaContrasena123')
```

Se usa en la página `/nueva-contrasena`, luego de que la usuaria llegó desde el enlace de recuperación. Llama a `supabase.auth.updateUser()`. En este punto Supabase ya identificó a la usuaria por el token del enlace.

---

### `obtenerUsuarioActual()`

```js
import { obtenerUsuarioActual } from '../services/auth'

const usuario = await obtenerUsuarioActual()
// usuario.id, usuario.email, etc.
// Devuelve null si no hay sesión activa
```

Llama a `supabase.auth.getUser()`. Verifica con el servidor que el token de sesión siga siendo válido (no expirado). Es más seguro que leer la sesión directamente del almacenamiento local.

---

### `verificarEsAdmin()`

```js
import { verificarEsAdmin } from '../services/auth'

const esAdmin = await verificarEsAdmin()
if (esAdmin) {
  // mostrar panel de administración
}
```

Llama a la función `is_admin()` directamente en Supabase mediante `supabase.rpc('is_admin')`. Devuelve `true` o `false`. Se usa en el frontend para mostrar u ocultar opciones del panel de administración.

---

### `onCambioSesion(callback)`

```js
import { onCambioSesion } from '../services/auth'

const suscripcion = onCambioSesion((sesion) => {
  if (sesion) {
    console.log('Usuario conectado:', sesion.user.email)
  } else {
    console.log('Sesión cerrada')
  }
})

// Para dejar de escuchar (por ejemplo al desmontar el componente):
suscripcion.unsubscribe()
```

Registra un listener que se ejecuta automáticamente cada vez que cambia el estado de la sesión: login, logout, expiración de token o recuperación de contraseña. Útil para actualizar el estado global de la aplicación (contexto de React, Zustand, etc.).

---

## 5. Flujo completo: login de administradora

```
Usuaria escribe correo y contraseña
          │
          ▼
   iniciarSesion()          ← auth.js
          │
          ▼
supabase.auth.signInWithPassword()
          │
          ▼
   Supabase verifica
   credenciales en auth.users
          │
     ┌────┴────┐
   Error     Éxito
     │         │
  throw      devuelve { user, session }
  error           │
                  ▼
         verificarEsAdmin()    ← auth.js
                  │
                  ▼
         supabase.rpc('is_admin')
                  │
                  ▼
         is_admin() en Supabase
         busca en tabla perfiles
         WHERE id = auth.uid()
         AND rol = 'administrador'
                  │
          ┌───────┴───────┐
        true            false
          │                │
   Panel admin       Vista visitante
```

---

## 6. Cómo usar este módulo (para el equipo frontend)

```js
// Importar lo que necesitas
import {
  iniciarSesion,
  cerrarSesion,
  recuperarContrasena,
  actualizarContrasena,
  obtenerUsuarioActual,
  verificarEsAdmin,
  onCambioSesion
} from '../services/auth'

// Ejemplo: login con manejo de error
async function handleLogin(correo, contrasena) {
  try {
    await iniciarSesion(correo, contrasena)
    const esAdmin = await verificarEsAdmin()
    // redirigir según rol
  } catch (error) {
    console.error('Error al iniciar sesión:', error.message)
  }
}
```

---

*Responsable: Anthony Cevallos — Autenticación, roles y seguridad RLS*
