-- Migración 002: Crear tabla de recursos
-- Responsable: Diana Cabrera

CREATE TABLE recursos (
id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
modulo_id UUID REFERENCES modulos(id) ON DELETE CASCADE,
titulo TEXT NOT NULL,
tipo TEXT NOT NULL CHECK (tipo IN ('video', 'pdf', 'imagen')),
url_archivo TEXT,
descripcion TEXT,
fecha_creacion TIMESTAMP DEFAULT NOW()
);