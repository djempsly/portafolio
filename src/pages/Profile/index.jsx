// import React from "react";
// import jeffry from "../../assets/almonte.webp"
// import { motion } from "framer-motion"

// const Profile = () =>{
//     return(
//         <>
//         <motion.div className="flex justify-between bg-accent">
//             <motion.div className="w-180 flex  flex-col items-center text-justify bg-gray-150 m-4 border-.5 border-transparent shadow-xl/100 rounded-lg"
//                   initial={{ opacity: 1, y: 20 }}
//                   whileHover={{scale: 1.05}}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.9 }}>
//                  <h2 className="text-3xl font-bold"> Perfil profesional</h2>
//                     <p className="text-lx m-8"> Soy un profesional multidisciplinario con experiencia demostrada en desarrollo de software, administración, educación, contabilidad y tecnologías de la información. Creo soluciones integrales que combinan programación, seguridad informática, diseño, administración de datos y gestión operativa.

//                     Trabajo con tecnologías modernas como React, React Native, Node.js, Express, MySQL, PostgreSQL, AWS, Oracle Cloud y Railway. Además, tengo formación en ciberseguridad (Cisco, TryHackMe, HackTheBox, Cybrary) y manejo intermedio de Python.

//                     He trabajado en administración, contabilidad y gestión educativa por más de 14 años, lo que me permite entender procesos empresariales, administrativos y operativos desde una perspectiva técnica y humana.

//                     También soy diseñador gráfico, editor de video y creador de contenido digital, combinando tecnología con creatividad.</p>

//             </motion.div>

//             <motion.div 
//                 whileHover={{ scale: 1.04 }}
//                 transition={{ duration:0.7}}
//                 className="bg-[#1e293b] p-6 rounded-2xl shadow-lg m-4 shawdow-xl"
//             >
//                 <img src={jeffry} alt="Foto" className="w-100 h-100 rounded-full "/>

//             </motion.div>
//         </motion.div>
//         </>
//     )
// }

// export default Profile


// src/pages/Profile.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";

export default function Profile() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };

  return (
    <section className="container mx-auto px-4 py-20 lg:py-28">
      <motion.div
        variants={reduceMotion ? {} : fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          {t("profile.title")}
        </h1>

        <p className="text-slate-300 text-lg leading-relaxed text-center mb-10">
          {t("profile.description")}
        </p>

        <div className="grid sm:grid-cols-2 gap-8">
          <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">{t("profile.experience.title")}</h3>
            <p className="text-slate-300 text-sm whitespace-pre-line">
              {t("profile.experience.text")}
            </p>
          </div>

          <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">{t("profile.languages.title")}</h3>
            <p className="text-slate-300 text-sm whitespace-pre-line">
              {t("profile.languages.text")}
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <button className="px-6 py-3 bg-accent text-slate-900 font-semibold rounded-lg shadow-md hover:scale-[1.02] transition">
            {t("profile.cta.cv")}
          </button>
        </div>
      </motion.div>
    </section>
  );
}









