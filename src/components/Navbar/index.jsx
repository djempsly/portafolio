import { Link } from "react-router-dom";

import i18n from "../../../i18n";

export default function Navbar() {
  return (
    <nav className="bg-blue-950 flex justify-between  s ">
      <div className=" text-white p-4 flex gap-6 ">
         <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/about">About me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skill">Skill</Link>
        <Link to="/contact">Contact</Link>


      </div>
     

      <div className=" w-80 flex  justify-between items-center mr-8">
        <button onClick={() => i18n.changeLanguage("es")} className="bg-white text-black w-30 h-10 rounded-sm">ESPAÑOL</button>
        <button onClick={() => i18n.changeLanguage("en")} className="bg-white text-black w-30 h-10 rounded-sm">ENGLISH</button>
      </div>
    </nav>
  );
}





