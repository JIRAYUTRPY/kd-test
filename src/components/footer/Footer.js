import React from "react";

function Footer() {
  return (
    <div className="px-[8%] md:grid flex flex-col items-center grid-cols-10 text-xl mt-14 pt-20 text-white bg-black">
      <div className="col-span-1">Let's Collaborate</div>
      <div className="col-span-9 md:mt-0 mt-5 ml-20 mb-20">
        <span className="md:text-2xl text-sm">
          Providing advice on preparing ISO 9001, 14001, 45001, 50001, 27001
          systems, accepting system creation and system installation from the
          beginning, preparing internal audit documents, Managememt Review,
          participating in receiving assessments from agencies. External
          certifier Check Stage 1 and Stage 2 until certified.
        </span>
        <br />
        <div className="text-black bg-white w-[200px] h-[50px] text-center mt-10 flex justify-center items-center rounded-xl cursor-pointer">
          <span>Let's Talk</span>
        </div>
      </div>
      <div className="col-span-10 px-16 mb-32 md:grid grid-cols-6 flex flex-wrap">
        <div className="col-span-3 md:w-auto w-full">
          <div className="text-4xl my-5">VC ISO CONSULT</div>
          <div className="text-gray-500 mb-5">Chon Buri, Thailand</div>
          <div className="mb-2">nareeva.c@gmail.com</div>
          <div className="">+66-92-552-2256</div>
        </div>
        <div className="md:text-xl text-sm col-span-1 md:px-0 px-5">
          <div className="text-xl mt-5 mb-2">Company</div>
          <div className="text-gray-500 mb-2 cursor-pointer">About</div>
          <div className="text-gray-500 mb-2 cursor-pointer">Service</div>
          <div className="text-gray-500 mb-2 cursor-pointer">Careers</div>
          <div className="text-gray-500 mb-2 cursor-pointer">Blog</div>
        </div>
        <div className="md:text-xl text-sm col-span-1 md:px-0 px-5">
          <div className="text-xl mt-5 mb-2">Contact</div>
          <div className="text-gray-500 mb-2 cursor-pointer">Help</div>
          <div className="text-gray-500 mb-2 cursor-pointer">FAQs</div>
          <div className="text-gray-500 mb-2 cursor-pointer">
            Term & Condition
          </div>
        </div>
        <div className="md:text-xl text-sm col-span-1 md:px-0 px-5">
          <div className="text-xl mt-5 mb-2">Discover</div>
          <div className="text-gray-500 mb-2 cursor-pointer">Affiliate</div>
          <div className="text-gray-500 mb-2 cursor-pointer">
            Partner Program
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
