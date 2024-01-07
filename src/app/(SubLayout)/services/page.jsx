import React from "react";
import customDevelopmentImage from "@/assets/services/custom-website.jpg";
import ecommerceDevelopmentImage from "@/assets/services/e-commerce-website.jpg";
import responsiveDesignImage from "@/assets/services/responsive-website.jpg";
import cmsImage from "@/assets/services/cms-website.jpg";
import maintenanceImage from "@/assets/services/maintanence-website.jpg";
import redesignImage from "@/assets/services/redesign-website.jpg";

import Image from "next/image";
const Services = () => {



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
    <section className={`bg-bandTernary space-y-6 inner-container py-8 lg:pb-16 lg:pt-0`}>

      <h1 className=" font-extrabold banner-name-font text-6xl text-center">My Services</h1>
      <p className="text-white text-justify md:text-center w-full md:w-3/4 mx-auto pb-4 md:pb-6 lg:pb-8">
        See all my services below. If you have any questions, please feel free to contact me.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {webDevelopmentServicesData.map(
          ({ title, description, image }, index) => (
            <div
              key={index}
              className={` p-6 rounded-lg hover:shadow-lg transition duration-300 transform hover:scale-105 shadow-2xl border-2 border-bandYellow`}
            >
              <div className="relative w-full h-48 mb-4 rounded-lg border-2 border-bandOrange">
                <Image
                  src={image}
                  alt={title}
                  className="object-cover w-full h-full"
                  fill
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-bandYellow">
                {title}
              </h3>
              <p className="text-white text-xl">{description}</p>
            </div>
          ),
        )}
      </div>
    </section>
  );
};

export default Services;
