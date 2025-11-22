import React from "react";
import jeffry from "../../assets/almonte.webp"

const Profile = () =>{
    return(
        <>
        <div>
             <h2> Perfil profesional</h2>
        <p> Soy un profesional multidisciplinario con experiencia demostrada en desarrollo de software, administración, educación, contabilidad y tecnologías de la información. Creo soluciones integrales que combinan programación, seguridad informática, diseño, administración de datos y gestión operativa.

Trabajo con tecnologías modernas como React, React Native, Node.js, Express, MySQL, PostgreSQL, AWS, Oracle Cloud y Railway. Además, tengo formación en ciberseguridad (Cisco, TryHackMe, HackTheBox, Cybrary) y manejo intermedio de Python.

He trabajado en administración, contabilidad y gestión educativa por más de 14 años, lo que me permite entender procesos empresariales, administrativos y operativos desde una perspectiva técnica y humana.

También soy diseñador gráfico, editor de video y creador de contenido digital, combinando tecnología con creatividad.</p>

        </div>
       
         <img src={jeffry} alt="Foto" className="w-100 h-100 rounded-full "/>
        
        </>
    )
}




export default Profile
