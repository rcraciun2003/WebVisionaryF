import React from "react";
import headerbg from "../assets/images/header.svg";

export const HeaderHome = () => {
  return (
    <section className="w-screen h-screen bg-no-repeat">
      <img src={headerbg} className="w-full z-1 absolute"></img>
      <div className="grid grid-cols-2 relative top-36 z-10 max-w-screen-2xl gap-5 mx-auto">
        <div className="bg-red-500">
          <h1 className="items-center text-8xl max-w-xl">Web Visionary</h1>
          <p className="text-5xl max-w-2xl">
            Descoperă cu WebVisionary cele mai noi soluții pentru îmbunătățirea
            afacerii{" "}
          </p>
        </div>
        <div>
          <iframe
            className="bg-red-500 items-center"
            src="https://www.youtube.com/watch?v=BD84ZqYQbyo"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
