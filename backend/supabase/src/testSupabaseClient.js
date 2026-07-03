import { supabase } from './lib/supabaseClient.js';

(async () => {
  try {
    const { data, error } = await supabase.from('modulos').select('*');
    if (error) throw error;
    console.log('Módulos:', data);
  } catch (err) {
    console.error('Error:', err.message);
  }
})();
