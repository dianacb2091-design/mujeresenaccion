-- ============================================================
-- SEGURIDAD RLS: tabla sugerencias
-- Responsable: Anthony Cevallos
-- Proyecto: Mujeres En Acción
-- ============================================================

ALTER TABLE sugerencias ENABLE ROW LEVEL SECURITY;

-- SELECT: solo los administradores pueden leer las sugerencias recibidas
CREATE POLICY "sugerencias_select"
ON sugerencias
FOR SELECT
TO authenticated
USING (is_admin());

-- INSERT (autenticados): usuarios con sesión pueden enviar sugerencias
CREATE POLICY "sugerencias_insert_autenticados"
ON sugerencias
FOR INSERT
TO authenticated
WITH CHECK (true);

-- INSERT (anónimos): visitantes sin cuenta también pueden enviar sugerencias
CREATE POLICY "sugerencias_insert_anonimos"
ON sugerencias
FOR INSERT
TO anon
WITH CHECK (true);

-- UPDATE: solo los administradores pueden modificar sugerencias
CREATE POLICY "sugerencias_update"
ON sugerencias
FOR UPDATE
TO authenticated
USING (is_admin())
WITH CHECK (is_admin());

-- DELETE: solo los administradores pueden eliminar sugerencias
CREATE POLICY "sugerencias_delete"
ON sugerencias
FOR DELETE
TO authenticated
USING (is_admin());
