-- ============================================================
-- SEGURIDAD RLS: tabla recursos
-- Responsable: Anthony Cevallos
-- Proyecto: Mujeres En Acción
-- ============================================================

ALTER TABLE recursos ENABLE ROW LEVEL SECURITY;

-- SELECT: cualquier usuario autenticado puede ver los recursos
CREATE POLICY "recursos_select"
ON recursos
FOR SELECT
TO authenticated
USING (true);

-- INSERT: solo los administradores pueden agregar recursos
CREATE POLICY "recursos_insert"
ON recursos
FOR INSERT
TO authenticated
WITH CHECK (is_admin());

-- UPDATE: solo los administradores pueden editar recursos
CREATE POLICY "recursos_update"
ON recursos
FOR UPDATE
TO authenticated
USING (is_admin())
WITH CHECK (is_admin());

-- DELETE: solo los administradores pueden eliminar recursos
CREATE POLICY "recursos_delete"
ON recursos
FOR DELETE
TO authenticated
USING (is_admin());
