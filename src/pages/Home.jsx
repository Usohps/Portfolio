import React from "react";
import axios from "axios";
import { useState } from "react";
import{BsArrowRight} from "react-icons/bs"
function Home() {
  const [quotes, setQuotes] = useState([]);
  const rollout_txt = async () => {
    await axios
      .get("https://backend-omega-seven.vercel.app/api/getjoke")
      .then((res) => setQuotes(res.data));
  };
  console.log(quotes)
  // setInterval(quotes + 1,[5000])
  return (
    <div className="container m-auto p-6 mt-12 flex flex-col md:flex-row justify-between items-center">
      <h1></h1>
      <div>
        {quotes &&
          quotes.map((quote) => (
            <div className="w-full container ">
              <h1>{quote.question[0]}</h1>
              <p>{quote.punchline[0]}</p>
            </div>
          ))}
        <button onClick={rollout_txt}>clicl me</button>
      </div>
     <div className="space-y-4 w-[350px]">
     <div className="container m-auto text-center bg-gradient-to-r from-purple-400 to-pink-600 p-2 rounded shadow-2xl">
        <a href="https://medium.com/@usohps/the-importance-of-proper-file-structure-in-programming-421de3af2794" target="_blank">
        <h1 className="font-bold ">Article On The Importance of Proper file Structure in Development</h1>  
        </a>
      </div>
      <div className="container m-auto text-center bg-gradient-to-r from-purple-400 to-pink-600 p-2 rounded shadow-2xl">
        <a href="https://medium.com/@usohps/the-importance-of-proper-file-structure-in-programming-421de3af2794" target="_blank">
        <h1 className="font-bold ">Article On The Importance of Proper file Structure in Development</h1>  
        </a>
      </div>
      <div className="container m-auto text-center bg-gradient-to-r from-purple-400 to-pink-600 p-2 rounded shadow-2xl">
        <a href="https://medium.com/@usohps/the-importance-of-proper-file-structure-in-programming-421de3af2794" target="_blank">
        <h1 className="font-bold ">Article On The Importance of Proper file Structure in Development</h1>  
        </a>
      </div>
      <div className="container m-auto text-center bg-gradient-to-r from-purple-400 to-pink-600 p-2 rounded shadow-2xl">
        <a href="https://medium.com/@usohps/how-to-achieve-a-scalable-and-efficient-website-fb7933508a30" target="_blank">
        <h1 className="font-bold ">Article On How to Achieve The Scalability and Efficiency of Websites</h1>  
        </a>
      </div>
      <div className="container m-auto text-center  bg-gradient-to-r from-purple-400 to-pink-600 p-2 rounded shadow-2xl">
        <a href="https://medium.com/@usohps/responsive-design-its-importance-and-contribution-to-company-s-growth-9a9fae992c28" target="_blank">
        <h1 className="font-bold "> Article On The Benefits of Responsive Design to Companies Growth</h1>  
        </a>
      </div>
      <a href="https://medium.com/@usohps"><button className="rounded p-2 flex items-center justify-center bg-blue-600 my-5">Read More<BsArrowRight className="mx-2"/></button></a>
     </div>
    </div>
  );
}

export default Home;
