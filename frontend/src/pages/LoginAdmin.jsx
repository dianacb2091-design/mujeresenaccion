// LoginAdmin - basado en diseño de Teo Valderramo

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { iniciarSesion, esAdmin, cerrarSesion } from '../services/auth'

export default function LoginAdmin() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ correo: '', password: '' })
  const [mostrarPassword, setMostrarPassword] = useState(false)
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

    if (!ok) {
      setCargando(false)
      setError(authError || 'No se pudo iniciar sesión.')
      return
    }

    const esAdministradora = await esAdmin()
    setCargando(false)

    if (!esAdministradora) {
      await cerrarSesion()
      setError('Esta cuenta no tiene permisos de administrador.')
      return
    }

    navigate('/admin')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#07152d] to-[#0c1f42]">
      <div className="w-full max-w-[420px] bg-[#13203f] rounded-[30px] p-10 text-center shadow-[0_0_25px_rgba(0,255,255,0.15)]">
        <div className="mb-4 flex justify-center">
          <svg viewBox="0 0 100 100" fill="#00E5FF" className="w-20 h-20">
            <circle cx="50" cy="20" r="10" />
            <path d="M30 55c0-12 9-20 20-20s20 8 20 20v5H30z" />
            <path
              d="M70 35l15 5v15c0 12-8 22-15 25-7-3-15-13-15-25V40z"
              fill="none"
              stroke="#00E5FF"
              strokeWidth="4"
            />
          </svg>
        </div>

        <h1 className="text-white text-4xl font-bold mb-2">BellaForma</h1>
        <p className="text-[#c9d1e2] text-base mb-8">Panel Administrativo</p>

        {error && (
          <div className="bg-red-100 text-red-600 rounded-lg p-3 mb-5 text-sm text-left">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="text-left">
          <div className="relative mb-5">
            <i className="fa-solid fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
            <input
              type="email"
              name="correo"
              value={form.correo}
              onChange={handleChange}
              placeholder="Correo electrónico"
              required
              className="w-full pl-11 pr-4 py-4 rounded-2xl bg-[#f4f0c9] text-base outline-none focus:shadow-[0_0_10px_#00f7ff]"
            />
          </div>

          <div className="relative mb-5">
            <i className="fa-solid fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
            <input
              type={mostrarPassword ? 'text' : 'password'}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Contraseña"
              required
              className="w-full pl-11 pr-11 py-4 rounded-2xl bg-[#f4f0c9] text-base outline-none focus:shadow-[0_0_10px_#00f7ff]"
            />
            <i
              onClick={() => setMostrarPassword(!mostrarPassword)}
              className={`fa-solid ${mostrarPassword ? 'fa-eye-slash' : 'fa-eye'} absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer`}
            ></i>
          </div>

          <div className="flex justify-between items-center mb-6 text-white text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" />
              Recordarme
            </label>
            <a href="#" className="text-[#00f7ff] hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button
            type="submit"
            disabled={cargando}
            className="w-full py-4 rounded-2xl text-white text-lg font-semibold bg-gradient-to-r from-[#18d7f5] to-[#6d45f5] hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] transition disabled:opacity-50"
          >
            {cargando ? 'Ingresando...' : 'Iniciar Sesión'}
          </button>
        </form>

        <div className="mt-8 text-[#b7bfd3] text-sm">© 2026 BellaForma</div>
      </div>
    </div>
  )
}
