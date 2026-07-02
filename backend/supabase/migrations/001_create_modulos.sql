-- Migración 001: Crear tabla de módulos
-- Responsable: Diana Cabrera

CREATE TABLE modulos (
id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
titulo TEXT NOT NULL,
descripcion TEXT,
imagen_url TEXT,
fecha_creacion TIMESTAMP DEFAULT NOW()
);