import { supabase } from '../lib/supabaseClient'

/**
 * Función para subir un video al bucket de Supabase Storage.
 * @param {File} file - El archivo de video seleccionado por el usuario.
 * @returns {Promise<string|null>} - Retorna la URL pública del video o null si hay error.
 */
export const uploadVideo = async (file) => {
  try {
    // Genera un nombre único para evitar que videos con el mismo nombre se borren
    const fileExtension = file.name.split('.').pop()
    const fileName = `${Date.now()}_video.${fileExtension}`
    
    // Conexión directa con el bucket 'videos' de Supabase
    const { data, error } = await supabase.storage
      .from('videos')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      })

    if (error) throw error

    // Obtener la URL pública para que el frontend pueda reproducir el video
    const { data: publicUrlData } = supabase.storage
      .from('videos')
      .getPublicUrl(fileName)

    return publicUrlData.publicUrl
  } catch (error) {
    console.error('Error al subir el video:', error.message)
    return null
  }
}

/**
 * Función para listar todos los videos que están en el bucket.
 */
export const listVideos = async () => {
  try {
    const { data, error } = await supabase.storage
      .from('videos')
      .list('', {
        limit: 100,
        offset: 0,
        sortBy: { column: 'name', order: 'asc' }
      })

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error al listar los videos:', error.message)
    return []
  }
}

/**
 * Función para eliminar un video del bucket mediante su nombre.
 */
export const deleteVideo = async (fileName) => {
  try {
    const { data, error } = await supabase.storage
      .from('videos')
      .remove([fileName])

    if (error) throw error
    return true
  } catch (error) {
    console.error('Error al eliminar el video:', error.message)
    return false
  }
}