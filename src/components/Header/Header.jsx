"use client";
import { useEffect, useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  AiFillCustomerService,
  AiOutlineCloudDownload,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineProject,
} from "react-icons/ai";
import { BiArrowToTop, BiMoon, BiSun } from "react-icons/bi";
import { SiAboutdotme } from "react-icons/si";
import { LiaBlogSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import logo from "@/assets/images/ns-logo.png";
import { useGlovalContext } from "@/app/Provider/GlovalContext";
import Image from "next/image";
import ActiveLink from "@/components/ActiveLink/ActiveLink";
import Link from "next/link";
import { handleDownloadResume } from "../utils";
import myImg from "@/assets/images/my-img.jpg";
import { FaFacebook } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [scrollToTop, setScrollToTop] = useState(false);

  const { theme, setTheme } = useGlovalContext();

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  const menuData = [
    // {
    //     path: "/",
    //     name: "Home",
    //     icon: <AiOutlineHome />
    // },
    {
      path: "/projects",
      name: "Projects",
      icon: <AiOutlineProject />,
    },
    {
      path: "/blogs",
      name: "Blogs",
      icon: <LiaBlogSolid />,
    },
    {
      path: "/services",
      name: "Services",
      icon: <AiFillCustomerService />,
    },
    {
      path: "/about",
      name: "About",
      icon: <SiAboutdotme />,
    },
    {
      path: "/contact",
      name: "Contact",
      icon: <AiOutlineMail />,
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
  const floatingMenu = (
    <div
      className={`${
        isHeaderFixed &&
        `fixed bottom-2 md:bottom-auto left-2 right-2 md:left-2 md:w-11 md:top-1/3 rounded-full bg-bandPrimary z-50 shadow-md shadow-white`
      }`}
    >
      <ul
        className={`header-list flex gap-6 ${
          isHeaderFixed &&
          "flex-row md:flex-col p-3 text-2xl items-center justify-center"
        } ${theme == "light" ? "text-bandTernary" : "text-bandFont"}`}
      >
        <Link href="/">
          <Image
            className={`${
              isHeaderFixed
                ? "block wavecontainer w-10 h-8 bg-transparent mx-auto"
                : "hidden"
            }`}
            src={myImg}
            alt=""
          />
        </Link>

        {menuData.map(({ path, icon }, index) => (
          <li key={index}>
            <ActiveLink exact={path === "/"} href={path}>
              {isHeaderFixed && icon}
            </ActiveLink>
          </li>
        ))}
        <li onClick={toggleSwitch} className="text-bandYellow">
          {isHeaderFixed && <p>{theme == "light" ? <BiMoon /> : <BiSun />}</p>}
        </li>
      </ul>
    </div>
  );

  const goToTopIcon = (
    <div
      onClick={() => setScrollToTop(true)}
      className={`${
        isHeaderFixed
          ? "fixed bottom-20 md:bottom-4 right-2 md:right-6 h-10 w-10 md:h-14 md:w-14 flex items-center justify-center rounded-full bg-bandPrimary z-50 shadow-md shadow-white text-white text-4xl font-extrabold overflow-hidden"
          : "hidden"
      }`}
    >
      <BiArrowToTop className="go-to-top-btn" />
    </div>
  );
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };
  return (
    <>
      {/* For dextop */}
      <section
        className={`${
          isHeaderFixed && "hidden"
        } hidden lg:flex justify-around items-center inner-container py-4`}
      >
        <div className="flex justify-center items-center gap-2">
          <Link href="/">
            <Image className="w-24" src={logo} alt="logo" />
          </Link>
          <div
            className="switch dark-switch"
            data-isOn={isOn}
            onClick={toggleSwitch}
          >
            <motion.div
              className={theme === "light" ? "dark-handle" : "light-handle"}
              layout
              transition={spring}
            />
          </div>
        </div>
        <div className="">
          <ul className="header-list flex gap-6 text-bandFont text-2xl font-bold ">
            {menuData.map(({ path, name }, index) => (
              <li key={index} className="dextop-menu-btn">
                <ActiveLink href={path}>{name}</ActiveLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ActiveLink href="/contact">
            <button className="font-semibold text-white bg-bandPrimary border-2 rounded-md py-2 px-3 hover:border-bandYellow hover:text-bandYellow text-2xl">
              Hire me
            </button>
          </ActiveLink>
        </div>
      </section>

      {/* For Mobile  */}
      <section className="lg:hidden my-container px-4 py-4 flex justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <Link href="/">
            <Image className="w-12" src={logo} alt="logo" />
          </Link>
          <div
            className="switch dark-switch"
            data-isOn={isOn}
            onClick={toggleSwitch}
          >
            <motion.div
              className={theme == "light" ? "dark-handle" : "light-handle"}
              layout
              transition={spring}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center z-20">
          <div className="p-2 bg-bandPrimary w-10 h-10 flex justify-center items-center">
            {isMenuOpen ? (
              <FontAwesomeIcon
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={"text-2xl text-white font-extrabold"}
                icon={faXmark}
              />
            ) : (
              <FontAwesomeIcon
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={"text-2xl text-white font-extrabold"}
                icon={faBars}
              />
            )}
          </div>
          <div className=" w-4/5 mx-auto absolute top-14 right-0 left-0">
            <ul
              className={` header-list text-bandFont mb-2 text-xl flex flex-col items-center gap-2 sm-menu-item transform duration-500 rounded-md border p-2 m-2 border-white z-20 bg-black bg-opacity-60 backdrop-blur-sm  ${
                isMenuOpen ? "visible" : "hidden"
              }`}
            >
              {menuData?.map(({ path, name, icon }, index) => {
                return (
                  <>
                    <li key={index} className="w-full text-center">
                      <ActiveLink href={path}>{name}</ActiveLink>
                    </li>
                    <hr className="w-full" />
                  </>
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
      {floatingMenu}
      {goToTopIcon}
    </>
  );
};

export default Header;
