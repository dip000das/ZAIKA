import React, { useState } from "react";
import logo from "../../public/images/logo.png";
import NavLinks from "./NavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed z-10 flex items-center justify-between w-full h-20 px-8 bg-white shadow-md ">
      <div className="flex items-center">
        <Link to="/">
          <img className="h-16" src={logo} alt="Zaika_Logo" />
        </Link>
        <div className="mt-4">
          <h2 className="text-2xl leading-6 font-Pacifico">ZAIKA</h2>
          <a
            href="https://github.com/dip000das"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h6 className="ml-8 text-xs font-RobotoCondenced">
              by Dip Kumar Das
            </h6>
          </a>
        </div>
      </div>
      <NavLinks className="hidden md:flex items-center justify-around h-full max-w-[50%] font-semibold p-10 gap-8  mr-5" />
      <button
        onClick={toggleMenu}
        className={`text-3xl md:hidden transition-transform duration-300 ease-in-out transform ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        <FontAwesomeIcon icon={isOpen ? faXmark : faBurger} />
      </button>

      {isOpen && (
        <NavLinks className="absolute left-0 right-0 z-10 flex flex-col flex-wrap items-center justify-center w-11/12 gap-2 m-auto text-lg font-semibold bg-gray-800 rounded-lg backdrop-filter backdrop-blur-sm bg-opacity-30 h-60 md:hidden top-24" />
      )}
    </div>
  );
};

export default Header;
