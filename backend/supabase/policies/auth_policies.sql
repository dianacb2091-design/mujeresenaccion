-- ============================================================
-- SEGURIDAD: Función auxiliar y políticas de visualizaciones
-- Responsable: Anthony Cevallos
-- Proyecto: Mujeres En Acción
-- ============================================================

-- Función is_admin(): verifica si el usuario actual es administrador.
-- SECURITY DEFINER permite acceder a perfiles sin activar sus propias
-- políticas RLS, evitando recursión infinita.
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM perfiles
    WHERE id = auth.uid()
      AND rol = 'administrador'
  );
$$;

-- ============================================================
-- RLS: tabla visualizaciones
-- ============================================================

ALTER TABLE visualizaciones ENABLE ROW LEVEL SECURITY;

-- Los administradores pueden ver todas las visualizaciones
CREATE POLICY "admins_ven_todas_visualizaciones"
ON visualizaciones
FOR SELECT
TO authenticated
USING (is_admin());

-- Cada usuario ve únicamente sus propias visualizaciones
CREATE POLICY "usuarios_ven_sus_visualizaciones"
ON visualizaciones
FOR SELECT
TO authenticated
USING (usuario_id = auth.uid());

-- Un usuario autenticado puede registrar solo sus propias visualizaciones
CREATE POLICY "usuarios_registran_visualizaciones"
ON visualizaciones
FOR INSERT
TO authenticated
WITH CHECK (usuario_id = auth.uid());

-- Solo los administradores pueden eliminar registros de visualizaciones
CREATE POLICY "admins_eliminan_visualizaciones"
ON visualizaciones
FOR DELETE
TO authenticated
USING (is_admin());
