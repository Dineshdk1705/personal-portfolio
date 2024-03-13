import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const redirectToLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/dinesh-kumar-ab7297185/",
      "_blank",
      "noopener noreferrer"
    );
  };
  const redirectToGithub = () => {
    window.open(
      "https://github.com/Dineshdk1705",
      "_blank",
      "noopener noreferrer"
    );
  };
  return (
    <div className="bg-[#2D2E32] h-1/5 flex justify-center items-center">
      <div className="flex  w-full px-10 justify-around">
        <h1 className="font-semibold text-white flex justify-center items-center">
          Copyright © 2024. All rights are reserved
        </h1>
        <div className="flex gap-4 justify-center items-center">
          <button onClick={redirectToLinkedIn}>
            <FaLinkedin size={25} color="white" />
          </button>
          <button onClick={redirectToGithub}>
            <FiGithub size={25} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
