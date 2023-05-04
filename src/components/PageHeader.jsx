import React from "react";
import { Link } from "react-router-dom";
import {RxHamburgerMenu} from "react-icons/rx"
function PageHeader({handleShowMenu}) {
  return (
    <nav className=" w-full shadow-2xl m-auto flex items-center justify-between p-2 fixed top-0 bg-[#111827] z-10 ">
      <div className="pl-6">
        <h1 className="text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-extrabold">COZYDEV~</h1>
      </div>
      <div className="md:flex gap-3 items-center px-8 text-white font-bold justify-center hidden">
      <Link to={"/"}>Home</Link>
      <Link to={"/projects"}>Projects</Link>
      <Link to={"/about"}>About</Link>
      </div>
      <button onClick={() => handleShowMenu()} className="p-2  text-black rounded font-bold md:hidden ">
            <RxHamburgerMenu size={24} className="text-white"/>
          </button>
    </nav>
  );
}

export default PageHeader;
