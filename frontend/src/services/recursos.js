import supabase from '../lib/supabaseClient'

export async function getRecursos(moduloId) {
  const { data, error } = await supabase
    .from('recursos')
    .select('*')
    .eq('modulo_id', moduloId)
  if (error) throw error
  return data
}
