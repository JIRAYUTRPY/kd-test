import React from "react";
import isoLogo from "./iso.png";
function Port() {
  return (
    <div className="px-[8%] md:grid flex flex-col justify-center items-center grid-cols-10 text-xl mt-14">
      <div className="col-span-1 ">Our case</div>
      <div className="col-span-9 md:mt-0 mt-5">
        <div className="md:grid grid-cols-2 gap-6 md:border-l-[10px] md:border-t-0 border-t-[10px] border-black">
          <div className="col-span-1 h-[320px] flex md:flex-col md:justify-center justify-between items-center">
            <img src={isoLogo} className="h-[300px] md:w-[320px]" />
            <div className="md:text-xl text-lg">
              ISO 9001:2015 <span className="">- Implementation</span>
            </div>
          </div>
          <div className="col-span-1 h-[320px] flex md:flex-col md:justify-center justify-between items-center">
            <img src={isoLogo} className="h-[300px] md:w-[320px]" />
            <div className="md:text-xl text-lg">
              ISO 45001:2018 <span>- Implementation</span>
            </div>
          </div>
          <div className="col-span-1 h-[320px] flex md:flex-col md:justify-center justify-between items-center">
            <img src={isoLogo} className="h-[300px] md:w-[320px]" />
            <div className="md:text-xl text-lg">
              ISO 14001:2018 <span>- Implementation</span>
            </div>
          </div>
          <div className="col-span-1 h-[320px] flex md:flex-col md:justify-center justify-between items-center">
            <img src={isoLogo} className="h-[300px] md:w-[320px]" />
            <div className="md:text-xl text-lg">
              ISO 27001 <span>- Implementation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Port;
