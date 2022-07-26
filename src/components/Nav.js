import React from "react";
import logo from "../assets/images/logo.png";
export const Nav = () => {
  return (
    <div className="">
      <div>
        <img src={logo}></img>
        <a>Acasa</a>
        <a>Despre Noi</a>
        <button> Servicii</button>
        <a>Portofoliu</a>
        <a>Contact</a>
      </div>
      <div>
        <p>+40720404104</p>
        <Button>Hai Sa Vorbim</Button>
      </div>
    </div>
  );
};
