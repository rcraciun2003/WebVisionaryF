import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { Button } from "./components/Button";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
export const Nav = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="flex w-screen justify-between font-medium fixed bg-white">
      <img src={logo} className="h-16 ml-6 pr-14"></img>

      <div className="flex justify-center align-center hidden lg:flex">
        <a className="h-16 ml-6 pt-6">Acasa</a>
        <a className="h-16 ml-6 pt-6">Despre Noi</a>
        <div className="h-16 ml-4 pt-6">
          <button
            onClick={() => {
              setDropdown(!dropdown);
            }}
            className="flex"
          >
            Servicii
            <RiArrowDropDownLine className="pt-1" />
          </button>
          {dropdown && (
            <div className="absolute rounded-b-lg flex flex-col">
              <a className="pt-2">Creeare WebSite</a>
              <a className="pt-2">Creeare Magazin Online</a>
              <a className="pt-2">Creeare Aplicatie Web</a>
              <a className="pt-2">Opttimizare SEO</a>
            </div>
          )}
        </div>
        <a className="h-16 ml-6 pt-6">Portofoliu</a>
        <a className="h-16 ml-6 pt-6">Contact</a>
      </div>
      <div className="flex justify-center align-center pt-6 mr-10  hidden lg:flex">
        <p className="mr-6">+40720404104</p>
        <Button text="Hai Sa Vorbim"></Button>
      </div>
      <button>
        <FaBars className="h-14 mr-6" />
      </button>
    </div>
  );
};
