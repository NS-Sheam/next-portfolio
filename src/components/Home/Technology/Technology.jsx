"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import htmlImage from "../../../assets/technology-image/html.png";
import cssImage from "../../../assets/technology-image/css.png";
import jsImage from "../../../assets/technology-image/js.png";
import reactImage from "../../../assets/technology-image/react.png";
import expressImage from "../../../assets/technology-image/expressjs.png";
import mongodbImage from "../../../assets/technology-image/mongodb.png";
import postgresImage from "../../../assets/technology-image/postgres.png";
import sqlImage from "../../../assets/technology-image/sql.png";
import awsImage from "../../../assets/technology-image/aws.png";
import tailwindImage from "../../../assets/technology-image/tailwind.png";
import boostrapImage from "../../../assets/technology-image/bootstrap.png";
import mysqlImage from "../../../assets/technology-image/mysql.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import skillImg1 from "../../../assets/images/skill-icon/html.png";
import skillImg2 from "../../../assets/images/skill-icon/css-3.png";
import skillImg3 from "../../../assets/images/skill-icon/js.png";
import skillImg4 from "../../../assets/images/skill-icon/bootstrap.png";
import skillImg5 from "../../../assets/images/skill-icon/tailwind.png";
import skillImg6 from "../../../assets/images/skill-icon/react.png";
import skillImg7 from "../../../assets/images/skill-icon/node-js.png";
import skillImg8 from "../../../assets/images/skill-icon/express.png";
import skillImg9 from "../../../assets/images/skill-icon/mongodb.png";
const Technology = () => {
  const [showedTechnology, setShowedTechnology] = useState("frontend");
  const skills = [
    skillImg1,
    skillImg2,
    skillImg3,
    skillImg4,
    skillImg5,
    skillImg6,
    skillImg7,
    skillImg8,
    skillImg9,
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  const technologies = [
    {
      frontend: [
        {
          name: "HTML",
          image: htmlImage,
        },
        {
          name: "CSS",
          image: cssImage,
        },
        {
          name: "Javascript",
          image: jsImage,
        },
        {
          name: "React",
          image: reactImage,
        },
        {
          name: "Tailwind",
          image: tailwindImage,
        },
        {
          name: "Bootstrap",
          image: boostrapImage,
        },
      ],
    },
    {
      backend: [
        {
          name: "Node",
          image: skillImg7,
        },
        {
          name: "Express",
          image: expressImage,
        },
      ],
    },
    {
      database: [
        {
          name: "MongoDB",
          image: mongodbImage,
        },
        {
          name: "Postgres",
          image: postgresImage,
        },
        {
          name: "SQL",
          image: sqlImage,
        },
        {
          name: "MySQL",
          image: mysqlImage,
        },
      ],
      devops: [
        {
          name: "AWS",
          image: awsImage,
        },
      ],
    },
  ];

  return (
    <section className="inner-container space-y-4 pt-4 pb-8 lg:pb-14 bg-bandTernary  ">
      <h1 className="text-3xl md:text-6xl font-bold text-bandOrange text-center">
        Skills
      </h1>
      <h2 className="text-xl md:text-3xl font-bold text-white text-center">
        Technology that I know
      </h2>

      <Marquee autoFill={true}>
        {skills?.map((skill, i) => (
          <div
            className="w-12 h-12 lg:w-20 lg:h-20 flex justify-center items-center mx-4 rounded-3xl"
            key={i}
          >
            <Image
              className={`${skill == skillImg8 ? "rounded-2xl bg-white" : ""}`}
              src={skill}
              alt=""
            />
          </div>
        ))}
      </Marquee>

      <p className="text-xl lg:text-xl lg:w-4/5 mx-auto text-white text-justify md:text-center">
        Check out my extensive list of skills to get a comprehensive
        understanding of my expertise and capabilities. From front-end
        development to back-end programming, UI/UX design, database management,
        and more, my skills cover a wide range of areas in web development.
        Explore the skills section to see how my technical proficiencies align
        with your project requirements and discover the value I can bring to
        your team.
      </p>
      <div className="md:grid grid-cols-3 gap-5 items-start justify-start">
        {/* button side  */}
        <div className="col-span-1 flex flex-col justify-center items-center gap-8 z-10">
          {["Frontend", "Backend", "Database", "Devops"].map((item, index) => (
            <button
              onClick={() => setShowedTechnology(item.toLowerCase())}
              key={index}
              className={`text-2xl font-bold bg-bandPrimary py-5 w-full rounded-lg ${showedTechnology === item.toLowerCase()
                ? "bg-bandYellow text-bandTernary"
                : "text-white"
                }`}
            >
              {item}
            </button>
          ))}
        </div>
        {/* Data side */}
        <div className="col-span-2 py-4">
          {technologies.map((technology) => {
            return Object.keys(technology).map((key, index) => {
              return (
                key === showedTechnology && (
                  <div
                    className="grid grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3 mx-auto"
                    key={index}
                  >
                    {technology[key].map((item, index) => {
                      return (
                        <div
                          data-aos="zoom-in"
                          data-aos-duration="500"
                          className="flex flex-col justify-center items-center gap-8 bg-bandPrimary p-5 border border-text-bandYellow rounded-lg"
                          key={index}
                        >
                          <Image
                            className={
                              item.image === expressImage
                                ? "bg-white p-2 rounded-lg"
                                : ""
                            }
                            src={item.image}
                            width={100}
                            alt=""
                          />
                          <h3 className="text-xl font-bold text-bandYellow">
                            {item.name}
                          </h3>
                        </div>
                      );
                    })}
                  </div>
                )
              );
            });
          })}
        </div>
      </div>
    </section>
  );
};

export default Technology;
