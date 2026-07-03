import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./pages/navbar";
import Footer from "./pages/footer";
import Index from './index';
import Login from './pages/Login';
import Registro from './pages/Registro';
import LoginAdmin from './pages/LoginAdmin';
import HomeModulos from './pages/HomeModulos';
import Nutricion from "./pages/Nutricion";
import ImagenPersonal from "./pages/ImagenPersonal";
import CuidadoPiel from "./pages/CuidadoPiel";
import ComunicacionAsertiva from "./pages/ComunicacionAsertiva";
import Sugerencias from "./pages/sugerencias";


// Sección ¿Cómo funciona?
function SeccionComoFunciona() {
  return (
    <div style={{
      width: '92%',
      maxWidth: '1000px',
      margin: 'clamp(20px, 5vw, 40px) auto',
      backgroundColor: '#070707ee',
      borderRadius: '12px',
      padding: 'clamp(16px, 4vw, 25px) clamp(12px, 3vw, 20px)',
      border: '1px solid #eee',
      boxSizing: 'border-box'
    }}>
      <h3 style={{
        color: '#d63384',
        fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
        margin: '0 0 clamp(12px, 3vw, 18px) 0',
        textAlign: 'center'
      }}>¿CÓMO FUNCIONA?</h3>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(15px, 3vw, 20px)'
      }}>
        <div style={{
          display: 'flex',
          gap: 'clamp(10px, 2vw, 15px)',
          alignItems: 'flex-start'
        }}>
          <div style={{
            width: 'clamp(28px, 6vw, 32px)',
            height: 'clamp(28px, 6vw, 32px)',
            borderRadius: '50%',
            backgroundColor: '#d63384',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            flexShrink: 0,
            fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
          }}>1</div>
          <div>
            <p style={{
              color: '#d63384',
              fontWeight: 'bold',
              margin: '0 0 6px 0',
              fontSize: 'clamp(0.9rem, 2.8vw, 1rem)'
            }}>Regístrate con tu nombre</p>
            <p style={{
              color: '#f7ebeb',
              margin: '0',
              lineHeight: '1.5',
              fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)'
            }}>Solo tus datos básicos, sin contraseñas complicadas.</p>
          </div>
        </div>
        <div style={{
          display: 'flex',
          gap: 'clamp(10px, 2vw, 15px)',
          alignItems: 'flex-start'
        }}>
          <div style={{
            width: 'clamp(28px, 6vw, 32px)',
            height: 'clamp(28px, 6vw, 32px)',
            borderRadius: '50%',
            backgroundColor: '#d63384',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            flexShrink: 0,
            fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
          }}>2</div>
          <div>
            <p style={{
              color: '#d63384',
              fontWeight: 'bold',
              margin: '0 0 6px 0',
              fontSize: 'clamp(0.9rem, 2.8vw, 1rem)'
            }}>Elige un módulo</p>
            <p style={{
              color: '#f7ebeb',
              margin: '0',
              lineHeight: '1.5',
              fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)'
            }}>Nutrición, imagen, cuidado de piel o comunicación.</p>
          </div>
        </div>
        <div style={{
          display: 'flex',
          gap: 'clamp(10px, 2vw, 15px)',
          alignItems: 'flex-start'
        }}>
          <div style={{
            width: 'clamp(28px, 6vw, 32px)',
            height: 'clamp(28px, 6vw, 32px)',
            borderRadius: '50%',
            backgroundColor: '#d63384',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            flexShrink: 0,
            fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
          }}>3</div>
          <div>
            <p style={{
              color: '#d63384',
              fontWeight: 'bold',
              margin: '0 0 6px 0',
              fontSize: 'clamp(0.9rem, 2.8vw, 1rem)'
            }}>Mira el contenido</p>
            <p style={{
              color: '#f7ebeb',
              margin: '0',
              lineHeight: '1.5',
              fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)'
            }}>Videos cortos y guías que puedes descargar.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Layout() {
  const ubicacion = useLocation();
  const esPantallaPrincipal = ubicacion.pathname === "/";

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      margin: 0,
      width: '100%',
      boxSizing: 'border-box',
      overflowX: 'hidden',
      backgroundColor: '#fdf5f0'
    }}>
      {esPantallaPrincipal && <Navbar />}

      <div style={{
        flex: 1,
        margin: 0,
        padding: 0,
        width: '100%',
        boxSizing: 'border-box',
        backgroundColor: '#fdf5f0'
      }}>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* ✅ Estructura corregida: sin altura fija que tape contenido */}
          <Route path="/modulos"
            element={
              <div style={{ width: '100%', boxSizing: 'border-box' }}>
                <HomeModulos />
                <SeccionComoFunciona />
              </div>
            }
          />
          <Route path="/modulo/nutricion" element={<Nutricion />} />
          <Route path="/modulo/imagen-personal" element={<ImagenPersonal />} />
          <Route path="/modulo/cuidado-piel" element={<CuidadoPiel />} />

          {/* NUEVA RUTA */}
          <Route
            path="/modulo/comunicacion-asertiva"
            element={<ComunicacionAsertiva />}
          />
          <Route
          path="/modulo/sugerencias"
          element={<Sugerencias />}
          />

          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/admin/login" element={<LoginAdmin />} />
        </Routes>
      </div>

      {esPantallaPrincipal && <Footer />}

      {!esPantallaPrincipal && (
        <div style={{
          width: '100%',
          padding: 'clamp(16px, 4vw, 20px) clamp(10px, 2.5vw, 20px)',
          backgroundColor: '#fdf5f0',
          borderTop: '1px solid #eee',
          textAlign: 'center',
          fontSize: 'clamp(11px, 2.5vw, 13px)',
          color: '#664455',
          marginTop: '0',
          boxSizing: 'border-box'
        }}>
          <h4 style={{
            color: '#d63384',
            margin: '0 0 6px 0',
            fontSize: 'clamp(13px, 3vw, 15px)'
          }}>
            Mujer en Acción
          </h4>
          <p style={{ margin: '2px 0', lineHeight: '1.5' }}>
            Proyecto de vinculación comunitaria - Instituto Superior Tecnológico Rumiñahui
          </p>
          <p style={{ margin: '2px 0', lineHeight: '1.5' }}>
            Sistemas y Gestión de Datos y Estética Integral - 2026-2027
          </p>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;