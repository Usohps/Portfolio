import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
function SideMenu({ handleShowMenu, showMenu }) {
  return (
    <div>
      <div
        className={`w-full h-full fixed top-[0] backdrop-blur-2xl animation z-50 left-0 from-transparent to-[#253D62]  ${
          showMenu ? "" : "hidden"
        } `}
      >
        <div className="flex flex-col items-end p-5">
          <button onClick={() => handleShowMenu()}>
            <AiOutlineClose size={32} />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center m-auto w-[80%] shadow-lg h-[400px] font-bold">
          <form className="w-full h-full flex justify-center items-center flex-col text-2xl space-y-4 rounded-lg">
            <div className="font-extrabold">
              <h1>Let's Get Started</h1>
            </div>
            <button onClick={handleShowMenu}><Link to={"/"}>Home</Link></button>
            <button onClick={handleShowMenu}><Link to={"/projects"}>Projects</Link></button>
            <button onClick={handleShowMenu}><Link to={"/about"}>About</Link></button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
