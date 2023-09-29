import { Link } from "react-router-dom";
import {RxHamburgerMenu} from "react-icons/rx"
import { useState } from "react";
import {AiOutlineClose} from "react-icons/ai"
function PageHeader() {
  const [navbar,setNavbar] = useState(false)
  return (
    <nav className=" w-full shadow-2xl m-auto flex items-center justify-between p-8 fixed top-0 bg-[#111827] z-10 ">
      <div className="pl-6">
        <h1 className="text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-extrabold">COZYDEV~</h1>
      </div>
      <div className="md:flex gap-3 items-center px-8 text-white font-bold justify-center hidden">
      <Link to={"/"}>Home</Link>
      <Link to={"/projects"}>Projects</Link>
      <Link to={"/about"}>About</Link>
      </div>
      <div className="md:hidden z-40">
          <button onClick={() => setNavbar(!navbar)}>
            {navbar ? (
              <AiOutlineClose size={24} className="text-white" />
            ) : (
              <RxHamburgerMenu size={24} className="text-white" />
            )}
          </button>
        </div>
        {navbar && (
          <div
            className={
              navbar
                ? " w-full h-full md:hidden flex justify-center text-sm items-center fixed top-[0] backdrop-blur-sm animation right-0 "
                : "md:hidden w-full h-full flex justify-center text-sm items-center fixed top-[0] backdrop-blur-sm  animation right-[100%] "
            }
          >
            <div className=" flex w-[300px] flex-col ease-in-out  justify-center items-center rounded-xl m-auto  shadow-2xl shadow-slate-900 bg-gradient-to-r from-blue-950 to-purple-900  font-bold">
              <ul className=" w-full  md:max-w-[300px] text-white h-[150px] flex flex-col justify-center items-center text-sm space-y-4">
                <li>
                  <a href={"/"} onClick={() => setNavbar(!navbar)}>
                    Home
                  </a>
                </li>
                <li>
                  <a href={"/projects"} onClick={() => setNavbar(!navbar)}>
                    Project
                  </a>
                </li>
                <li>
                  <a href={"/about"} onClick={() => setNavbar(!navbar)}>
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
    </nav>
  );
}

export default PageHeader;
