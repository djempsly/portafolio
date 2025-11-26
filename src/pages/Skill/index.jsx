// import React from "react";
//  import { motion } from "framer-motion";

// const Skill = ()=>{
//     return(
//         <>
//         <motion.div className="m-4">
//            <h2> Skill </h2>
//            <h3> Frontend</h3>

//            <ul className="ml-8">
//             <li>HTML, CSS, JavaScript</li>
//             <li> React, React Native, Vite </li>
//             <li> Tailwind CSS </li>
//            </ul>
//         </motion.div>
//         </>
//     )
// }

// export default Skill


import React from "react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";

export default function Skills() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };

  const categories = [
    {
      title: t("skills.categories.frontend.title"),
      items: ["HTML", "CSS", "JavaScript", "Tailwind", "React", "Vite", "React Native"],
    },
    {
      title: t("skills.categories.backend.title"),
      items: ["Node.js", "Express", "SQL", "PostgreSQL", "MySQL"],
    },
    {
      title: t("skills.categories.tools.title"),
      items: ["AWS", "Cloudflare", "Railway", "Oracle Cloud", "GitHub", "Docker (básico)"],
    },
    {
      title: t("skills.categories.extra.title"),
      items: ["Python", "Kotlin (básico)", "Java (básico)", "Illustrator", "Premiere Pro"],
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20 lg:py-28">
      <motion.div
        variants={reduceMotion ? {} : fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          {t("skills.title")}
        </h1>

        <p className="text-slate-300 text-center max-w-2xl mx-auto mb-12">
          {t("skills.subtitle")}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-slate-800/40 border border-slate-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold mb-4">{cat.title}</h3>
              <ul className="space-y-2 text-slate-300">
                {cat.items.map((skill, idx) => (
                  <li key={idx}> {skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

