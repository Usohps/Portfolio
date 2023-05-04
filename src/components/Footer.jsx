import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import {SiGmail} from "react-icons/si"
function Footer() {
  return (
    <div>
      <div className="flex items-center justify-center gap-6 p-6">
        <a href="https://web.facebook.com/princewill.usoh.1/" className="bg-white hover:bg-gradient-to-r from-sky-500 to-indigo-500 ease-in-out duration-700 rounded">
          <BsFacebook size={24} />
        </a>
        <a href="https://www.linkedin.com/in/princewill-usoh-526912211/" className="bg-white hover:bg-gradient-to-r from-sky-500 to-indigo-500 ease-in-out duration-700 rounded">
          <BsLinkedin size={24} />
        </a>
        <a href="https://twitter.com/PrincewillUsoh" className="bg-white hover:bg-gradient-to-r from-sky-500 to-indigo-500 ease-in-out duration-700 rounded">
          <BsTwitter size={24} />
        </a>
        <a
          href="https://github.com/Usohps"
          className="bg-white hover:bg-gradient-to-r from-sky-500 to-indigo-500 ease-in-out duration-700 rounded"
        >
          <BsGithub size={24} />
        </a>
        <a href="mailto:usohps@gmail.com" className="bg-white hover:bg-gradient-to-r from-sky-500 to-indigo-500 ease-in-out duration-700 rounded">
                  <SiGmail size={24} />
                </a>
      </div>
      <div className="text-white  shadow-md shadow-teal-500 font-bold container m-auto flex md:flex-row flex-col items-center justify-between p-4 px-12">
        <div>
          <span>Princewill Samuel. 2023 </span>
        </div>
        <div>
          <p>Tailwind Reactjs Theme</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
