"use client";
import React from "react";
import experienceImg from "@/assets/experiences/experience.png";
import clients from "@/assets/experiences/clients.png";
import success from "@/assets/experiences/success.png";
import ongoing from "@/assets/experiences/ongoing.png";
import "./ExperienceCard.css";
import Image from "next/image";
import CountUp from "react-countup";
const ExperienceCard = () => {
  const cardData = [
    {
      image: experienceImg,
      heading: [2, "+"],
      description: "Years of Experience",
      gradientClass: "bg-green-box",
      imageCss: "bg-gradient-to-br from-green-900 via-green-600 to-green-900",
      textCss: "text-green-500",
    },
    {
      image: clients,
      heading: [10, "+"],
      description: "Respected Clients",
      gradientClass: "bg-blue-box",
      imageCss:
        "bg-gradient-to-br from-indigo-900 via-indigo-600 to-indigo-900",
      textCss: "text-indigo-500",
    },
    // {
    //     image: engineer,
    //     heading: [10, "+"],
    //     description: "Dedicated Engineers",
    //     gradientClass: "bg-yellow-box",
    //     imageCss: "bg-gradient-to-br from-yellow-900 via-yellow-600 to-yellow-900",
    //     textCss: "text-yellow-500"
    // },
    {
      image: success,
      heading: [100, "%"],
      description: "Project Success Rate",
      gradientClass: "bg-white-box",
      imageCss: "bg-gradient-to-br from-gray-900 via-gray-400 to-gray-900",
      textCss: "text-gray-500",
    },
    {
      image: ongoing,
      heading: [10, "+"],
      description: "Ongoing Projects",
      gradientClass: "bg-green-box",
      imageCss: "bg-gradient-to-br from-green-900 via-green-600 to-green-900",
      textCss: "text-green-500",
    },
  ];
  return (
    <div className="bg-bandTernary py-4 lg:py-8">
      <div className="container mx-auto inner-container space-y-6">
        <p className="font-extrabold text-xl md:text-3xl text-white text-center">
          Experience Highlights{" "}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {cardData.map(
            (
              { image, heading, description, gradientClass, imageCss, textCss },
              index,
            ) => (
              <div className="card" key={index}>
                <div
                  className={`container-card space-y-4 rounded-3xl after:rounded-3xl p-4 ${gradientClass}`}
                >
                  <Image
                    className={`p-2 rounded-md  ${gradientClass} ${imageCss}`}
                    width={100}
                    src={image}
                    alt={`image ${index}`}
                  />
                  <p
                    className={`text-3xl md:text-[4rem] font-extrabold ${textCss}`}
                  >
                    <CountUp
                      enableScrollSpy={true}
                      scrollSpyDelay={100}
                      className=""
                      end={heading[0]}
                    />
                    {heading[1]}
                  </p>

                  <p className=" md:text-xl font-extrabold text-white">
                    {description}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
