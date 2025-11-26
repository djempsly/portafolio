// import React from "react";
//  import { motion } from "framer-motion";
//  import jeffry from "../../assets/almonte.webp"

// const About = ()=>{
//     return(
//         <>

//         <motion.div className="flex justify-between"> 
//               <motion.div   className="w-180 flex  flex-col items-center text-justify bg-gray-150 m-4 border-.5 border-transparent shadow-xl/100 rounded-lg"
//                   initial={{ opacity: 1, y: 20 }}
//                   whileHover={{scale: 1.05}}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.9 }}>
//                   <h2 className="text-3xl font-bold">Historia</h2>
//                 <p className="text-xl m-8">
//                     Soy una persona apasionada por aprender, crear y resolver problemas. Desde el 2011 he trabajado en administración y como digitador, al mismo tiempo que he desarrollado habilidades profundas en informática, programación y educación.

//                     He sido profesor de informática, inglés y francés durante 8 años, coordinador académico durante 3 años y he trabajado como secretario y contador en diversas instituciones educativas y negocios privados.

//                     La tecnología siempre ha sido mi espacio natural: desarrollo software full-stack, estudio ciberseguridad, administro sistemas, diseño contenido visual y gestiono infraestructura cloud.

//                     Hablar varios idiomas —inglés (upper intermediate), francés (avanzado), creole haitiano y español— me ha permitido trabajar con distintas culturas y comunicarme con equipos diversos.

//                     Mi objetivo es seguir creciendo como desarrollador full-stack y profesional de TI, integrando ciberseguridad, programación y creatividad para crear soluciones modernas y confiables.
//                 </p>
//               </motion.div>

//               <motion.div
//                 whileHover={{ scale: 1.04 }}
//                 transition={{ duration:0.7}}
//                 className="bg-[#1e293b] p-6 rounded-2xl shadow-lg m-4"
//               >
//                 <h3 className="text-xl font-semibold">  </h3>
//                 <img src={jeffry} alt="" className=" w-150 h-150 rounded-full shadow-xl/30 border-gray-100 border-2" />
//               </motion.div>
//           </motion.div>

//             </>
//     )


// }


// export default About







// src/pages/About.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";

export default function About() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };

  return (
    <section className="container mx-auto px-4 py-20 lg:py-28">
      <motion.div
        variants={reduceMotion ? {} : fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          {t("about.title")}
        </h1>

        {/* Description */}
        <p className="text-slate-300 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          {t("about.description")}
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* Card 1 */}
          <motion.div
            variants={reduceMotion ? {} : fadeUp}
            className="p-6 rounded-xl bg-slate-800/40 border border-slate-700 shadow-xl hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">{t("about.cards.experience.title")}</h3>
            <p className="text-slate-400 text-sm">{t("about.cards.experience.text")}</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={reduceMotion ? {} : fadeUp}
            className="p-6 rounded-xl bg-slate-800/40 border border-slate-700 shadow-xl hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">{t("about.cards.education.title")}</h3>
            <p className="text-slate-400 text-sm">{t("about.cards.education.text")}</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={reduceMotion ? {} : fadeUp}
            className="p-6 rounded-xl bg-slate-800/40 border border-slate-700 shadow-xl hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">{t("about.cards.languages.title")}</h3>
            <p className="text-slate-400 text-sm">{t("about.cards.languages.text")}</p>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          variants={reduceMotion ? {} : fadeUp}
          className="text-center mt-12"
        >
          <button className="px-6 py-3 bg-accent text-slate-900 font-semibold rounded-lg shadow-md hover:scale-[1.02] transition">
            {t("about.cta.learnMore")}
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
