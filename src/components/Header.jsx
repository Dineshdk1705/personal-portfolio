import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
  const [toggleMenu, seToggleMenu] = useState(false);

  const handleMenuClick = () => {
    const list = document.querySelector("ul");
    if (toggleMenu === false) {
      seToggleMenu(true);
      list.classList.add("top-[50px]");
      list.classList.add("opacity-100");
    } else {
      seToggleMenu(false);
      list.classList.remove("top-[80px]");
      list.classList.remove("opacity-100");
    }
  };

  return (
    <div className="sticky top-0 font-[poppins] flex justify-between items-center p-3 md:py-5 md:px-10 px-10 bg-white z-10 drop-shadow">
      <span className="flex justify-between items-center w-full md:w-auto">
        <a href="#home" className="font-bold text-2xl cursor-pointer">
          dinesh.dev
        </a>
        <span className="md:hidden block">
          <button name="menu" onClick={handleMenuClick}>
            {toggleMenu ? <IoClose size={25} /> : <IoMenu size={25} />}
          </button>
        </span>
      </span>

      <ul className="md:flex md:items-center gap-4 text-md font-semibold z-[-1] md:z-auto md:static fixed bg-white w-full left-0 md:w-auto py-4 md:py-0 pl-8 md:pl-0 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in-out duration-300">
        <li className="mx-4 my-6 md:my-0">
          <a href="#home" className="snap-end" onClick={handleMenuClick}>
            Home
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#about" className="snap-center" onClick={handleMenuClick}>
            About
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#projects" className="snap-center" onClick={handleMenuClick}>
            Projects
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#contact" className="snap-start" onClick={handleMenuClick}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
