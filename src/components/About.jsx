import React from "react";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen text-center md:text-left mx-auto px-10 justify-evenly items-center">
      <div className="w-[60%] h-screen flex items-center md:flex-sm px-10 md:px-2 border-2px">
        <div className="p-5">
          <img
            src="/dev.jpg"
            alt="profile_image"
            width="1000"
            height="1000"
            className="w-500 h-500 drop-shadow-2xl rounded-tl-[50px] rounded-br-[50px] mx-auto object-top object-cover"
          />
        </div>
        <div className="w-full h-[65%] px-2">
          <h1 className="mb-10 text-4xl font-semibold text-[#358BFC]">About</h1>
          <p className="text-left text-gray-500 text-md mb-1 text-base">
            Hey, my name is Dinesh, and I'm a Frontend Developer. My passion is
            to create and develop a clean UI/UX for my users. My main stack
            currently is React/Next.js in combination with Tailwind CSS and
            TypeScript.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
