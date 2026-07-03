import './HomeModulos.css';

export default function HomeModulos() {

  const modules = [
    {
      title: "NUTRICION",
      desc: "Videos, PDFs y consejos sobre alimentación saludable para cuidadoras",
      badge: "4 videos",
      bgBadge: "bg-[#FDE6F0] text-[#D82973]",
      image: "https://i.pinimg.com/736x/55/75/bd/5575bdff9449f1ddaa3d01f4412ef736.jpg",
      link: "/modulo/nutricion"
    },
    {
      title: "IMAGEN PERSONAL",
      desc: "Tutoriales de imagen personal, fotografías demostrativas y guías descargables",
      badge: "3 videos",
      bgBadge: "bg-[#FDE6F0] text-[#D82973]",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ49o9KqO7h-imlR2Xg28tSI3vEMWY32iXv8Q&s",
      link: "/modulo/imagen-personal"
    },
    {
      title: "CUIDADO DE LA PIEL",
      desc: "Videos prácticos, infografías y guías imprimibles sobre cuidado dermatológico",
      badge: "4 videos",
      bgBadge: "bg-[#FDE6F0] text-[#D82973]",
      image: "https://img.magnific.com/vector-premium/nina-lavando-cara-limpieza-piel-tratamientos-belleza-piel-procedimiento-cosmetico-cuidado-piel-icono-vector_939711-7887.jpg?semt=ais_hybrid&w=740&q=80",
      link: "/modulo/cuidado-piel"
    },
    {
      title: "COMUNICACION ASERTIVA",
      desc: "Seguridad personal e interacción social",
      badge: "3 videos",
      bgBadge: "bg-[#FDE6F0] text-[#D82973]",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQOFAVAdxQYgiNQFyzi0NSMDDbMEAe9-UZucZ5MmaySmuzLv49Ojj__LY&s=10",
      link: "/modulo/comunicacion-asertiva"
    },

{
      title: "SUGERENCIAS",
      desc: "Comparte tus ideas para mejorar la plataforma.",
      badge: "Nuevo",
      bgBadge: "bg-[#FDE6F0] text-[#D82973]",
      image: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
      link: "/modulo/sugerencias"
    }
  ];

  const rosaPrincipal = '#D82973';

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: 'auto',
        backgroundColor: '#FFF8F3',
        textAlign: 'left',
        overflowX: 'hidden',
        overflowY: 'visible',
        boxSizing: 'border-box'
      }}
    >
      {/* Círculo decorativo */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: 'clamp(250px, 50vw, 600px)',
          height: 'clamp(250px, 50vw, 600px)',
          backgroundColor: '#FDE6F0',
          borderRadius: '50%',
          opacity: 0.7,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      {/* Contenido principal */}
      <div
        className="p-4 sm:p-6 md:p-10 lg:p-16 w-full relative"
        style={{ zIndex: 10 }}
      >
        <div className="max-w-7xl mx-auto w-full">

          {/* ✅ Botón Volver al Inicio */}
          <div style={{ marginBottom: 'clamp(1rem, 3vw, 1.5rem)' }}>
            <a
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.6rem 1.2rem',
                backgroundColor: '#fff',
                color: rosaPrincipal,
                border: `1px solid ${rosaPrincipal}`,
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 6px rgba(216, 41, 115, 0.15)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = rosaPrincipal;
                e.currentTarget.style.color = '#fff';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#fff';
                e.currentTarget.style.color = rosaPrincipal;
              }}
            >
              ← Volver al Inicio
            </a>
          </div>

          <header className="mb-6 sm:mb-8 md:mb-12">
            <p
              className="text-xs sm:text-sm uppercase tracking-widest font-semibold"
              style={{ color: `${rosaPrincipal}99` }}
            >
              Contenidos
            </p>

            <h1
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2 tracking-tight"
              style={{ color: rosaPrincipal }}
            >
              Elige tu módulo de aprendizaje
            </h1>

            <div
              style={{
                width: 'clamp(220px, 70%, 580px)',
                height: '4px',
                backgroundColor: rosaPrincipal,
                marginTop: '12px',
                borderRadius: '2px'
              }}
            />
          </header>

          {/* Cuadrícula de módulos totalmente responsiva */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
            {modules.map((m, i) => (
              <a
                key={i}
                href={m.link}
                className="flex items-center md:flex-col bg-white rounded-3xl p-4 sm:p-5 shadow-sm border border-gray-100/70 hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 group cursor-pointer block"
                style={{ textDecoration: 'none' }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-48 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0 mb-0 md:mb-5">
                  <img
                    src={m.image}
                    alt={m.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="ml-4 sm:ml-5 md:ml-0 flex-1 min-w-0 md:text-center w-full">
                  <h2
                    className="text-base sm:text-lg font-bold leading-tight"
                    style={{ color: '#000000' }}
                  >
                    {m.title}
                  </h2>

                  <p
                    className="text-xs sm:text-sm mt-1 sm:mt-2 line-clamp-2 md:line-clamp-none"
                    style={{ color: '#4B5563' }}
                  >
                    {m.desc}
                  </p>

                  <div className="mt-2 sm:mt-3 md:mt-4">
                    <span className={`inline-block px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold rounded-full shadow-inner ${m.bgBadge}`}>
                      {m.badge}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}