// import React from "react";

// const Contact = ()=>{

//     return(

//         <>
//         <p>Hola soy contacto</p>
        
//         </>
//     )


// }

// export default Contact



// src/pages/Contact.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";

export default function Contact() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", form);
    alert(t("contact.alert"));
  };

  const fade = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };

  return (
    <section className="container mx-auto px-4 py-20 lg:py-28">
      <motion.div
        variants={reduceMotion ? {} : fade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          {t("contact.title")}
        </h1>

        <p className="text-slate-300 text-center mb-10">
          {t("contact.subtitle")}
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-800/40 p-8 rounded-xl border border-slate-700 shadow-xl space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder={t("contact.fields.name")}
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-900/50 border border-slate-700"
            required
          />

          <input
            type="email"
            name="email"
            placeholder={t("contact.fields.email")}
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-900/50 border border-slate-700"
            required
          />

          <textarea
            name="message"
            placeholder={t("contact.fields.message")}
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 rounded-lg bg-slate-900/50 border border-slate-700"
            required
          />

          <button className="w-full py-3 bg-accent text-slate-900 font-semibold rounded-md hover:scale-[1.02] transition">
            {t("contact.cta")}
          </button>
        </form>
      </motion.div>
    </section>
  );
}


