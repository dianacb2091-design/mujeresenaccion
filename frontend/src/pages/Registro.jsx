import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registrarse } from '../services/auth'

export default function Registro() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ nombre: '', entidad: '' })
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState('')
  const [exito, setExito] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.nombre || !form.entidad) {
      setError('Por favor, complete todos los campos.')
      return
    }

    setCargando(true)
    setError('')

    const { ok, error: authError } = await registrarse(form.nombre, form.entidad)

    setCargando(false)

    if (!ok) {
      setError(authError || 'No se pudo completar el registro.')
      return
    }

    setExito(true)
  }

  if (exito) {
    return (
      <div style={{ 
        backgroundColor: '#fdf5f0', 
        padding: 'clamp(1.5rem, 5vw, 2rem) clamp(1rem, 3vw, 1.5rem)',
        width: '100%',
        minHeight: 'auto',
        display: 'block',
        boxSizing: 'border-box'
      }}>
        <div style={{ 
          maxWidth: 'clamp(320px, 90%, 400px)', 
          margin: '0 auto', 
          backgroundColor: '#ffffff', 
          borderRadius: '16px', 
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)', 
          padding: 'clamp(1.5rem, 5vw, 2rem)', 
          textAlign: 'center' 
        }}>
          <h1 style={{ 
            fontSize: 'clamp(1.3rem, 4vw, 1.5rem)', 
            fontWeight: 'bold', 
            color: '#d63384', 
            margin: '0 0 0.5rem 0' 
          }}>¡Listo!</h1>
          <p style={{ 
            color: '#666', 
            fontSize: 'clamp(0.85rem, 2.5vw, 0.9rem)', 
            margin: '0 0 1.5rem 0',
            lineHeight: '1.5'
          }}>Ya puedes empezar a usar el contenido.</p>
          <Link
            to="/modulos"
            style={{ 
              display: 'inline-block', 
              backgroundColor: '#d63384', 
              color: '#ffffff', 
              fontWeight: '600', 
              borderRadius: '8px', 
              padding: 'clamp(0.5rem, 2vw, 0.6rem) clamp(1.2rem, 4vw, 1.5rem)', 
              textDecoration: 'none',
              fontSize: 'clamp(0.9rem, 2.8vw, 1rem)'
            }}
          >
            Ir a los módulos
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ 
      backgroundColor: '#fdf5f0', 
      padding: 'clamp(1.5rem, 5vw, 2rem) clamp(1rem, 3vw, 1.5rem) clamp(1.5rem, 4vw, 2rem)',
      width: '100%',
      margin: 0,
      minHeight: 'auto',
      display: 'block',
      boxSizing: 'border-box'
    }}>
      {/* ✅ Botón Volver al Inicio — IDÉNTICO a la imagen */}
      <Link
        to="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          backgroundColor: '#ffffff',
          color: '#d63384',
          border: '2px solid #d63384',
          borderRadius: '9999px',
          padding: '0.75rem 1.75rem',
          textDecoration: 'none',
          fontSize: 'clamp(0.95rem, 2.8vw, 1.05rem)',
          fontWeight: '500',
          margin: '0 0 clamp(1.5rem, 4vw, 2rem) 0',
          transition: 'all 0.2s ease'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#d63384';
          e.currentTarget.style.color = '#ffffff';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#ffffff';
          e.currentTarget.style.color = '#d63384';
        }}
      >
        ← Volver al Inicio
      </Link>

      {/* Formulario */}
      <div style={{ 
        maxWidth: 'clamp(320px, 90%, 400px)', 
        margin: '0 auto', 
        backgroundColor: '#ffffff', 
        borderRadius: '16px', 
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)', 
        padding: 'clamp(1.5rem, 5vw, 2rem)'
      }}>
        <h1 style={{ 
          fontSize: 'clamp(1.3rem, 4vw, 1.5rem)', 
          fontWeight: 'bold', 
          textAlign: 'center', 
          color: '#333333', 
          margin: '0 0 0.5rem 0' 
        }}>Comienza hoy mismo</h1>
        <p style={{ 
          textAlign: 'center', 
          color: '#666666', 
          fontSize: 'clamp(0.85rem, 2.5vw, 0.9rem)', 
          margin: '0 0 1.8rem 0', 
          lineHeight: '1.5' 
        }}>
          Únete a las mujeres del cantón Mejía que están fortaleciendo su bienestar.
        </p>

        {error && (
          <div style={{ 
            backgroundColor: '#fee2e2', 
            color: '#dc2626', 
            borderRadius: '8px', 
            padding: '0.75rem', 
            margin: '0 0 1rem 0', 
            fontSize: 'clamp(0.8rem, 2.5vw, 0.85rem)', 
            textAlign: 'center' 
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 'clamp(1rem, 3vw, 1.2rem)' 
        }}>
          <div>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Tu nombre completo"
              style={{ 
                width: '100%', 
                border: '1px solid #d1d1d1', 
                borderRadius: '8px', 
                padding: 'clamp(0.7rem, 2.5vw, 0.75rem) clamp(0.8rem, 2.5vw, 1rem)', 
                fontSize: 'clamp(0.9rem, 2.8vw, 0.95rem)', 
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div>
            <select
              name="entidad"
              value={form.entidad}
              onChange={handleChange}
              style={{ 
                width: '100%', 
                border: '1px solid #d1d1d1', 
                borderRadius: '8px', 
                padding: 'clamp(0.7rem, 2.5vw, 0.75rem) clamp(0.8rem, 2.5vw, 1rem)', 
                fontSize: 'clamp(0.9rem, 2.8vw, 0.95rem)', 
                backgroundColor: '#ffffff', 
                outline: 'none',
                boxSizing: 'border-box'
              }}
            >
              <option value="">¿A qué entidad perteneces?</option>
              <option value="MIES">MIES</option>
              <option value="Gobierno Municipal">Gobierno Municipal</option>
              <option value="Instituto Rumilahui">Instituto Rumiñahui</option>
              <option value="Otra">Otra</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={cargando}
            style={{ 
              backgroundColor: '#d63384', 
              color: '#ffffff', 
              fontWeight: '600', 
              border: 'none', 
              borderRadius: '8px', 
              padding: 'clamp(0.75rem, 2.5vw, 0.85rem)', 
              fontSize: 'clamp(0.95rem, 3vw, 1rem)', 
              cursor: 'pointer', 
              marginTop: '0.5rem',
              opacity: cargando ? 0.6 : 1,
              transition: 'opacity 0.2s ease'
            }}
          >
            {cargando ? 'Procesando...' : 'Empezar gratis'}
          </button>
        </form>
      </div>
    </div>
  )
}