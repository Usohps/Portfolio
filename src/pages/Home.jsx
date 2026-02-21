import Screenshot from "../assets/Ai.jpg";
// import Photo from "../assets/photo.jpeg";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import myResume from "../assets/my Resume.pdf";
import { useState, useEffect, Suspense } from "react";
import Loader from "../components/utils/loader";
import { Link } from "react-router-dom";
function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 200);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="min-w-full p-4 ">
          <div className="w-full flex flex-col items-cente justify-center h-full ">
            <div className="md:container md:m-auto min-w-full items-center justify-center flex flex-col ">
              <div
                data-aos="fade-in"
                className=" w-full mt-8 lg:max-w-[900px] flex flex-col items-center justify-center text-center"
              >
                <div className=" mt-32">
                  <div
                    data-aos="zoom-in"
                    className="w-full rounded-sm lg:rounded-full object-cover object-top lg:w-[400px] md:h-[400px] mb-4 md:mb-0"
                  >
                    <img
                      src={Screenshot}
                      alt=""
                      className=" w-[400px] h-[400px] rounded-sm lg:rounded-full object-cover object-top"
                    />
                  </div>
                </div>
                <div data-aos="zoom-in" className="pb-4">
                  <h1 className="text-3xl font-extrabold">
                    {" "}
                    Princewill Samuel
                  </h1>
                  <span className="italic font-bold text-blue-500">
                    (Software Developer)
                  </span>
                </div>

                <div className=" w-full  p-2 pt-4  ">
                  <div>
                    <p className=" text-sm md:text-2xl font-medium">
                      A Successful Software engineer offering over 5(five) years
                      of experience in demanding environments focused on
                      producing cutting-edge systems for the software
                      industry,passionate about building responsive client
                      interface,and improving client interaction on web and
                      mobile applications.
                    </p>
                  </div>
                  <div>
                    <Link to={"/pages/projects"}>
                      <div className="bg-gradient-to-r from-sky-500 to-indigo-500 ease-in-out duration-700  w-[250px] rounded-lg m-auto p-1.5 md:p-2 my-6">
                        <h1 className="text-white text-center">
                          Click Here To View Projects
                        </h1>
                      </div>
                    </Link>
                  </div>
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
