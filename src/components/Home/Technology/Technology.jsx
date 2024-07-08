"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import Image from "next/image";


import Link from "next/link";
const Technology = ({ technologies }) => {
  const [showedTechnology, setShowedTechnology] = useState("frontend");


  useEffect(() => {
    AOS.init();
  }, []);



  return (
    <div
      id="technology"
      className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start justify-start">
      {/* button side  */}
      {/* for dextop view */}

      <div className="hidden col-span-1 md:flex flex-col justify-center items-center gap-8 z-10">
        {Object.keys(technologies)?.map((item, index) => (
          <button

            onClick={() => setShowedTechnology(item.toLowerCase())}
            key={index}
            className={`text-2xl font-bold bg-bandPrimary py-5 w-full rounded-lg ${showedTechnology === item.toLowerCase()
              ? "bg-bandYellow text-bandTernary"
              : "text-white"
              }`}
          >
            {item.toUpperCase()}
          </button>
        ))}
      </div>
      {Object.keys(technologies)?.map((item, index) => (
        <button
          onClick={() => setShowedTechnology(item.toLowerCase())}
          key={index}
          className={`md:hidden md:col-span-1 ${showedTechnology === item.toLowerCase() ? "order-1" : "order-3"} z-10 text-2xl font-bold bg-bandPrimary py-5 w-full rounded-lg ${showedTechnology === item.toLowerCase()
            ? "bg-bandYellow text-bandTernary"
            : "text-white"
            }`}
        >
          <Link href="#technology">{item.toUpperCase()}</Link>
        </button>
      ))}
      {/* Data side */}
      {/* Data side */}
      <div className="md:col-span-2 order-2 py-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3 mx-auto">
          {technologies[showedTechnology]?.map((item, index) => (
            <div
              data-aos="zoom-in"
              data-aos-duration="500"
              className="flex flex-col justify-center items-center gap-8 bg-bandPrimary p-5 border border-text-bandYellow rounded-lg"
              key={index}
            >
              <Image
                className={
                  item.name === "Express.js" ? "bg-white p-2 rounded-lg" : ""
                }
                src={item.image}
                width={100}
                height={100}
                alt={item.name}
              />
              <h3 className="text-xl font-bold text-bandYellow">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;
