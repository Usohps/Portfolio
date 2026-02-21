import { useState, useEffect } from "react";
import { projects } from "../mockdata/projectData.js";
import Loader from "../components/utils/loader";

function Projects() {
  const [isLoading, setIsLoading] = useState(true);
  // const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const [activeType, setActiveType] = useState("web");

  const webCount = projects.filter((p) => p.type === "web").length;
  const mobileCount = projects.filter((p) => p.type === "mobile").length;

  const filteredProjects = projects.filter(
    (project) => project.type === activeType,
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container m-auto">
          {/* Header */}
          <div className="py-12 pt-20 px-5 border-b-2 border-gray-50 my-12">
            <h1 className="md:text-6xl text-5xl text-blue-500">Projects</h1>

            {/* Standard Toggle */}
            {/* <div className="mt-6 flex items-center gap-4">
              <span
                className={`font-semibold transition ${
                  !isMobile ? "text-blue-500" : "text-gray-400"
                }`}
              >
                Web
              </span>

              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isMobile}
                  onChange={() => setIsMobile(!isMobile)}
                />
                <div className="w-14 h-7 bg-gray-300 rounded-full peer peer-checked:bg-blue-500 transition"></div>
                <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition peer-checked:translate-x-7"></div>
              </label>

              <span
                className={`font-semibold transition ${
                  isMobile ? "text-blue-500" : "text-gray-400"
                }`}
              >
                Mobile
              </span>
            </div> */}

            <div className="mt-8 flex flex-col items-center">
              {/* Toggle Labels */}
              <div className="relative flex bg-gray-100 rounded-full p-1">
                {/* Sliding Background Indicator */}
                <div
                  className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-blue-500 transition-all duration-300 ease-in-out ${
                    activeType === "mobile"
                      ? "translate-x-full"
                      : "translate-x-0"
                  }`}
                />

                {/* WEB */}
                <button
                  onClick={() => setActiveType("web")}
                  className={`relative z-10 px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeType === "web"
                      ? "text-white scale-105"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Web
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      activeType === "web"
                        ? "bg-white text-blue-500"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {webCount}
                  </span>
                </button>

                {/* MOBILE */}
                <button
                  onClick={() => setActiveType("mobile")}
                  className={`relative z-10 px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeType === "mobile"
                      ? "text-white scale-105"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Mobile
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      activeType === "mobile"
                        ? "bg-white text-blue-500"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {mobileCount}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div
            key={activeType}
            className="flex md:flex-row items-center justify-center flex-col md:flex-wrap gap-6 mt-10 transition-all duration-500 animate-fadeIn"
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="border-y-2 md:border-2 md:w-[350px] min-h-[550px] border-gray-500 shadow-2xl md:rounded p-4"
              >
                <div className="w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover"
                  />
                </div>

                <div className="mt-4">
                  <h2 className="font-bold text-xl py-2">{project.title}</h2>

                  <p className="text-gray-400 font-medium">
                    {project.description}
                  </p>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-clip-text font-semibold text-transparent bg-gradient-to-r from-purple-400 to-pink-600 my-4 p-2 shadow-lg outline-none rounded">
                      View Project
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
