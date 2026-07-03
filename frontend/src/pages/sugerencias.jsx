import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { guardarSugerencia } from "../services/sugerencias";

function Sugerencias() {

  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [error, setError] = useState("");
  const [exito, setExito] = useState("");

  async function enviar(e){

    e.preventDefault();

    if(nombre==="" || categoria==="" || mensaje===""){
      setError("Complete los campos obligatorios.");
      setExito("");
      return;
    }

    setError("");

    const respuesta = await guardarSugerencia(
      nombre,
      correo,
      categoria,
      mensaje
    );

    if(!respuesta.ok){
      setError(respuesta.error);
      return;
    }

    setExito("¡Gracias por tu sugerencia!");

    setNombre("");
    setCorreo("");
    setCategoria("");
    setMensaje("");

  }

  return(

<div
style={{
background:"#FFF8F3",
minHeight:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
padding:"40px 20px"
}}
>

<div
style={{
width:"100%",
maxWidth:"520px",
background:"white",
padding:"40px",
borderRadius:"22px",
boxShadow:"0 10px 30px rgba(0,0,0,.08)"
}}
>

<button

onClick={()=>navigate("/modulos")}

style={{

background:"transparent",

border:"none",

color:"#D82973",

fontWeight:"bold",

cursor:"pointer",

marginBottom:"20px",

fontSize:"15px"

}}

>

← Volver a módulos

</button>

<h1

style={{

fontSize:"42px",

marginBottom:"10px",

color:"#222"

}}

>

 Banco de Sugerencias

</h1>

<p

style={{

color:"#666",

lineHeight:"1.7",

marginBottom:"35px"

}}

>

Tu opinión nos ayuda a mejorar la plataforma Mujer en Acción.
Comparte con nosotros cualquier recomendación o idea.

</p>

{error && (

<div

style={{

background:"#FEE2E2",

padding:"15px",

borderRadius:"10px",

marginBottom:"20px",

color:"#B91C1C"

}}

>

{error}

</div>

)}

{exito && (

<div

style={{

background:"#DCFCE7",

padding:"15px",

borderRadius:"10px",

marginBottom:"20px",

color:"#166534"

}}

>

{exito}

</div>

)}

<form onSubmit={enviar}>
<label
style={{
fontWeight:"600",
color:"#333"
}}
>
Nombre completo *
</label>

<input
type="text"
placeholder="Ingrese su nombre completo"
value={nombre}
onChange={(e)=>setNombre(e.target.value)}

style={input}
/>

<label
style={{
fontWeight:"600",
color:"#333"
}}
>
Correo electrónico
</label>

<input
type="email"
placeholder="ejemplo@correo.com"
value={correo}
onChange={(e)=>setCorreo(e.target.value)}

style={input}
/>

<label
style={{
fontWeight:"600",
color:"#333"
}}
>
Categoría *
</label>

<select

value={categoria}

onChange={(e)=>setCategoria(e.target.value)}

style={input}

>

<option value="">
Seleccione una categoría
</option>

<option value="Contenido">
Contenido
</option>

<option value="Diseño">
Diseño
</option>

<option value="Error Técnico">
Error técnico
</option>

<option value="Nueva Funcionalidad">
Nueva funcionalidad
</option>

<option value="Otro">
Otro
</option>

</select>

<label
style={{
fontWeight:"600",
color:"#333"
}}
>
Sugerencia *
</label>

<textarea

rows="6"

placeholder="Escriba aquí su sugerencia..."

value={mensaje}

onChange={(e)=>setMensaje(e.target.value)}

style={{

...input,

resize:"vertical",

minHeight:"150px"

}}

></textarea>

<button

type="submit"

style={{

width:"100%",

padding:"16px",

marginTop:"20px",

background:"#D82973",

border:"none",

borderRadius:"12px",

color:"white",

fontWeight:"bold",

fontSize:"18px",

cursor:"pointer",

transition:".3s"

}}

onMouseOver={(e)=>{

e.currentTarget.style.background="#BE2165";

}}

onMouseOut={(e)=>{

e.currentTarget.style.background="#D82973";

}}

>

Enviar sugerencia

</button>

</form>
      <div
        style={{
          marginTop: "35px",
          background: "#FDE6F0",
          borderRadius: "15px",
          padding: "20px",
          textAlign: "center",
          border: "1px solid #F8BBD0"
        }}
      >
        <h3
          style={{
            color: "#D82973",
            marginBottom: "10px",
            fontSize: "20px"
          }}
        >
           Gracias por ayudarnos
        </h3>

        <p
          style={{
            color: "#555",
            lineHeight: "1.7",
            fontSize: "15px",
            margin: 0
          }}
        >
          Cada sugerencia es importante para seguir mejorando la plataforma
          <strong> Mujer en Acción</strong>. Nuestro equipo revisará cada
          comentario para ofrecer una mejor experiencia a todas las usuarias.
        </p>
      </div>

    </div>

  </div>

  );

}

const input = {

  width: "100%",

  padding: "14px",

  marginTop: "8px",

  marginBottom: "20px",

  borderRadius: "10px",

  border: "1px solid #D9D9D9",

  fontSize: "15px",

  outline: "none",

  boxSizing: "border-box",

  transition: "0.3s"

};

export default Sugerencias;