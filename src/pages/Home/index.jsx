import React from "react";
import jeffry1 from "../../assets/jeffry.webp"
import { useTranslation } from "react-i18next";

const Home = () =>{
    const { t } = useTranslation();
    return(
        <>
        <h1>{t("home.title")}</h1>
        <p>Hola, soy Jeffry Almonte
Full-Stack Developer | Cybersecurity Enthusiast | Educador | Contador | Diseñador Gráfico

Desarrollo aplicaciones web y móviles modernas, analizo datos, gestiono sistemas, diseño contenido profesional y ofrezco soluciones digitales completas para negocios y proyectos personales.

[Ver Portafolio]
[Contáctame]</p>

<div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-10">
  <div>
    <h1 className="text-4xl md:text-5xl font-bold w-200">Hola, soy Jeffry Almonte Dely</h1>
    <p className="text-slate-300 mt-4">Full-Stack Developer & Cybersecurity Enthusiast</p>
  </div>
  <img src={jeffry1} className="w-100 h-100 rounded-full shadow-xl" />
</div>
        </>
    )
}

export default Home


