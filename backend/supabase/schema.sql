-- ESQUEMA COMPLETO DE LA BASE DE DATOS
-- Mujeres En Acción

-- Responsable: Diana Cabrera
-- Descripción: Definición de todas las tablas del sistema

-- Tabla de perfiles de usuarios
CREATE TABLE perfiles (
id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
nombre TEXT NOT NULL,
correo TEXT UNIQUE NOT NULL,
rol TEXT DEFAULT 'visitante' CHECK (rol IN ('administrador', 'visitante')),
fecha_registro TIMESTAMP DEFAULT NOW()
);

CREATE TABLE modulos (
id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
titulo TEXT NOT NULL,
descripcion TEXT,
imagen_url TEXT,
fecha_creacion TIMESTAMP DEFAULT NOW()
);

CREATE TABLE recursos (
id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
modulo_id UUID REFERENCES modulos(id) ON DELETE CASCADE,
titulo TEXT NOT NULL,
tipo TEXT NOT NULL CHECK (tipo IN ('video', 'pdf', 'imagen')),
url_archivo TEXT,
descripcion TEXT,
fecha_creacion TIMESTAMP DEFAULT NOW()
);

CREATE TABLE visualizaciones (
id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
recurso_id UUID REFERENCES recursos(id) ON DELETE CASCADE,
usuario_id UUID REFERENCES perfiles(id) ON DELETE SET NULL,
fecha_visualizacion TIMESTAMP DEFAULT NOW()
);

CREATE TABLE sugerencias (
id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
nombre TEXT NOT NULL,
correo TEXT NOT NULL,
mensaje TEXT NOT NULL,
fecha_envio TIMESTAMP DEFAULT NOW()
);