import React from "react";
import { GrMapLocation } from "react-icons/gr";
import { TbMail } from "react-icons/tb";

const Contact = () => {
  const redirectToGoogleMaps = () => {
    const latitude = "22.078642";
    const longitude = "82.152328.";
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(url, "_blank");
  };
  const redirectToMail = () => {
    window.location.href = "mailto:dineshdk555g@gmail.com";
  };
  return (
    <div className="flex flex-col md:flex-row h-screen text-center md:text-left mx-auto px-10 justify-evenly items-center">
      <div className="w-full flex items-center md:flex-sm px-10 md:px-2 border-2px">
        <div className="w-full h-auto px-20">
          <h1 className="mb-10 text-center text-4xl font-semibold text-[#358BFC]">
            Contact Me
          </h1>
          <div className="flex items-center justify-around">
            <div className="flex justify-center items-center p-3 gap-5">
              <span className="mr-3 p-3 rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
                <GrMapLocation size={30} color="#358BFC" />
              </span>
              <div>
                <h1 className="text-lg font-semibold">Location</h1>
                <button
                  onClick={redirectToGoogleMaps}
                  className="text-gray-400 text-md text-base"
                >
                  Bilaspur, Chhattisgarh, India
                </button>
              </div>
            </div>

            <div className="flex justify-center items-center p-3 gap-5">
              <span className="mr-3 p-3 rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
                <TbMail size={30} color="#358BFC" />
              </span>
              <div>
                <h1 className="text-lg font-semibold">Mail</h1>
                <button
                  onClick={redirectToMail}
                  className="text-gray-400 text-md text-base"
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
