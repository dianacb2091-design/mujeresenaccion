import { supabase } from '../lib/supabaseClient.js';

// GET /recursos?modulo_id=...
export async function getRecursos(moduloId) {
  const { data, error } = await supabase
    .from('recursos')
    .select('id, titulo, tipo, url_archivo, descripcion')
    .eq('modulo_id', moduloId);
  if (error) throw error;
  return data;
}
