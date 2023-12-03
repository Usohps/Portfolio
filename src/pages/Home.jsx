import { BsArrowRight } from "react-icons/bs";
import Screenshot from "../assets/cozy.JPG";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Loader from "../components/utils/loader"
function Home() {
  const [isLoading, setIsLoading]=useState(true)
    useEffect(()=>{
      setTimeout(()=>{
        setIsLoading(!isLoading)
      },3000)
    },[])
  return (

    <>
    {isLoading?(<Loader/>):(
      <div className="py-20">
      <h1 className="hidden md:block p-20 container m-auto text-center text-6xl">
        Thanks For Your Time{" "}
      </h1>
      <div className="container m-auto p-6 mt-12 flex flex-col md:flex-row justify-between items-center">
        <div className="hover:blur-sm">
          <div className="w-[200px] rounded-full md:w-[300px] border-4 md:rounded mb-4 md:mb-0">
            <img
              src={Screenshot}
              alt=""
              className="w-full rounded-full md:rounded"
            />
          </div>
        </div>
        <div className="space-y-4 w-[350px]">
          <div className="container m-auto text-center bg-gradient-to-r from-purple-400 to-pink-600 p-2 rounded shadow-2xl">
            <Link
              href="https://medium.com/@usohps/the-importance-of-proper-file-structure-in-programming-421de3af2794"
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
              href="https://medium.com/@usohps/developing-a-programmers-mindset-how-to-think-like-a-programmer-d8a3befc56ef"
              target="_blank"
            >
              <h1 className="font-bold ">
                Article On Developing A Programmer's Mindset
              </h1>
            </Link>
          </div>
          <div className="container m-auto text-center bg-gradient-to-r from-purple-400 to-pink-600 p-2 rounded shadow-2xl">
            <Link
              href="https://medium.com/@usohps/the-importance-of-proper-file-structure-in-programming-421de3af2794"
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
              href="https://medium.com/@usohps/how-to-achieve-a-scalable-and-efficient-website-fb7933508a30"
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
              href="https://medium.com/@usohps/responsive-design-its-importance-and-contribution-to-company-s-growth-9a9fae992c28"
              target="_blank"
            >
              <h1 className="font-bold ">
                Article On The Benefits of Responsive Design to Companies Growth
              </h1>
            </Link>
          </div>
          <a href="https://medium.com/@usohps">
            <button className="rounded p-2 flex items-center justify-center bg-blue-600 my-5">
              Read More
              <BsArrowRight className="mx-2" />
            </button>
          </a>
        </div>
      </div>
    </div>
    )}
    </>
  );
}

export default Home;
