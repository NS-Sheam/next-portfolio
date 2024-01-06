import React from "react";
import customDevelopmentImage from "@/assets/services/custom-website.jpg";
import ecommerceDevelopmentImage from "@/assets/services/e-commerce-website.jpg";
import responsiveDesignImage from "@/assets/services/responsive-website.jpg";
import cmsImage from "@/assets/services/cms-website.jpg";
import maintenanceImage from "@/assets/services/maintanence-website.jpg";
import redesignImage from "@/assets/services/redesign-website.jpg";

import Image from "next/image";
const Services = () => {
  // const { theme } = useGlovalContext();
  const theme = "light";


  const webDevelopmentServicesData = [
    {
      title: "Custom Website Development",
      description:
        "Tailored websites with unique features and functionalities.",
      image: customDevelopmentImage,
    },
    {
      title: "E-commerce Development",
      description:
        "Create a seamless online shopping experience for your customers.",
      image: ecommerceDevelopmentImage,
    },
    {
      title: "Mobile Responsive Design",
      description:
        "We ensure your website looks great on all devices and screen sizes.",
      image: responsiveDesignImage,
    },
    {
      title: "Content Management System (CMS)",
      description:
        "We build websites with easy-to-use CMS to manage your content.",
      image: cmsImage,
    },
    {
      title: "Website Maintenance",
      description:
        "We provide ongoing website maintenance to ensure your website is up-to-date and secure.",
      image: maintenanceImage,
    },
    {
      title: "Website Redesign",
      description:
        "We redesign outdated websites to improve their functionality and user experience.",
      image: redesignImage,
    },
  ];

  return (
    <section className={`${theme === "light" ? "bg-white" : "bg-bandTernary"}`}>
      <div className="bg-bandOrange text-slate-800 pb-14 md:pb-20 pt-24 md:pt-36 text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold">Web Services</h1>
        <p className="text-xl md:text-2xl">
          I create stunning and responsive websites tailored to your business
          needs
        </p>
      </div>
      <div className="py-14 my-container space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webDevelopmentServicesData.map(
            ({ title, description, image }, index) => (
              <div
                key={index}
                className={`${theme === "dark" ? "bg-white" : "bg-slate-400"
                  } p-6 rounded-lg hover:shadow-lg transition duration-300 transform hover:scale-105 shadow-2xl border-2 border-band-orange`}
              >
                <div className="relative w-full h-48 mb-4 rounded-lg border-2 border-band-orange">
                  <Image
                    src={image}
                    alt={title}
                    className="object-cover w-full h-full"
                    fill
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-bg-color">
                  {title}
                </h3>
                <p className="text-bandTernary text-xl">{description}</p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
