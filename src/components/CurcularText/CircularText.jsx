import React, { useEffect, useRef } from "react";
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
  const textRef = useRef();
  useEffect(() => {
    const textElement = textRef.current;
    textElement.innerHTML = text
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * degree}deg); transform-origin: 0 ${origin};">${char}</span>`,
      )
      .join("");
  }, [text, degree, origin]);
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
        <p ref={textRef} className={`${textClass}`}>{text}</p>
      </div>
    </div>
  );
};

export default CircularText;
