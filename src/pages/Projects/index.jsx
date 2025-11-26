// import React from "react";

// const Projects = () =>{
//     return(
//         <>
//         <p>Hola soy projects</p>
//         </>
//     )
// }


// export default Projects




// src/pages/Projects.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";

export default function Projects() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, staggerChildren: 0.12 },
    },
  };

  const projects = [
    {
      id: 1,
      title: "lhamsdj.com",
      description: t("projects.items.lhamsdj"),
      img: "/img/projects/lhamsdj.png",
      tech: ["React", "Node.js", "AWS", "Cloudflare"],
      demo: "https://lhamsdj.com",
      github: "#",
    },
    {
      id: 2,
      title: "Portafolio Profesional",
      description: t("projects.items.portfolio"),
      img: "/img/projects/portfolio.png",
      tech: ["React", "Tailwind", "Framer Motion"],
      demo: "#",
      github: "#",
    },
    {
      id: 3,
      title: "App móvil (React Native)",
      description: t("projects.items.mobileApp"),
      img: "/img/projects/mobileapp.png",
      tech: ["React Native", "Node.js", "PostgreSQL"],
      demo: "#",
      github: "#",
    }
  ];

  return (
    <section className="container mx-auto px-4 py-20 lg:py-28">
      <motion.div
        variants={reduceMotion ? {} : fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          {t("projects.title")}
        </h1>

        <p className="text-slate-300 text-center max-w-3xl mx-auto">
          {t("projects.subtitle")}
        </p>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={reduceMotion ? {} : fadeUp}
              className="bg-slate-800/40 border border-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-slate-700 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center mt-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent font-semibold hover:underline"
                  >
                    {t("projects.cta.demo")}
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
