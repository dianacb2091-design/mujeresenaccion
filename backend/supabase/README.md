# Backend - Supabase

Base de datos y almacenamiento en Supabase para Mujeres En Acción.

## Tablas

### perfiles
- id (UUID, PK)
- nombre (TEXT)
- correo (TEXT, UNIQUE)
- rol (ENUM: 'administrador', 'visitante')
- fecha_registro (TIMESTAMP)

### modulos
- id (UUID, PK)
- titulo (TEXT)
- descripcion (TEXT)
- imagen_url (TEXT)
- fecha_creacion (TIMESTAMP)

### recursos
- id (UUID, PK)
- modulo_id (FK -> modulos.id)
- titulo (TEXT)
- tipo (ENUM: 'video', 'pdf', 'imagen')
- url_archivo (TEXT)
- descripcion (TEXT)

### visualizaciones
- id (UUID, PK)
- recurso_id (FK -> recursos.id)
- usuario_id (FK -> perfiles.id)
- fecha_visualizacion (TIMESTAMP)

### sugerencias
- id (UUID, PK)
- nombre (TEXT)
- correo (TEXT)
- mensaje (TEXT)
- fecha_envio (TIMESTAMP)

## Buckets de Storage

- videos: Videos educativos de módulos
- pdfs: Documentos descargables
- imagenes: Imágenes de recursos

## Roles

- administrador: Acceso total al sistema
- visitante: Solo lectura de contenidos

## Migraciones

Cada archivo SQL crea una tabla:
- 001_create_modulos.sql
- 002_create_recursos.sql
- 003_create_perfiles.sql
- 004_create_visualizaciones.sql
- 005_create_sugerencias.sql

## Políticas de Seguridad (RLS)

Las políticas de Row Level Security están en la carpeta policies/.
Responsable: Anthony Cevallos

## Seeds

Los datos de prueba están en la carpeta seeds/.

## Configuración

Las credenciales de Supabase están en frontend/.env.example (no se suben a GitHub).

## Responsables

### Arquitectura, Base de Datos y Storage
- Diana Cabrera: Coordiinadora técnica, arquitectura del proyecto, diseño de tablas en Supabase, configuración de buckets (videos, PDFs, imágenes), funciones de subida/descarga y revisión de merges. 

### Servicios de Conexión
- Elizabeth Bueno: Funciones que conectan las pantallas con Supabase (modulos.js, recursos.js, metricas.js, sugerencias.js).

### Seguridad (RLS)
- Anthony Cevallos: Políticas de permisos y roles de acceso.