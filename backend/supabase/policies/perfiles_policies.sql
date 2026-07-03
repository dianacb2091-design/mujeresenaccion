-- ============================================================
-- SEGURIDAD RLS: tabla perfiles
-- Responsable: Anthony Cevallos
-- Proyecto: Mujeres En Acción
-- Roles: 'administrador' | 'visitante'
-- ============================================================

ALTER TABLE perfiles ENABLE ROW LEVEL SECURITY;

-- SELECT: cada usuario ve su propio perfil; los admins ven todos
CREATE POLICY "perfiles_select"
ON perfiles
FOR SELECT
TO authenticated
USING (
  id = auth.uid()
  OR is_admin()
);

-- INSERT: un usuario puede crear únicamente su propio perfil (flujo de registro).
-- Los administradores pueden crear cualquier perfil.
CREATE POLICY "perfiles_insert"
ON perfiles
FOR INSERT
TO authenticated
WITH CHECK (
  id = auth.uid()
  OR is_admin()
);

-- UPDATE (visitante): puede editar su perfil pero NO cambiar su propio rol
CREATE POLICY "perfiles_update_propio"
ON perfiles
FOR UPDATE
TO authenticated
USING (id = auth.uid())
WITH CHECK (
  id = auth.uid()
  AND rol = (SELECT rol FROM perfiles WHERE id = auth.uid())
);

-- UPDATE (admin): puede editar cualquier perfil, incluyendo el campo rol
CREATE POLICY "perfiles_update_admin"
ON perfiles
FOR UPDATE
TO authenticated
USING (is_admin())
WITH CHECK (is_admin());

-- DELETE: solo los administradores pueden eliminar perfiles
CREATE POLICY "perfiles_delete"
ON perfiles
FOR DELETE
TO authenticated
USING (is_admin());
