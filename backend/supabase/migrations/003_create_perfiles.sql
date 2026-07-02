-- Migración 003: Crear tabla de perfiles
-- Responsable: Diana Cabrera

CREATE TABLE perfiles (
id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
nombre TEXT NOT NULL,
correo TEXT UNIQUE NOT NULL,
rol TEXT DEFAULT 'visitante' CHECK (rol IN ('administrador', 'visitante')),
fecha_registro TIMESTAMP DEFAULT NOW()
);