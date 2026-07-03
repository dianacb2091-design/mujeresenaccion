import { supabase } from '../lib/supabaseClient.js';

// GET /modulos
export async function getModulos() {
  const { data, error } = await supabase
    .from('modulos')
    .select('id, titulo, descripcion, imagen_url')
    .limit(3);
  if (error) throw error;
  return data;
}

// GET /modulos/:id
export async function getModuloById(id) {
  const { data, error } = await supabase
    .from('modulos')
    .select('id, titulo, descripcion, imagen_url, recursos(*)')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data;
}