import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import Skills from "./Skills";

const Home = () => {
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
    <div className="h-auto md:h-screen w-screen font-[poppins] flex flex-col justify-center items-center bg-[#FAFAFA] pt-20">
      <div className="h-full md:w-[60%] flex flex-col md:flex-row items-center justify-around px-2">
        <div className="px-2 w-full md:w-[50%]">
          <h1 className="font-bold text-center text-3xl md:text-5xl md:text-left mb-4 leading-none">
            Front-End React Developer{" "}
            <span className="inline-block animate-waving-hand">👋🏼</span>
          </h1>
          <p className="text-left text-gray-500 text-md mb-2 text-sm">
            Hi, I'm Dinesh. A passionate front-end developer specialized in
            building exceptional web apps from Chhattisgarh, India.📍
          </p>
          <div className="text-center md:text-left">
            <IconButton onClick={redirectToLinkedIn}>
              <LinkedInIcon />
            </IconButton>
            <IconButton onClick={redirectToGithub}>
              <GitHubIcon />
            </IconButton>
          </div>
        </div>
        <img
          src="/profile-pic.jpeg"
          alt="profile_image"
          width="1000"
          height="1000"
          className="order-first md:-order-none w-72 h-72 rounded-full mx-auto object-top object-cover px-5 md:p-5"
        />
      </div>
      <div className="md:w-[60%]">
        <Skills />
      </div>
    </div>
  );
};

export default Home;
