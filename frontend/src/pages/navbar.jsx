import "./Navbar.css";
import LogoMies from '../assets/logoMies.png';

export default function Navbar() {
  return (
    <header style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap", 
      gap: "1rem",
      padding: "1rem 5%", 
      backgroundColor: "#ffffff",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      minHeight: "85px",
      width: "100%",
      margin: 0,
      boxSizing: "border-box"
    }}>
      {/* Logo MIES */}
      <div>
        <img 
          src={LogoMies} 
          alt="Logo Ministerio de Inclusión Económica y Social" 
          style={{
            height: "clamp(45px, 8vw, 60px)", 
            width: "auto",
            display: "block"
          }}
        />
      </div>

      {/* Título adaptable */}
      <h1 style={{
        fontFamily: "'Montserrat', 'Arial Black', sans-serif",
        fontSize: "clamp(1.2rem, 4vw, 1.9rem)", /* Se achica en pantallas chicas */
        fontWeight: "900",
        color: "#d63384",
        letterSpacing: "1px",
        textTransform: "uppercase",
        margin: "0.5rem 0",
        textAlign: "center"
      }}>
        MUJER EN ACCIÓN
      </h1>

      {/* Botón adaptable */}
      <div>
        <button style={{
          backgroundColor: "#d63384",
          color: "#ffffff",
          border: "none",
          borderRadius: "8px",
          padding: "0.6rem 1.2rem",
          fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
          fontWeight: "700",
          cursor: "pointer",
          transition: "background-color 0.2s ease"
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#b02a6d"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#d63384"}
        >
          Ingresar
        </button>
      </div>
    </header>
  );
}