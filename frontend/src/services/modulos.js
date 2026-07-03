import supabase from '../lib/supabaseClient'

export async function getModulos() {
  const { data, error } = await supabase
    .from('modulos')
    .select('*')
  if (error) throw error
  return data
}
