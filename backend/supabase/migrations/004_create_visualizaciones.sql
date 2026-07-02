-- Migración 004: Crear tabla de visualizaciones
-- Responsable: Diana Cabrera

CREATE TABLE visualizaciones (
id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
recurso_id UUID REFERENCES recursos(id) ON DELETE CASCADE,
usuario_id UUID REFERENCES perfiles(id) ON DELETE SET NULL,
fecha_visualizacion TIMESTAMP DEFAULT NOW()
);