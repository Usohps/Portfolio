import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Loader from "../components/utils/loader";
import { useState, useEffect } from "react";
function About() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 500);
  }, []);
  return (

    <>
    {isLoading?(<Loader/>):(
      <div className="py-4 border">
        <div className="container m-auto py-8 px-5 border-b-2 border-gray-50 my-16">
            <h1 className="md:text-6xl text-5xl text-blue-500">Blogs</h1>
          </div>
      {/* <h1 className="hidden md:block p-20 container m-auto text-center text-6xl">
        Thanks For Your Time{" "}
      </h1> */}
      <div className="md:w-1/2 border m-auto p-6 mt-0 flex flex-col md:flex-row justify-between items-center">
        <div className="space-y-4 w-[350px] m-auto">
          <div className="container m-auto text-center bg-gradient-to-r from-purple-400 to-pink-600 p-2 rounded shadow-2xl">
            <Link
              to="https://medium.com/@usohps/the-importance-of-proper-file-structure-in-programming-421de3af2794"
              target="_blank"
            >
              <h1 className="font-bold ">
                Article On The Importance of Proper file Structure in
                Development
              </h1>
            </Link>
          </div>
          <div className="container m-auto text-center bg-gradient-to-r from-purple-400 to-pink-600 p-2 rounded shadow-2xl">
            <Link
              to="https://medium.com/@usohps/developing-a-programmers-mindset-how-to-think-like-a-programmer-d8a3befc56ef"
              target="_blank"
            >
              <h1 className="font-bold ">
                Article On Developing A Programmer's Mindset
              </h1>
            </Link>
          </div>
          <div className="container m-auto text-center bg-gradient-to-r from-purple-400 to-pink-600 p-2 rounded shadow-2xl">
            <Link
              to="https://medium.com/@usohps/the-importance-of-proper-file-structure-in-programming-421de3af2794"
              target="_blank"
            >
              <h1 className="font-bold ">
                Article On The Importance of Proper file Structure in
                Development
              </h1>
            </Link>
          </div>
          <div className="container m-auto text-center bg-gradient-to-r from-purple-400 to-pink-600 p-2 rounded shadow-2xl">
            <Link
              to="https://medium.com/@usohps/how-to-achieve-a-scalable-and-efficient-website-fb7933508a30"
              target="_blank"
            >
              <h1 className="font-bold ">
                Article On How to Achieve The Scalability and Efficiency of
                Websites
              </h1>
            </Link>
          </div>
          <div className="container m-auto text-center  bg-gradient-to-r from-purple-400 to-pink-600 p-2 rounded shadow-2xl">
            <Link
              to="https://medium.com/@usohps/responsive-design-its-importance-and-contribution-to-company-s-growth-9a9fae992c28"
              target="_blank"
            >
              <h1 className="font-bold ">
                Article On The Benefits of Responsive Design to Companies Growth
              </h1>
            </Link>
          </div>
          <Link to="https://medium.com/@usohps">
            <button className="rounded p-2 flex items-center justify-center bg-blue-600 my-5">
              Read More
              <BsArrowRight className="mx-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
    )}
    </>
  );
}

export default About;
