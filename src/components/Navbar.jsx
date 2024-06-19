import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative z-10 flex justify-between items-center p-1 pr-6 xl:p-6 md:p-6 xl:pr-12 bg-custom-green1">
      <div className="text-white xl:text-5xl text-l font-jost ml-3 md:text-2xl font-semibold xl:pl-20">
        Vriksh
      </div>

      <div className="flex items-center xl:hidden">
        <a
          href="#login"
          className="text-white font-jost text-sm md:text-xl md:mr-5 font-semibold no-underline mr-4"
        >
          Login
        </a>
        <button onClick={toggleMenu}>
          <FaBars className="text-white md:text-xl text-l" />
        </button>
      </div>

      <ul
        className={`absolute top-full pt-3 pb-3   rounded-[0.25rem] right-0 w-[8rem]
       bg-custom-green3 sm:bg-custom-green1 flex flex-col items-center  xl:relative  xl:top-auto xl:left-auto
        xl:w-auto xl:bg-transparent xl:flex-row list-none font-jost text-base sm:text-2xl ${
          isOpen ? "flex animate-dissolve" : "hidden"
        } xl:flex`}
      >
        <li className="xl:mr-40 -10 my-2 xl:my-0 ">
          <a href="#home" className="text-white no-underline">
            Home
          </a>
        </li>
        <li className="xl:mr-40 -10 my-2 xl:my-0 ">
          <a href="#projects" className="text-white no-underline">
            Projects
          </a>
        </li>
        <li className="xl:mr-40 -10 my-2 xl:my-0 ">
          <a href="#about" className="text-white no-underline">
            About
          </a>
        </li>
      </ul>

      <div className="hidden xl:flex items-center">
        <a
          href="#login"
          className="text-white mr-6 text-l xl:text-3xl  font-jost font-bold no-underline"
        >
          Login
        </a>
        <div className="w-16 h-16 bg-gray-400 rounded-full"></div>
      </div>
    </nav>
  );
};

export default Navbar;
