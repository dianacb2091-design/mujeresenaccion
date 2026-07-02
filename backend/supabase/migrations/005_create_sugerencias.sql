-- Migración 005: Crear tabla de sugerencias
-- Responsable: Diana Cabrera

CREATE TABLE sugerencias (
id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
nombre TEXT NOT NULL,
correo TEXT NOT NULL,
mensaje TEXT NOT NULL,
fecha_envio TIMESTAMP DEFAULT NOW()
);