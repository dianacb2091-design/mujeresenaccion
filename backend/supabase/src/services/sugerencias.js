import { supabase } from '../lib/supabaseClient.js';

// POST /sugerencias
export async function enviarSugerencia(sugerencia) {
  const { data, error } = await supabase
    .from('sugerencias')
    .insert([sugerencia]);
  if (error) throw error;
  return data[0];
}
