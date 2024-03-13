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
    <div className="h-screen w-screen font-[poppins] flex flex-col justify-center items-center bg-[#FCFCFC]">
      <div className="md:w-[60%] h-[50%] flex items-center justify-between px-2">
        <div className="px-2 w-[50%]">
          <h1 className="font-bold sm:text-lg md:text-5xl text-left mb-4 leading-none">
            Front-End React Developer{" "}
            <span className="inline-block animate-waving-hand">👋🏼</span>
          </h1>
          <p className="text-left text-gray-500 text-md mb-1">
            Hi, I'm Dinesh. A passionate front-end developer specialized in
            building exceptional web apps from Chhattisgarh, India.📍
          </p>
          <div className="text-left">
            <IconButton onClick={redirectToLinkedIn}>
              <LinkedInIcon />
            </IconButton>
            <IconButton onClick={redirectToGithub}>
              <GitHubIcon />
            </IconButton>
          </div>
        </div>
        <div className="p-5">
          <img
            src="/profile-pic.jpeg"
            alt="profile_image"
            width="1000"
            height="1000"
            className="w-72 h-72 rounded-full mx-auto object-top object-cover"
          />
        </div>
      </div>
      <div className="md:w-[60%]">
        <Skills />
      </div>
    </div>
  );
};

export default Home;
