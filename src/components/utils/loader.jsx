import React from "react";

function Loader() {
  return (
      <div className="w-full min-h-screen m-auto  space-y-20 pt-64 flex-col flex justify-center items-center">
      <div className="loader"></div>
     <p className="animate-bounce capitalize  font-bold text-2xl"> Compiling please hold.....</p>
    </div>
  );
}

export default Loader;
