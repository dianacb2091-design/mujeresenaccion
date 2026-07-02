# Contrato de API - Mujeres En Acción

**Plataforma Educativa para Mujeres Cuidadoras - MIES**

Este documento define cómo el Frontend se comunica con el Backend (Supabase).

---

## 1. Autenticación y Perfiles
**Responsable:** Anthony Cevallos (`auth.js`)

### `POST /auth/login`
- **Descripción:** Login para administradores (estudiantes de Estética).
- **Request:** `{ email: string, password: string }`
- **Response:** `{ session: object, user: { rol: 'administrador' } }`
- **Acceso:** Público.

---

## 2. Módulos Educativos
**Responsable:** Elizabeth Bueno (`modulos.js`)

### `GET /modulos`
- **Descripción:** Obtener los 3 módulos (Nutrición, Imagen Personal, Cuidado de la Piel).
- **Response:** `Array<{ id, titulo, descripcion, imagen_url }>`
- **Acceso:** Público (DRS RF-A-01).

### `GET /modulos/:id`
- **Descripción:** Obtener detalle de un módulo específico.
- **Response:** `{ id, titulo, descripcion, imagen_url, recursos: [] }`
- **Acceso:** Público.

---

## 3. Recursos y Contenido
**Responsable:** Elizabeth Bueno (`recursos.js`) y Diana Cabrera (`storage.js`)

### `GET /recursos?modulo_id=...`
- **Descripción:** Obtener videos, PDFs e imágenes de un módulo.
- **Response:** `Array<{ id, titulo, tipo, url_archivo, descripcion }>`
- **Acceso:** Público.

### `POST /storage/upload/video`
- **Descripción:** Subir video al bucket 'videos'.
- **Restricción (DRS RNF-C-01):** Solo Admin. Formato MP4/H.264, máx 50MB, 720p.
- **Responsable:** Diana Cabrera

### `POST /storage/upload/documento`
- **Descripción:** Subir PDF al bucket 'pdfs'.
- **Restricción (DRS RNF-C-02):** Solo Admin. PDF optimizado, máx 10MB.
- **Responsable:** Diana Cabrera

### `POST /storage/upload/imagen`
- **Descripción:** Subir imagen al bucket 'imagenes'.
- **Restricción (DRS RNF-C-02):** Solo Admin. JPG/PNG/WebP, máx 200KB.
- **Responsable:** Diana Cabrera

---

## 4. Métricas y Visualizaciones
**Responsable:** Elizabeth Bueno (`metricas.js`)

### `POST /visualizaciones`
- **Descripción:** Registrar que una usuaria vio un recurso (DRS RF-A-03).
- **Request:** `{ recurso_id: uuid, usuario_id: uuid (opcional) }`
- **Response:** `{ id: uuid, fecha: timestamp }`
- **Acceso:** Público.

### `GET /metricas/resumen`
- **Descripción:** Ver estadísticas de uso (total de vistas, módulos populares).
- **Response:** `{ total_vistas: number, modulos_populares: [] }`
- **Acceso:** Solo Admin.

---

## 5. Buzón de Sugerencias
**Responsable:** Elizabeth Bueno (`sugerencias.js`)

### `POST /sugerencias`
- **Descripción:** Enviar mensaje al buzón (DRS RF-A-04).
- **Request:** `{ nombre: string, correo: string (opcional), mensaje: string }`
- **Response:** `{ id: uuid, fecha_envio: timestamp }`
- **Acceso:** Público.

---

## Notas de Seguridad (RLS)

### Visitantes (Público):
- Pueden **leer** (SELECT) módulos, recursos y sugerencias.
- Pueden **crear** (INSERT) visualizaciones y sugerencias.
- No pueden editar ni eliminar nada.

### Administradores:
- Tienen permisos **completos** (CRUD) para gestionar contenido.
- Pueden subir, editar y eliminar videos, PDFs e imágenes.
- Pueden ver métricas y estadísticas.

---

## Restricciones Técnicas (DRS)

| Tipo de Archivo | Formato | Tamaño Máximo | Responsable |
|----------------|---------|---------------|-------------|
| Videos | MP4/H.264, 720p | 50 MB | Diana Cabrera |
| Imágenes | JPG/PNG/WebP | 200 KB | Diana Cabrera |
| PDFs | PDF optimizado | 10 MB | Diana Cabrera |

---

*Documento creado por: Diana Cabrera (Líder Técnica)*
*Fecha: 28 de junio de 2026*