import React from "react";

export const Button = ({ text }) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,105,1) 0%, rgba(162,0,255,1) 100%)",
        borderRadius: "15px",
        height: "30px",
        padding: "2px 20px",
        color: "white",
      }}
    >
      <p>{text}</p>
    </div>
  );
};
