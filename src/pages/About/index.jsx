import React from "react";
 import { motion } from "framer-motion";
 import jeffry from "../../assets/almonte.webp"

const About = ()=>{
    return(
        <>

        
        <div>
            <h2>Historia + Identidad Profesional</h2>
            <p>
                Soy una persona apasionada por aprender, crear y resolver problemas. Desde el 2011 he trabajado en administración y como digitador, al mismo tiempo que he desarrollado habilidades profundas en informática, programación y educación.

He sido profesor de informática, inglés y francés durante 8 años, coordinador académico durante 3 años y he trabajado como secretario y contador en diversas instituciones educativas y negocios privados.

La tecnología siempre ha sido mi espacio natural: desarrollo software full-stack, estudio ciberseguridad, administro sistemas, diseño contenido visual y gestiono infraestructura cloud.

Hablar varios idiomas —inglés (upper intermediate), francés (avanzado), creole haitiano y español— me ha permitido trabajar con distintas culturas y comunicarme con equipos diversos.

Mi objetivo es seguir creciendo como desarrollador full-stack y profesional de TI, integrando ciberseguridad, programación y creatividad para crear soluciones modernas y confiables.
            </p>
        </div>
        
       

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <h2 className="text-3xl font-bold">Sobre mí</h2>
</motion.div>

<motion.div
  whileHover={{ scale: 1.05 }}
  className="bg-[#1e293b] p-6 rounded-2xl shadow-lg"
>
  <h3 className="text-xl font-semibold"> Foto </h3>
  <img src={jeffry} alt="" className=" w-150 h-150 rounded-full" />
</motion.div>


        
            </>
    )


}


export default About