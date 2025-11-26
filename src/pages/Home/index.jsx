// import React from "react";
// import jeffry1 from "../../assets/jeffry.webp"
// import { useTranslation } from "react-i18next";
// import {motion} from "framer-motion"

// const Home = () =>{
//     const { t } = useTranslation();
//     return(
//         <>
//         <h1>{t("home.title")}</h1>

//       <p>{t("home.subtitle")}</p>


//         <motion.div className="flex w-100 justify-between">

//       <button className="border-radius" >{t("home.cta.viewProjects")}</button>
//       <button>{t("home.cta.downloadCV")}</button>

//         </motion.div>
       



//         <p>Hola, soy Jeffry Almonte
// Full-Stack Developer | Cybersecurity Enthusiast | Educador | Contador | Diseñador Gráfico

// Desarrollo aplicaciones web y móviles modernas, analizo datos, gestiono sistemas, diseño contenido profesional y ofrezco soluciones digitales completas para negocios y proyectos personales.

// [Ver Portafolio]
// [Contáctame]</p>

// <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-10">
//   <div>
//     <h1 className="text-4xl md:text-5xl font-bold w-200"> {t("home.title")} </h1>
//     <p className="text-slate-300 mt-4">Full-Stack Developer & Cybersecurity Enthusiast</p>
//   </div>
//   <img src={jeffry1} className="w-100 h-100 rounded-full shadow-xl" />
// </div>
//         </>
//     )
// }

// export default Home


// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";
import jeffry1 from "../../assets/jeffry.webp"

export default function Home() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      aria-labelledby="home-title"
      className="container mx-auto px-4 py-20 lg:py-28"
    >
      <motion.div
        variants={shouldReduceMotion ? {} : container}
        initial={shouldReduceMotion ? undefined : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "show"}
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Hero text */}
        <motion.div variants={shouldReduceMotion ? {} : item}>
          <h1
            id="home-title"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            {t("home.title")}
          </h1>

          <p className="mt-4 text-slate-300 text-lg md:text-xl max-w-2xl">
            {t("home.subtitle")}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent text-slate-500 font-semibold shadow-md hover:scale-[1.02] transform transition"
              aria-label={t("home.cta.viewProjects")}
            >
              {t("home.cta.viewProjects")}
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-700 text-slate-500 hover:bg-slate-800 transition"
              aria-label={t("home.cta.contactMe")}
            >
              {t("home.cta.contactMe")}
            </Link>
          </div>

          <ul className="mt-8 text-sm text-slate-400 space-y-2">
            <li>• Full-Stack: React, React Native, Node.js, Express, Javascript, Python, HTML, CSS, Tailwindcss</li>
            <li>• DBs & Cloud: MySQL, PostgreSQL, AWS, Oracle Cloud, Railway</li>
            <li>• Seguridad & Labs: Cisco, TryHackMe, HackTheBox</li>
          </ul>
        </motion.div>

        {/* Hero image / card */}
        <motion.div
          variants={shouldReduceMotion ? {} : item}
          className="flex justify-center md:justify-end"
          aria-hidden="true"
        >
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-slate-700/40 bg-gradient-to-br from-slate-700 to-slate-900">
            {/* Replace the src with your real profile image path */}
            <img
              src={jeffry1}
              alt={ "Profile picture"}
              className="w-full h-full object-fit rounded-full "
              loading="lazy"
            />

            {/* subtle badge with main roles */}
            <div className="absolute left-4 bottom-4 bg-slate-900/70 backdrop-blur-sm px-3 py-2 rounded-md text-xs text-slate-100">
              <span className="block font-semibold text-sm">Full-Stack</span>
              <span className="block text-slate-300 text-[11px]">Dev • Cloud • Security</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}


