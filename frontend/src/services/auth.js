import { supabase } from '../lib/supabaseClient'

// Inicia sesión con correo y contraseña
export async function iniciarSesion(correo, contrasena) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: correo,
    password: contrasena,
  })
  if (error) throw error
  return data
}

// Cierra la sesión del usuario actual
export async function cerrarSesion() {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

// Envía un correo con enlace para restablecer la contraseña
export async function recuperarContrasena(correo) {
  const { error } = await supabase.auth.resetPasswordForEmail(correo, {
    redirectTo: `${window.location.origin}/nueva-contrasena`,
  })
  if (error) throw error
}

// Actualiza la contraseña (se llama tras usar el enlace de recuperación)
export async function actualizarContrasena(nuevaContrasena) {
  const { data, error } = await supabase.auth.updateUser({
    password: nuevaContrasena,
  })
  if (error) throw error
  return data
}

// Retorna el usuario autenticado actualmente, o null si no hay sesión
export async function obtenerUsuarioActual() {
  const { data: { user }, error } = await supabase.auth.getUser()
  if (error) throw error
  return user
}

// Verifica si el usuario actual tiene rol 'administrador' usando is_admin() de Supabase
export async function verificarEsAdmin() {
  const { data, error } = await supabase.rpc('is_admin')
  if (error) throw error
  return data // true o false
}

// Suscribe un callback a cambios de sesión (login / logout / expiración)
// Uso: const sub = onCambioSesion(sesion => { ... }); sub.unsubscribe() para limpiar
export function onCambioSesion(callback) {
  const { data: { subscription } } = supabase.auth.onAuthStateChange(
    (_event, session) => callback(session)
  )
  return subscription
}
