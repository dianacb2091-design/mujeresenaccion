import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { iniciarSesion } from '../services/auth'

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ correo: '', password: '' })
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.correo || !form.password) {
      setError('Por favor, complete todos los campos.')
      return
    }

    setCargando(true)
    setError('')

    const { ok, error: authError } = await iniciarSesion(form.correo, form.password)

    setCargando(false)

    if (!ok) {
      setError(authError || 'No se pudo iniciar sesión.')
      return
    }

    navigate('/')
  }

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-pink-600 mb-2">Ingresar</h1>
        <p className="text-gray-500 mb-6 text-sm">Bienvenida de nuevo a BellaForma</p>

        {error && (
          <div className="bg-red-100 text-red-600 rounded-lg p-3 mb-4 text-sm">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Correo</label>
            <input
              type="email"
              name="correo"
              value={form.correo}
              onChange={handleChange}
              placeholder="tucorreo@ejemplo.com"
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <button
            type="submit"
            disabled={cargando}
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg py-2 transition-colors disabled:opacity-50"
          >
            {cargando ? 'Ingresando...' : 'Ingresar'}
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-6 text-center">
          ¿No tienes cuenta?{' '}
          <Link to="/registro" className="text-pink-600 font-semibold">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  )
}
