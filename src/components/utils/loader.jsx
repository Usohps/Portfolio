import React from "react";

function Loader() {
  return (
      <div className="w-full min-h-screen m-auto  space-y-20 pt-40 flex-col flex justify-center items-center">
      <div className="loader"></div>
     <p className="animate-bounce capitalize text-center  font-bold text-2xl"> Compiling.....</p>
    </div>
  );
}

export default Loader;
