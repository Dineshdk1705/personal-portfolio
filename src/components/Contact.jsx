import React from "react";
import { GrMapLocation } from "react-icons/gr";
import { TbMail } from "react-icons/tb";

const Contact = () => {
  const redirectToGoogleMaps = () => {
    // Bilaspur, India
    const latitude = "22.078642";
    const longitude = "82.152328.";
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(url, "_blank");
  };
  const redirectToMail = () => {
    window.location.href = "mailto:dineshdk555g@gmail.com";
  };
  return (
    <div className="w-screen flex flex-col md:flex-row h-screen md:h-[600px] text-center md:text-left mx-auto px-0 md:px-10 justify-evenly items-center">
      <div className="w-full flex items-center md:flex-sm px-10 md:px-2 border-2px">
        <div className="w-full md:w-full h-auto mx-auto px-0 md:px-20">
          <h1 className="mb-10 text-center text-3xl md:text-4xl font-semibold text-[#358BFC] md:mb-0">
            Contact Me
          </h1>
          <div className="text-left flex flex-col md:flex-row items-center justify-start md:justify-around">
            <div className=" w-4/5 h-auto md:w-1/2 flex justify-center items-center px-0 md:px-3 gap-0 md:gap-5  mb-10 md:mb-0">
              <span className="mr-3 p-3 rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
                <GrMapLocation
                  className="text-[20px] md:text-[30px]"
                  color="#358BFC"
                />
              </span>
              <div className="w-70">
                <h1 className="text-md md:text-lg font-semibold">Location</h1>
                <button
                  onClick={redirectToGoogleMaps}
                  className="text-gray-400 text-left text-xs md:text-base"
                >
                  Bilaspur,Chhattisgarh,India
                </button>
              </div>
            </div>

            <div className="flex justify-center items-center w-4/5 h-auto md:w-1/2 px-0 md:px-3 gap-0 md:gap-5">
              <span className="mr-3 p-3 rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
                <TbMail
                  className="text-[20px] md:text-[30px]"
                  color="#358BFC"
                />
              </span>
              <div className="w-60">
                <h1 className="text-md md:text-lg font-semibold">Mail</h1>
                <button
                  onClick={redirectToMail}
                  className="text-gray-400 text-xs md:text-base"
                >
                  dineshdk555g@gmail.com
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
