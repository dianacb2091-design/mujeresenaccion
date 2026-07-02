# Base de Datos - Supabase

## Tablas del Sistema

### 1. perfiles
Almacena la información de los usuarios (administradores y visitantes).

| Columna | Tipo | Descripción |
|---------|------|-------------|
| id | UUID | Clave primaria |
| nombre | TEXT | Nombre del usuario |
| correo | TEXT | Correo único |
| rol | TEXT | 'administrador' o 'visitante' |
| fecha_registro | TIMESTAMP | Fecha de creación |

### 2. modulos
Contiene los módulos educativos de la plataforma.

| Columna | Tipo | Descripción |
|---------|------|-------------|
| id | UUID | Clave primaria |
| titulo | TEXT | Título del módulo |
| descripcion | TEXT | Descripción del contenido |
| imagen_url | TEXT | URL de la imagen portada |
| fecha_creacion | TIMESTAMP | Fecha de creación |

### 3. recursos
Recursos multimedia (videos, PDFs, imágenes) asociados a módulos.

| Columna | Tipo | Descripción |
|---------|------|-------------|
| id | UUID | Clave primaria |
| modulo_id | UUID | Referencia a modulos.id |
| titulo | TEXT | Título del recurso |
| tipo | TEXT | 'video', 'pdf' o 'imagen' |
| url_archivo | TEXT | URL del archivo en Storage |
| descripcion | TEXT | Descripción del recurso |
| fecha_creacion | TIMESTAMP | Fecha de creación |

### 4. visualizaciones
Registro de métricas: qué usuario vio qué recurso.

| Columna | Tipo | Descripción |
|---------|------|-------------|
| id | UUID | Clave primaria |
| recurso_id | UUID | Referencia a recursos.id |
| usuario_id | UUID | Referencia a perfiles.id |
| fecha_visualizacion | TIMESTAMP | Fecha de visualización |

### 5. sugerencias
Mensajes enviados por los visitantes.

| Columna | Tipo | Descripción |
|---------|------|-------------|
| id | UUID | Clave primaria |
| nombre | TEXT | Nombre del remitente |
| correo | TEXT | Correo del remitente |
| mensaje | TEXT | Contenido del mensaje |
| fecha_envio | TIMESTAMP | Fecha de envío |

---
*Responsable del diseño: Diana Cabrera*