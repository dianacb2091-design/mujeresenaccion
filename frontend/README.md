# Frontend - Mujeres En Acción

Aplicación React + Vite para la plataforma de recursos de estética.

## Comandos
- Instalación: `npm install`
- Desarrollo: `npm run dev` (corre en http://localhost:5173)
- Build: `npm run build`

## Estructura de Carpetas
src/
├── assets/           # Imágenes y recursos estáticos
├── components/       # Componentes reutilizables de React
├── hooks/            # Custom hooks de React
├── lib/              # Librerías y configuraciones
│   └── supabaseClient.js  # Conexión a Supabase
├── pages/            # Vistas/páginas de la aplicación
├── routes/           # Configuración de rutas (React Router)
└── services/         # Servicios que conectan con Supabase
    ├── auth.js           # Autenticación (Anthony)
    ├── metricas.js       # Métricas (Elizabeth)
    ├── modulos.js        # Módulos (Elizabeth)
    ├── recursos.js       # Recursos (Elizabeth)
    ├── storage.js        # Storage videos/PDFs/imágenes (Diana)
    └── sugerencias.js    # Sugerencias (Elizabeth)
    
## Variables de Entorno
Crea un archivo `.env` basado en `.env.example`:
VITE_SUPABASE_URL=la-url-que-comparte-el-equipo
VITE_SUPABASE_ANON_KEY=la-key-que-comparte-el-equipo

Nunca subas el archivo .env a GitHub. Solo se sube .env.example.

## Responsables

### Arquitectura, Base de Datos y Storage
- Diana Cabrera: Coordinadora técnica, diseño de tablas en Supabase, configuración de buckets y funciones de subida/descarga. 

### Servicios de Conexión
- Elizabeth Bueno: Funciones que conectan las pantallas con Supabase. 

### Seguridad (RLS)
- Anthony Cevallos: Políticas de permisos y roles de acceso.

### Interfaz (Pantallas y Diseño)
- Jenny García: Home y layout principal
- Jessica Guano: Navbar y Footer
- Milton Paladines: Vista de módulos
- Shirley Sánchez: Vista detalle de módulo
- Erick Tapia: Vista de sugerencias
- Teodomiro Valderrama: Panel administrativo y login