# Mujeres En Acción

Plataforma de recursos de estética para mujeres emprendedoras.

## Tecnologías
React, Vite, Supabase, Git, GitHub

## Estructura del Proyecto
- backend/ : Base de datos y configuración de Supabase
- docs/ : Documentación del proyecto
- frontend/ : Aplicación React
- .gitignore : Configuración de seguridad para Git
- README.md : Este archivo de documentación
## Equipo de Trabajo

### Arquitectura, Base de Datos y Storage
- Diana Cabrera: Coordinadora técnica, arquitectura del proyecto, diseño de tablas en Supabase, configuración de buckets (videos, PDFs, imágenes), funciones de subida/descarga y revisión de merges. Asume roles de Alexandra Caicedo.

### Servicios de Conexión
- Elizabeth Bueno: Funciones que conectan las pantallas con Supabase (modulos.js, recursos.js, metricas.js, sugerencias.js).

### Seguridad (RLS)
- Anthony Cevallos: Políticas de permisos y roles de acceso.

### Interfaz (Frontend)
- Jenny García: Home y layout principal
- Jessica Guano: Navbar y Footer
- Milton Paladines: Vista de módulos
- Shirley Sánchez: Vista detalle de módulo
- Erick Tapia: Vista de sugerencias
- Teodomiro Valderrama: Panel administrativo y login

## Instalación y ejecución
```bash
cd frontend
npm install
npm run dev