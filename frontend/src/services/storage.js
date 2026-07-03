// Pendiente - Diana Cabrera
// Storage de videos, PDFs e imágenes
// Responsabilidades:
// - Subir videos al bucket 'videos' (máx 50MB, MP4/H.264, 720p)
// - Subir PDFs al bucket 'pdfs' (máx 10MB)
// - Subir imágenes al bucket 'imagenes' (máx 200KB, JPG/PNG/WebP)
// - Obtener URLs públicas de archivos
import { supabase } from '../lib/supabaseClient'

// Constantes de tamaño (en bytes)
const MAX_VIDEO_SIZE = 50 * 1024 * 1024 // 50MB
const MAX_PDF_SIZE = 10 * 1024 * 1024   // 10MB
const MAX_IMAGE_SIZE = 200 * 1024       // 200KB

// Formatos permitidos
const VIDEO_FORMATS = ['video/mp4', 'video/webm']
const PDF_FORMATS = ['application/pdf']
const IMAGE_FORMATS = ['image/jpeg', 'image/png', 'image/webp']

/**
 * Subir un video al bucket 'videos'
 * @param {File} file - Archivo de video
 * @retur…RL pública o null
 */
export const uploadVideo = async (file) => {
  try {
    // Validar tamaño
    if (file.size > MAX_VIDEO_SIZE) {
      console.error('El video excede el tamaño máximo de 50MB')
      return null
    }

    // Validar formato
    if (!VIDEO_FORMATS.includes(file.type)) {
      console.error('Formato no permitido. Solo MP4 o WebM')
      return null
    }

    const fileExtension = file.name.split('.').pop()
    const fileName = `${Date.now()}_video.${fileExtension}`
    
       const { data, error } = await supabase.storage
      .from('videos')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      })

    if (error) throw error

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
 * Listar todos los videos
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
 * Eliminar un video
 */
export const deleteVideo = async (fileName) => {
  try {
    const { error } = await supabase.storage
      .from('videos')
      .remove([fileName])

    if (error) throw error
    return true
  } catch (error) {
    console.error('Error al eliminar el video:', error.message)
    return false
  }
}

/**
 * Subir un PDF al bucket 'pdfs'
 * @param {File} file - Archivo PDF
 * @returns {Promise<string|null>} URL pública o null
 */
export const uploadPDF = async (file) => {
  try {
    // Validar tamaño
    if (file.size > MAX_PDF_SIZE) {
      console.error('El PDF excede el tamaño máximo de 10MB')
      return null
    }

    // Validar formato
    if (!PDF_FORMATS.includes(file.type)) {
      console.error('Formato no permitido. Solo PDF')
      return null
    }

    const fileExtension = file.name.split('.').pop()
    const fileName = `${Date.now()}_documento.${fileExtension}`
    
    const { data, error } = await supabase.storage
      .from('pdfs')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      })

    if (error) throw error

    const { data: publicUrlData } = supabase.storage
      .from('pdfs')
      .getPublicUrl(fileName)

    return publicUrlData.publicUrl
  } catch (error) {
    console.error('Error al subir el PDF:', error.message)
    return null
  }
}
/**
 * Listar todos los PDFs
 */
export const listPDFs = async () => {
  try {
    const { data, error } = await supabase.storage
      .from('pdfs')
      .list('', {
        limit: 100,
        offset: 0,
        sortBy: { column: 'name', order: 'asc' }
      })

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error al listar los PDFs:', error.message)
    return []
  }
}

/**
 * Eliminar un PDF
 */
export const deletePDF = async (fileName) => {
  try {
    const { error } = await supabase.storage
      .from('pdfs')
      .remove([fileName])

    if (error) throw error
    return true
  } catch (error) {
    console.error('Error al eliminar el PDF:', error.message)
    return false
  }
}

/**
 *  * Subir una imagen al bucket 'imagenes'
 * @param {File} file - Archivo de imagen
 * @returns {Promise<string|null>} URL pública o null
 */
export const uploadImage = async (file) => {
  try {
    // Validar tamaño
    if (file.size > MAX_IMAGE_SIZE) {
      console.error('La imagen excede el tamaño máximo de 200KB')
      return null
    }

    // Validar formato
    if (!IMAGE_FORMATS.includes(file.type)) {
      console.error('Formato no permitido. Solo JPG, PNG o WebP')
      return null
    }

    const fileExtension = file.name.split('.').pop()
    const fileName = `${Date.now()}_imagen.${fileExtension}`
    
    const { data, error } = await supabase.storage
      .from('imagenes')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      })

    if (error) throw error

    const { data: publicUrlData } = supabase.storage
      .from('imagenes')
      .getPublicUrl(fileName)

    return publicUrlData.publicUrl
  } catch (error) {
    console.error('Error al subir la imagen:', error.message)
    return null
  }
}


/**
 * Listar todas las imágenes
 */
export const listImages = async () => {
  try {
    const { data, error } = await supabase.storage
      .from('imagenes')
      .list('', {
        limit: 100,
        offset: 0,
        sortBy: { column: 'name', order: 'asc' }
      })

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error al listar las imágenes:', error.message)
    return []
  }
}

/**
 *  * Eliminar una imagen
 */
export const deleteImage = async (fileName) => {
  try {
    const { error } = await supabase.storage
      .from('imagenes')
      .remove([fileName])

    if (error) throw error
    return true
  } catch (error) {
    console.error('Error al eliminar la imagen:', error.message)
    return false
  }
}