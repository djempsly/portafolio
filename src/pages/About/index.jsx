import React from "react";
 import { motion } from "framer-motion";
 import jeffry from "../../assets/almonte.webp"

const About = ()=>{
    return(
        <>

        <motion.div className="flex justify-between"> 
              <motion.div   className="w-180 flex    flex-col items-center text-justify bg-gray-150 m-4 border-.5 border-blue-800 shadow-xl/100 rounded-lg"
                  initial={{ opacity: 1, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}>
                  <h2 className="text-3xl font-bold">Historia</h2>
                <p className="text-xl m-8">
                    Soy una persona apasionada por aprender, crear y resolver problemas. Desde el 2011 he trabajado en administración y como digitador, al mismo tiempo que he desarrollado habilidades profundas en informática, programación y educación.

                    He sido profesor de informática, inglés y francés durante 8 años, coordinador académico durante 3 años y he trabajado como secretario y contador en diversas instituciones educativas y negocios privados.

                    La tecnología siempre ha sido mi espacio natural: desarrollo software full-stack, estudio ciberseguridad, administro sistemas, diseño contenido visual y gestiono infraestructura cloud.

                    Hablar varios idiomas —inglés (upper intermediate), francés (avanzado), creole haitiano y español— me ha permitido trabajar con distintas culturas y comunicarme con equipos diversos.

                    Mi objetivo es seguir creciendo como desarrollador full-stack y profesional de TI, integrando ciberseguridad, programación y creatividad para crear soluciones modernas y confiables.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-[#1e293b] p-6 rounded-2xl shadow-lg m-4"
              >
                <h3 className="text-xl font-semibold">  </h3>
                <img src={jeffry} alt="" className=" w-150 h-150 rounded-full shadow-xl/30 border-gray-100 border-2" />
              </motion.div>
          </motion.div>

            </>
    )


}


export default About