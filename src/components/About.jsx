import React from "react";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen text-center md:text-left mx-auto pt-9 md:pt-0 px-0 md:px-10 justify-evenly items-center">
      <div className="w-5/5 lg:w-[65%] mt-10 flex flex-col md:flex-row items-center md:flex-sm px-0 md:px-2 border-2px">
        <img
          src="/dev.jpg"
          alt="profile_image"
          width="500"
          height="600"
          className="p-5 h-[200px] w-[200px] md:w-auto md:h-[300px] lg:h-[350px] md:p-5 drop-shadow-2xl rounded-tl-[50px] rounded-br-[50px] mx-auto object-top object-cover"
        />

        <div className="w-full h-[65%] px-3 md:px-10">
          <h1 className="mb-3 md:mb-10 text-3xl md:text-4xl font-semibold text-[#358BFC]">
            About
          </h1>
          <p className="md:text-left text-gray-500 text-xs md:text-sm mb-1 text-wrap">
            Hey, my name is Dinesh, and I'm a Frontend Developer. My passion is
            to create and develop a clean UI/UX for my users. My main stack
            currently is React/Next.js in combination with Tailwind CSS and
            TypeScript. Hey, my name is Dinesh, and I'm a Frontend Developer. My
            passion is to create and develop a clean UI/UX for my users. My main
            stack currently is React/Next.js in combination with Tailwind CSS
            and TypeScript.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
