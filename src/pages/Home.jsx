import Screenshot from "../assets/cozy.JPG";
// import Photo from "../assets/photo.jpeg";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import myResume from "../assets/my Resume.pdf";
import { useState, useEffect } from "react";
import Loader from "../components/utils/loader";
import { Link } from "react-router-dom";
function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 500);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full p-4 ">
          <div className="w-full flex flex-col items-center justify-center h-full ">
            <div className="container m-auto  flex flex-col items-center ">
              <div className=" w-full mt-8 border md:w-[500px] flex flex-col items-center justify-center text-center">
                {/* <div className="w-200px h-200px rounded-full pt-6">
                  <img
                    src={Photo}
                    className="w-[250px] h-[300px] rounded-full"
                    alt=""
                  />
                </div> */}
                <div className="hover:blur-sm mt-24">
                  <div className="w-[200px] md:w-[200px] md:h-[200px] mb-4 md:mb-0">
                    <img
                      src={Screenshot}
                      alt=""
                      className=" w-[200px] h-[200px] rounded-full "
                    />
                  </div>
                </div>
                <h1 className="text-3xl font-extrabold"> Princewill Samuel</h1>
                <span className="italic font-bold text-blue-500">
                  (Software Developer)
                </span>
                <div className=" flex items-center justify-center gap-6 p-6  border-red-700 ">
                  <a
                    href="https://www.linkedin.com/in/princewill-usoh-526912211/"
                    className="bg-white rounded hover:bg-gradient-to-r from-sky-500 to-indigo-500 ease-in-out duration-700"
                  >
                    <BsLinkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/Usohps"
                    className="bg-white hover:bg-gradient-to-r from-sky-500 to-indigo-500 ease-in-out duration-700 rounded"
                  >
                    <BsGithub size={24} />
                  </a>
                  <a
                    href="mailto:usohps@gmail.com"
                    className="bg-white hover:bg-gradient-to-r from-sky-500 to-indigo-500 ease-in-out duration-700 rounded"
                  >
                    <SiGmail size={24} />
                  </a>
                </div>
              <div className=" w-full md:w-[600px] text-center md:p-2 p-3">
                <p className=" font-medium">
                 A Successful Software engineer offering over years of
                  experience in demanding environments focused on producing
                  cutting-edge systems for the software industry,passionate
                  about building responsive client interface,and improving
                  client interaction on the web.
                </p>
                <Link to={"/pages/projects"}>
                  <div className="bg-black hover:bg-gradient-to-r from-sky-500 to-indigo-500 ease-in-out duration-700  w-[250px] rounded-lg m-auto p-1.5 mt-3">
                  <p >Click Here To View Projects</p>
                  </div>
                  </Link>
              </div>
                <div className="container my-4 flex justify-between p-4 shadow-2xl rounded  ">
                  <button className="shadow-2xl font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    <a href="mailto:usohps@gmail.com">HIRE ME</a>
                  </button>
                  <button className="shadow-2xl font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    {" "}
                    <a href={myResume} download={myResume}>
                      GET RESUME
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
