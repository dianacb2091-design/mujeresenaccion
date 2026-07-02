# Convenciones de Código

## Nomenclatura

### Archivos y Carpetas
- **Frontend:** Usar camelCase para archivos (ej: `moduleCard.jsx`)
- **Backend:** Usar snake_case para archivos SQL (ej: `001_create_modulos.sql`)

### Variables y Funciones
- Variables: camelCase (ej: `usuarioActivo`, `listaModulos`)
- Funciones: camelCase descriptivo (ej: `obtenerRecursos`, `subirVideo`)
- Constantes: MAYUSCULAS (ej: `MAX_TAMANIO_ARCHIVO`)

## Estilo de Código

### JavaScript/React
- Usar comillas simples para strings: `'texto'`
- Usar punto y coma al final de cada línea
- Indentación con 2 espacios
- Comentarios explicativos en funciones complejas

### SQL
- Palabras clave en MAYÚSCULAS: `CREATE TABLE`, `SELECT`, `FROM`
- Nombres de tablas en minúsculas: `modulos`, `recursos`
- Cada columna en una línea nueva

## Commits en Git

Formato: `tipo: descripción breve`

Ejemplos:
- `feat: agregar componente Navbar`
- `fix: corregir error en conexión a Supabase`
- `docs: actualizar README del backend`

---
*Responsable de convenciones: Diana Cabrera (Liderazgo Técnico)*