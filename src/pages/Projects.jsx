import Screenshot from "../assets/signupblogshot1.png";
import Screenshot2 from "../assets/workoushot@1.png";
import Screenshot3 from "../assets/provisdashboard.png";
import Screenshot5 from "../assets/flutterScreenshot.png";
import Screenshot4 from "../assets/getLinked.png";
import Screenshot6 from "../assets/cozybookShot.png";
import Screenshot7 from "../assets/e-commerceshot.png";
import { Link } from "react-router-dom";
import Loader from "../components/utils/loader"
import { useState,useEffect } from "react";
function Projects() {
  const [isLoading,setIsloading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setIsloading(!isLoading)
    },3000)
  },[])
  return (
    <>

    {isLoading?<Loader/>:(
      <div className="container m-auto ">
      <div className="container py-12 pt-20 px-5 border-b-2 border-gray-50 my-12">
        <h1 className="md:text-6xl text-5xl text-blue-500">Projects</h1>
      </div>
      <div className="flex md:flex-row items-center justify-center flex-col md:flex-wrap gap-2">
      <div className="py-3 md:py-0 md:pb-3 border-y-2 md:border-2 w-[350px] h-[550px] border-gray-500 shadow-2xl md:rounded">
          <div className="w-full ">
            <img src={Screenshot6} className="" alt="" />
          </div>
          <div className=" w-full p-4">
            <h1 className="font-bold text-xl py-2">COZY_BOOKSHOP</h1>
            <p className="text-gray-400 font-medium">
              I created a user-friendly bookshop app, seamlessly blending a vast
              book catalog with intuitive navigation and secure purchases. The
              app enhances the reading experience, offering book
              recommendations, personalized user profiles, and a smooth checkout
              process. It showcases my mobile app development skills and passion
              for literature.
            </p>
            <Link to="https://cozy-bookshop.vercel.app/">
              <button className="bg-clip-text font-semibold text-transparent bg-gradient-to-r from-purple-400 to-pink-600 my-4 p-2 shadow-lg outline-none rounded">
                View Project
              </button>
            </Link>
          </div>
        </div>
        <div className="py-3 md:py-0 md:pb-3 border-y-2 md:border-2 w-[350px] h-[550px] border-gray-500 shadow-2xl md:rounded">
          <div className="w-full ">
            <img src={Screenshot7} className="" alt="" />
          </div>
          <div className=" w-full p-4">
            <h1 className="font-bold text-xl py-2">COZY_COMMERCE SITE</h1>
            <p className="text-gray-400 font-medium">
              "I designed and developed a user-friendly e-commerce mobile app
              with a sleek, intuitive interface, seamless payment integration,
              and robust product catalog. The app showcases my skills in
              creating a convenient online shopping experience, promoting sales,
              and ensuring secure transactions, making it a valuable addition to
              my portfolio."
            </p>
            <Link to="https://e-commerce-site-usohps.vercel.app/">
              <button className="bg-clip-text font-semibold text-transparent bg-gradient-to-r from-purple-400 to-pink-600 my-4 p-2 shadow-lg outline-none rounded">
                View Project
              </button>
            </Link>
          </div>
        </div>
        <div className="py-3 md:py-0 md:pb-3 border-y-2 md:border-2 w-[350px] h-[550px] border-gray-500 shadow-2xl md:rounded">
          <div className=" w-full rounded">
            <img src={Screenshot3} className="" alt="" />
          </div>
          <div className=" w-full p-4">
            <h1 className="font-bold text-xl py-2">NEXTJS DASHBOARD </h1>
            <p className="text-gray-400 font-medium">
              In this Application, I showcased a meticulously designed dashboard
              app, It offers an intuitive user interface with insightful data
              visualization,supposed to provide real-time analytics and
              efficient data management. The app's sleek design, functionality,
              and user-friendliness demonstrate my expertise in web development
              and UI/UX design interpretation in code.
            </p>
            <Link to="https://nextjs-dashboard-orcin.vercel.app/">
              <button className="bg-clip-text font-semibold text-transparent bg-gradient-to-r from-purple-400 to-pink-600 my-4 p-2 shadow-lg outline-none rounded">
                View Project
              </button>
            </Link>
          </div>
        </div>
        <div className=" w-[350px] h-[550px] border-y-2  md:border-2 border-gray-500 shadow-2xl md:rounded py-3 md:py-0 md:pb-3">
          <div className="w-full  rounded">
            <img src={Screenshot} className="h-[150px] w-full" alt="" />
          </div>
          <div className=" w-full  p-4">
            <h1 className="font-bold text-xl py-2">COZY_BLOG</h1>
            <p className="text-gray-400 font-medium">
              A fictional online blog application, where you can create a post,
              delete a post and also upload image that gives more details about
              the post.This application promises to show proper use of
              CONTEXT_API as state manager, to track the change in state when a
              user sigup,login,and logout. A MERN application, designed with
              TailwindCSS, and cloudinary to enable users post image. Endpoints
              deployed on cyclic, frontend deployed on vercel.
            </p>
            <Link to="https://client-blog-theta.vercel.app/">
              <button className="bg-clip-text font-semibold text-transparent bg-gradient-to-r from-purple-400 to-pink-600 my-4 p-2 shadow-lg outline-none rounded">
                View Project
              </button>
            </Link>
          </div>
        </div>
        <div className=" py-3 md:py-0 md:pb-3 border-y-2 md:border-2 w-[350px] h-[550px] border-gray-500 shadow-2xl md:rounded">
          <div className="w-full">
            <img src={Screenshot2} className="" alt="" />
          </div>
          <div className="w-full px-2">
            <h1 className="font-bold text-xl py-2">COZY_WORKOUT</h1>
            <p className="text-gray-400 font-medium">
              COZY_Workout is a workout demo platform that helps fitness lovers
              and fitness coaches to keep records of weight,reps,and load and as
              well be able to track their fitness progress with ease. It gives
              the propective usser ability to search fro workouts and delete
              workout records if not intended to be recorded.A MERN application,
              designed with TailwindCSS. Endpoints deployed on cyclic, frontend
              deployed on vercel.
            </p>
            <Link to="https://client-workout.vercel.app/">
              <button className="bg-clip-text font-semibold text-transparent bg-gradient-to-r from-purple-400 to-pink-600 my-4 py-2 shadow-lg outline-none rounded">
                View Project
              </button>
            </Link>
          </div>
        </div>
        <div className="py-3 md:py-0 md:pb-3 border-y-2 md:border-2 w-[350px] h-[550px] border-gray-500 shadow-2xl md:rounded">
          <div className="w-full ">
            <img src={Screenshot4} className="" alt="" />
          </div>
          <div className=" w-full p-4">
            <h1 className="font-bold text-xl py-2">FLUTTERWAVE CLONE</h1>
            <p className="text-gray-400 font-medium">
              This is a clone Landingpage, I cloned this landing page to test my
              layouting skills and also replicating ability, I achieved the
              landing page with HTML CSS and JAVASCRIPT. The nav component on
              mobile was a bit tasking I enjoyed recreating this site.
            </p>
            <Link to="https://flutterwave-clone-olive.vercel.app/">
              <button className="bg-clip-text font-semibold text-transparent bg-gradient-to-r from-purple-400 to-pink-600 my-4 p-2 shadow-lg outline-none rounded">
                View Project
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    )}
    </>
    
  );
}

export default Projects;
