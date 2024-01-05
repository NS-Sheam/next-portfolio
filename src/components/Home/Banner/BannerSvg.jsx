import React from "react";

const BannerSvg = () => {
  return (
    <div
      id="circle"
      className="transform rotate-45 relative" // Adjust the angle as needed
    >
      <svg
        className="absolute top-0 left-0"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="250px"
        height="250px"
        viewBox="0 0 300 300"
        enableBackground="new 0 0 300 300"
        xmlSpace="preserve"
      >
        <defs>
          <path
            id="circlePath"
            d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
          />
        </defs>
        <circle cx="150" cy="100" r="75" fill="none" />
        <g>
          {/* <use xlinkHref="#circlePath" fill="none" /> */}

          <text fill="#ffffff">
            <textPath xlinkHref="#circlePath">
              !-Hey There! Welcome to my portfolio-!
            </textPath>
          </text>
        </g>
      </svg>
    </div>
  );
};

export default BannerSvg;
