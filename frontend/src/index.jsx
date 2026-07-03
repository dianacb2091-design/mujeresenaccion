import React from 'react';
import { useNavigate } from 'react-router-dom';
import imagenPrincipal from './assets/imagen-principal.jpeg';

export default function Idex() {
  const navigate = useNavigate();

  const esMovil = window.innerWidth <= 768;

  return (
    <div
      style={{
        backgroundColor: '#fdf5f0',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '30px 5%',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Círculo decorativo ajustado */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '-80px',
          transform: 'translateY(-50%)',
          width: '32vw',
          height: '32vw',
          backgroundColor: '#d63384',
          borderRadius: '50%',
          opacity: '0.35',
          zIndex: 0
        }}
      />

      {/* Imagen mejorada con curva más suave */}
      <div
        style={{
          position: 'absolute',
          top: esMovil ? '75%' : '50%',
          left: '0',
          transform: 'translateY(-50%)',
          width: esMovil ? '120%' : '48%',
          height: esMovil ? 'auto' : '90%',
          zIndex: 2,
          overflow: 'hidden',
         borderRadius: esMovil ? '0' : undefined,
borderTopRightRadius: esMovil ? '0' : '55%',
borderBottomRightRadius: esMovil ? '0' : '55%',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
        }}
      >
        <img
          src={imagenPrincipal}
          alt="Mujeres aprendiendo"
          style={{
            width: '100%',
            height: esMovil ? 'auto' : '100%', // SOLO CAMBIÉ ESTO
            objectFit: esMovil ? 'contain' : 'cover', // SOLO CAMBIÉ ESTO
            objectPosition: 'center'
          }}
        />
      </div>

      <div
        style={{
          textAlign: 'center',
          zIndex: 3,
          width: '100%',
          maxWidth: '520px',
          marginRight: '3%',
          padding: '2rem'
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(2.2rem, 6vw, 3.6rem)',
            color: '#d63384',
            fontWeight: '700',
            margin: '0 0 0.8rem 0',
            lineHeight: '1.2'
          }}
        >
          Imagen, Salud y Bienestar
        </h1>

        <div
          style={{
            width: '80px',
            height: '2px',
            backgroundColor: '#d63384',
            margin: '18px auto'
          }}
        />

      <p
  style={{
    fontSize: '1.10rem',
    color: '#000000',      // Negro puro
    fontWeight: '700',     // Más grueso (bold)
    lineHeight: '1.6',
    margin: '0 0 2rem 0'
  }}
>
  Tu esencia, nuestra prioridad. Nutrición, imagen y cuidado de la piel
  en un solo lugar.
</p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '18px',
            flexWrap: 'wrap'
          }}
        >
          <button
            onClick={() => navigate('/modulos')}
            style={{
              padding: '13px 32px',
              backgroundColor: '#d63384',
              color: '#fff',
              border: 'none',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'background 0.2s ease'
            }}
          >
            VER MÓDULOS
          </button>

          <button
            onClick={() => navigate('/registro')}
            style={{
              padding: '13px 32px',
              backgroundColor: 'transparent',
              color: '#d63384',
              border: '2px solid #d63384',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'background 0.2s ease'
            }}
          >
            REGISTRARSE
          </button>
        </div>
      </div>
    </div>
  );
}