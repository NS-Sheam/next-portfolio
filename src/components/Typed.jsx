"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedComponent = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "MERN Stack Developer",
        "React Developer",
        "Frontend Developer",
      ],
      typeSpeed: 60,
      backSpeed: 60,
      smartBackspace: true,
      shuffle: false,
      backDelay: 3000,
      fadeOut: false,
      fadeOutDelay: 100,
      loop: true,
      showcaseCursor: true,
      cursorChar: "|",
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <span
      ref={typedRef}
      data-aos="fade-up"
      data-aos-anchor="#example-anchor"
      data-aos-duration="500"
      className=" ms-6 text-xl md:text-5xl font-bold font-gradient banner-text-underline"
    />
  );
};

export default TypedComponent;
