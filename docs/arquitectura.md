# Arquitectura del Sistema

## Descripción General

Mujeres En Acción es una plataforma web para compartir recursos de estética con mujeres emprendedoras.

## Tecnologías

- **Frontend:** React + Vite
- **Backend:** Supabase (PostgreSQL + Storage + Auth)
- **Control de Versiones:** Git + GitHub
- **Lenguaje:** JavaScript

## Flujo de Datos

1. El usuario interactúa con la interfaz (React)
2. Los servicios (`frontend/src/services/`) llaman a Supabase
3. Supabase valida permisos (RLS) y devuelve los datos
4. React muestra la información en pantalla

## Componentes Principales

### Frontend
- Componentes reutilizables (`src/components/`)
- Páginas/Vistas (`src/pages/`)
- Servicios de conexión (`src/services/`)

### Backend (Supabase)
- Base de datos PostgreSQL (tablas: modulos, recursos, perfiles, etc.)
- Storage (buckets: videos, pdfs, imagenes)
- Autenticación y políticas RLS

---
*Responsable de Arquitectura: Diana Cabrera*