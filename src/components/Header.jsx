import React from "react";

const Header = () => {
  return (
    <div className="sticky top-0 font-[poppins] flex justify-between items-center py-5 px-10 bg-white z-10 drop-shadow ">
      <a href="#home" className="font-bold text-2xl cursor-pointer">
        dinesh.dev
      </a>
      <div className="">
        <ul className="flex gap-4 text-md font-semibold">
          <li>
            <a href="#home" className="snap-end">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="snap-center">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="snap-center">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="snap-start">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
