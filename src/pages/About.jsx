import {} from "react-icons/";
import Photo from "../assets/photo.jpeg";
import { BsFacebook, BsLinkedin,BsGithub } from "react-icons/bs";
import {SiGmail} from "react-icons/si"
import myResume from "../assets/my Resume.pdf"
function About() {
  return (
    <>
      <div className="w-full p-4 ">
      <div className="container m-auto py-12 px-5 border-b-2 border-gray-50 my-16">
            <h1 className="md:text-6xl text-5xl text-blue-500">About</h1>
        </div>
        <div className="w-full flex flex-col items-center justify-center h-full ">
        <div className="container m-auto  flex flex-col items-center">
          <div className=" w-full md:w-[500px] flex flex-col items-center justify-center text-center">
            <div className="w-200px h-200px rounded-full">
              <img src={Photo} className="w-[250px] h-[300px] rounded-full" alt="" />
            </div>
            <h1 className="text-3xl font-extrabold"> Princewill Samuel</h1>
            <span className="italic font-bold text-blue-500">(Software Developer)</span>
              <div className=" flex items-center justify-center gap-6 p-6  border-red-700 ">
                <a href="https://web.facebook.com/princewill.usoh.1/" className="bg-white rounded hover:bg-gradient-to-r from-sky-500 to-indigo-500 ease-in-out duration-700">
                  <BsFacebook size={24} />
                </a>
                <a href="https://www.linkedin.com/in/princewill-usoh-526912211/" className="bg-white rounded hover:bg-gradient-to-r from-sky-500 to-indigo-500 ease-in-out duration-700">
                  <BsLinkedin size={24} />
                </a>
                {/* <a href="https://twitter.com/PrincewillUsoh" className="bg-white hover:bg-gradient-to-r from-sky-500 to-indigo-500 ease-in-out duration-700 rounded">
                  <BsTwitter size={24} />
                </a> */}
                <a href="https://github.com/Usohps" className="bg-white hover:bg-gradient-to-r from-sky-500 to-indigo-500 ease-in-out duration-700 rounded">
                  <BsGithub size={24} />
                </a>
                <a href="mailto:usohps@gmail.com" className="bg-white hover:bg-gradient-to-r from-sky-500 to-indigo-500 ease-in-out duration-700 rounded">
                  <SiGmail size={24} />
                </a>
              </div>
            <div className="container my-4 flex justify-between p-4 shadow-2xl rounded  ">
              <button className="shadow-2xl font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"><a href="mailto:usohps@gmail.com">HIRE ME</a></button>
              <button className="shadow-2xl font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> <a href={myResume} download={myResume}>GET RESUME</a></button>
            </div>
          </div>
          <div className=" w-full md:w-[600px] text-center md:p-2 p-3">
                <p className=" font-medium">
                  Successful Software engineer offering 3 years of experience in
                  demanding environments focused on producing cutting - edge
                  systems for the software industry,passionate about building
                  responsive client interface,and improving client interaction
                  on the web.
                </p>
              </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default About;
