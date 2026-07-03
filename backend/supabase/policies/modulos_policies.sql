-- ============================================================
-- SEGURIDAD RLS: tabla modulos
-- Responsable: Anthony Cevallos
-- Proyecto: Mujeres En Acción
-- ============================================================

ALTER TABLE modulos ENABLE ROW LEVEL SECURITY;

-- SELECT: cualquier usuario autenticado puede ver los módulos
CREATE POLICY "modulos_select"
ON modulos
FOR SELECT
TO authenticated
USING (true);

-- INSERT: solo los administradores pueden crear módulos
CREATE POLICY "modulos_insert"
ON modulos
FOR INSERT
TO authenticated
WITH CHECK (is_admin());

-- UPDATE: solo los administradores pueden editar módulos
CREATE POLICY "modulos_update"
ON modulos
FOR UPDATE
TO authenticated
USING (is_admin())
WITH CHECK (is_admin());

-- DELETE: solo los administradores pueden eliminar módulos
CREATE POLICY "modulos_delete"
ON modulos
FOR DELETE
TO authenticated
USING (is_admin());
