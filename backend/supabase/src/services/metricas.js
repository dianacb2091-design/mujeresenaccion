import { supabase } from '../lib/supabaseClient.js';

// POST /visualizaciones
export async function registrarVisualizacion(recursoId, usuarioId = null) {
  const { data, error } = await supabase
    .from('visualizaciones')
    .insert([{ recurso_id: recursoId, usuario_id: usuarioId }]);
  if (error) throw error;
  return data[0];
}

// GET /metricas/resumen (solo admin)
export async function getResumenMetricas() {
  const { data, error } = await supabase.rpc('resumen_metricas'); 
  // Aquí puedes definir una función SQL en Supabase para calcular métricas
  if (error) throw error;
  return data;
}
