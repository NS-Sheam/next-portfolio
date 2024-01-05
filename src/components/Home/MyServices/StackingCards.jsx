"use client";
import softwareDevelopment from "@/assets/images/my-services/software-development.png";
import webDevelopment from "@/assets/images/my-services/web-development.png";
import uiUxDesign from "@/assets/images/my-services/ui-ux.png";
import devOps from "@/assets/images/my-services/devops.png";
import softwareTesting from "@/assets/images/my-services/testing.png";
import maintenance from "@/assets/images/my-services/maintenance.png";
import Image from "next/image";
import { useEffect, useState } from "react";

const StackingCards = () => {
  // const [services, setServices] = useState([
  const services = [
    {
      id: 1,
      title: "Custom Software Development",
      content:
        "We build custom software solutions that meet your business needs. Our team of experts will work with you to understand your business needs and develop a solution that will help you achieve your goals.",
      imageUrl: softwareDevelopment,
      cardColor: "bg-gradient-to-r from-blue-500 to-blue-700 bg-blue-500",
    },
    {
      id: 2,
      title: "Web and Mobile Application Design & Development",
      content:
        "We build custom software solutions that meet your business needs. Our team of experts will work with you to understand your business needs and develop a solution that will help you achieve your goals.",
      imageUrl: webDevelopment,
      cardColor: "bg-gradient-to-r from-purple-500 to-purple-700 bg-purple-500",
    },
    {
      id: 3,
      title: "UI/UX design",
      content:
        "We build custom software solutions that meet your business needs. Our team of experts will work with you to understand your business needs and develop a solution that will help you achieve your goals.",
      imageUrl: uiUxDesign,
      cardColor: "bg-gradient-to-r from-green-500 to-green-700 bg-green-500",
    },
    {
      id: 4,
      title: "DevOps",
      content:
        "We build custom software solutions that meet your business needs. Our team of experts will work with you to understand your business needs and develop a solution that will help you achieve your goals.",
      imageUrl: devOps,
      cardColor: "bg-gradient-to-r from-yellow-500 to-yellow-700 bg-yellow-500",
    },
    {
      id: 5,
      title: "Software Testing",
      content:
        "We build custom software solutions that meet your business needs. Our team of experts will work with you to understand your business needs and develop a solution that will help you achieve your goals.",
      imageUrl: softwareTesting,
      cardColor: "bg-gradient-to-r from-red-500 to-red-700 bg-red-500",
    },
    {
      id: 6,
      title: "Maintenance, and Continuous Support",
      content:
        "We build custom software solutions that meet your business needs. Our team of experts will work with you to understand your business needs and develop a solution that will help you achieve your goals.",
      imageUrl: maintenance,
      cardColor: "bg-gradient-to-r from-indigo-500 to-indigo-700 bg-indigo-500",
    },
  ]

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // console.log(scrollY);

  return (
    <div className="">
      <ul id="cards" className="space-y-8 mb-52">
        {services.map(({ id, title, imageUrl, content, cardColor }, index) => {
          const translateY = (index + 1) * 20; // Adjust this value based on your desired offset
          const scale =
            index === 0
              ? 1.25 - scrollY * 0.0001
              : index === 1
                ? 1.3 - scrollY * 0.0001
                : index === 2
                  ? 1.35 - scrollY * 0.0001
                  : index === 3
                    ? 1.4 - scrollY * 0.0001
                    : index === 4
                      ? 1.45 - scrollY * 0.0001
                      : index === 5
                        ? 1.5 - scrollY * 0.0001
                        : 1.55 - scrollY * 0.0001; // Adjust the scroll effect based on your preference
          // console.log(translateY, scale);
          return (
            <li
              key={id}
              className={`card relative mx-auto `}
              id={`card_${index + 1}`}
              style={{
                transform: `translateY(${translateY}px) scale(${scale})`,
              }}
            >
              <div
                className={`card__content ${cardColor} py-2 px-4 rounded-2xl shadow-2xl border-2 border-band-orange min-h-[80vh]`}
              >
                <div className="grid grid-cols-1 md:grid-cols-4  gap-8 mb-4 text-white">
                  <div className="md:col-span-3 space-y-4">
                    <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
                    <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>
                    <p className="text-xl md:text-2xl">{content}</p>
                  </div>
                  <div className="md:col-span-1 bg-slate-300 p-6 rounded-xl">
                    <Image
                      src={imageUrl}
                      alt={`Card ${index + 1}`}
                      className="mx-auto"
                    />
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StackingCards;
