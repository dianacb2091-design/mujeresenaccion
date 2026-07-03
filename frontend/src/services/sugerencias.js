import { supabase } from "../lib/supabaseClient";

export async function guardarSugerencia(nombre, correo, categoria, mensaje) {
  try {
    const { data, error } = await supabase
      .from("sugerencias")
      .insert([
        {
          nombre,
          correo,
          categoria,
          mensaje,
        },
      ]);

    if (error) {
      return {
        ok: false,
        error: error.message,
      };
    }

    return {
      ok: true,
      data,
    };
  } catch (e) {
    return {
      ok: false,
      error: "No se pudo guardar la sugerencia.",
    };
  }
}