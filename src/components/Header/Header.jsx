"use client";
import React, { useEffect, useState } from "react";
import "./Header.css";
import {
  AiFillCustomerService,
  AiOutlineCloudDownload,
  AiOutlineMail,
  AiOutlineProject,
} from "react-icons/ai";
import { BiArrowToTop } from "react-icons/bi";
import { SiAboutdotme } from "react-icons/si";
import { LiaBlogSolid } from "react-icons/lia";
import logo from "@/assets/images/ns-logo.png";
import ActiveLink from "@/components/ActiveLink/ActiveLink";
import Link from "next/link";
import { handleDownloadResume } from "../utils";
import { FaHome } from "react-icons/fa";
import CircularText from "../CurcularText/CircularText";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [scrollToTop, setScrollToTop] = useState(false);

  const menuButtonCommonClasses = `menu-button duration-300 ${isMenuOpen ? "top-0" : "top-96"}`


  const menuData = [
    {
      path: "/",
      name: "Home",
      icon: <FaHome />,
      className: "menu-button--home",
      label: "Home"
    },
    {
      path: "/services",
      name: "Services",
      icon: < AiFillCustomerService />,
      className: "menu-button--services",
      label: "Services"
    },
    {
      path: "/projects",
      name: "Projects",
      icon: <AiOutlineProject />,
      className: "menu-button--projects",
      label: "Projects"
    },
    {
      path: "/about",
      name: "About",
      icon: <SiAboutdotme />,
      className: "menu-button--about",
      label: "About"
    },
    {
      path: "/contact",
      name: "Contact",
      icon: <AiOutlineMail />,
      className: "menu-button--contact",
      label: "Contact"
    },
    {
      path: "/blogs",
      name: "Blogs",
      icon: <LiaBlogSolid />,
      className: "menu-button--blog",
      label: "Blogs"
    },

  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };
    if (scrollToTop) {
      // Smoothly scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      // Reset the state variable to avoid continuous scrolling
      setScrollToTop(false);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollToTop]);

  const mainMenu = (
    <div className="fixed bottom-20 md:bottom-4 right-2 md:right-6 space-y-3 z-20">
      <div className={`hidden md:block overflow-hidden space-y-4 z-10`}>
        {
          menuData.map(({ path, name, icon, className, label }, index) => <Link key={index}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            href={path}
            title={name}
            className={`${menuButtonCommonClasses} ${className} mx-2`}
            aria-label={label}
          >
            {icon}
          </Link>
          )}
      </div>
      <div
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
          setTimeout(() => {
            setIsMenuOpen(false);
          }, 10000)
        }}
        on
        className="h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full bg-gradient-to-t from-pink-500 to-purple-700 hover:from-purple-500 hover:to-pink-700 z-20 shadow-md shadow-white text-white text-4xl font-extrabold mx-2">
        <svg id="hamburger" className="Header__toggle-svg" viewBox="0 0 60 40">
          <g stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path className={!isMenuOpen ? "open-top-line" : "close-top-line"} d="M10,10 L50,10 Z"></path>
            <path className={!isMenuOpen ? "open-middle-line" : "close-middle-line"} d="M10,20 L50,20 Z"></path>
            <path className={!isMenuOpen ? "open-bottom-line" : "close-bottom-line"} d="M10,30 L50,30 Z"></path>
          </g>
        </svg>
      </div>
      <div
        onClick={() => setScrollToTop(true)}
        className={`${isHeaderFixed
          ? "h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full bg-bandPrimary z-20 shadow-md shadow-white text-white text-4xl font-extrabold overflow-hidden mx-2"
          : "hidden"
          }`}
      >
        <BiArrowToTop className="go-to-top-btn" />
      </div>

    </div>

  );

  return (
    <>
      {mainMenu}
      {/* For Desktop */}
      <div
        className="hidden md:flex justify-center items-center pt-6 bg-bandTernary">
        <Link href="/">
          <CircularText
            text=" -Welcome-to-the-sky-"
            degree={18}
            circleSize="80px"
            logoSize={"60px"}
            logoUrl={logo}
            origin="40px"
            textClass="text-[0.5rem] text-bandYellow font-bold uppercase shadow-md shadow-white"
            animationSpeed="7s"
          />
        </Link>
      </div>
      {/* For Mobile  */}
      <section className="z-10 md:hidden inner-container pt-2 lg:pt-0 lg:py-4 flex justify-center items-center bg-bandTernary">
        <div className="flex justify-center items-center">
          <Link href="/">
            <CircularText
              text=" -Welcome-to-the-sky-"
              degree={18}
              circleSize="70px"
              logoSize={"50px"}
              logoUrl={logo}
              origin="35px"
              textClass="text-[0.5rem] text-bandYellow font-bold uppercase shadow-md shadow-white"
              animationSpeed="7s"
            />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center z-20">
          <div className="transform transition-all ease-linear duration-700 fixed w-4/5 mx-auto top-14 right-0 left-0">
            <ul
              className={` header-list text-bandFont mb-2 text-xl flex flex-col items-center gap-2 sm-menu-item transform duration-500 rounded-md border p-2 m-2 border-white z-20 bg-black bg-opacity-60 backdrop-blur-sm  ${isMenuOpen ? "visible" : "hidden"
                }`}
            >
              {menuData?.map(({ path, name }, index) => {

                return (
                  <React.Fragment key={index}>
                    <li className="w-full text-center">
                      <ActiveLink href={path}>{name}</ActiveLink>
                    </li>
                    <hr className="w-full" />
                  </React.Fragment>
                );
              })}

              <ActiveLink href="/contact" className="">
                <button className="font-semibold bg-bandPrimary text-white border-2 py-2 px-2 hover:border-bandYellow hover:text-bandYellow rounded-md text-xl">
                  Hire me
                </button>
              </ActiveLink>
              <div className="my-2">
                <button
                  onClick={handleDownloadResume}
                  className="text-white uppercase font-bold flex items-center gap-2 bg-gradient-to-r from-bandPrimary via-bandSecondary to-bandTernary hover:from-bandTernary hover:to-bandPrimary py-2 px-3 rounded-full border-2 border-white"
                >
                  Download Resume <AiOutlineCloudDownload />
                </button>
              </div>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
