import React, { useEffect } from "react";
import "./CircularText.css";

const CircularText = ({
  text,
  degree,
  circleSize,
  logoSize,
  logoUrl,
  origin,
  textClass,
  filter,
  animationSpeed,
}) => {
  useEffect(() => {
    const text = document.querySelector(".text p");
    text.innerHTML = text.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${
            i * degree
          }deg); transform-origin: 0 ${origin};">${char}</span>`,
      )
      .join("");
  });
  // /* filter: brightness(1.5) contrast(1.5); */
  // animation: rotateText 10s linear infinite;
  return (
    <div
      className={`circle relative flex justify-center items-center`}
      style={{
        width: circleSize,
        height: circleSize,
      }}
    >
      <div
        className="logo absolute"
        style={{
          backgroundImage: `url(${logoUrl.src})`,
          width: logoSize,
          height: logoSize,
          borderRadius: "50%",
          backgroundSize: "cover",
          filter: filter,
        }}
      ></div>
      <div
        className="text absolute w-full h-full"
        style={{
          animation: `rotateText ${animationSpeed || "10s"} linear infinite`,
        }}
      >
        <p className={`${textClass}`}>{text}</p>
      </div>
    </div>
  );
};

export default CircularText;
