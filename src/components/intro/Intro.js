import React from "react";
import img from "./img.png";
function Intro() {
  return (
    <div className="px-[8%] md:grid grid-cols-5">
      <div className="col-span-2 grid grid-cols-4 mt-10 gap-x-5 w-full">
        <p className="col-span-1 border-black border-t-4 mt-[20%]"></p>
        <p className="col-span-3 md:text-5xl text-3xl w-full">
          VC<span className="ml-5">ISO</span>
          <br />
          CONSULTANT AND TRAINING
          <div className="w-full md:text-xl text-lg">
            We are experts with direct experience in industrial factory line
            Creating a standard system ISO9001, ISO14001, ISO45001 etc. Take
            care of document preparation and give advice System for requesting
            certification We focus on providing knowledge about ISO. in order to
            be able to put it into practice in improving and developing within
            the organization
          </div>
          <p className="text-white bg-black w-[150px] text-xl text-center p-3 mt-5 cursor-pointer">
            LET'S TALK
          </p>
        </p>
      </div>
      <div className="col-span-3">
        <img src={img} className="mt-5" />
      </div>
    </div>
  );
}

export default Intro;
