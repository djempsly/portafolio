import React from "react";
 import { motion } from "framer-motion";

const Skill = ()=>{
    return(
        <>
        <motion.div className="m-4">
           <h2> Skill </h2>
           <h3> Frontend</h3>

           <ul className="ml-8">
            <li>HTML, CSS, JavaScript</li>
            <li> React, React Native, Vite </li>
            <li> Tailwind CSS </li>
           </ul>
        </motion.div>
        </>
    )
}

export default Skill


