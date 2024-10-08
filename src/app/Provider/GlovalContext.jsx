"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import AOS from "aos";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import logo from "@/assets/images/ns-logo-3.png";
import CircularText from "@/components/CurcularText/CircularText";


const GlovalContext = createContext();
const queryClient = new QueryClient();

export const GlovalContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [showWelcome, setShowWelcome] = useState(true);
  useEffect(() => {
    AOS.init();
  }, [theme]);
  const glovalData = { theme, setTheme, showWelcome };
  // const navigation = useNavigation();

  useEffect(() => {
    // Hide the welcome message after 2 seconds
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 1500);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  // Developer aleart start --------------------------------

  // Prevent right-click context menu
  // useEffect(() => {
  //     const handleContextMenu = (e) => {
  //         e.preventDefault();
  //         showDeveloperToolsAlert(); // Show the alert when context menu is triggered
  //     };

  //     window.addEventListener('contextmenu', handleContextMenu);

  //     return () => {
  //         window.removeEventListener('contextmenu', handleContextMenu);
  //     };
  // }, []);

  // // Capture F12 key press event
  // useEffect(() => {
  //     const handleKeyPress = (e) => {
  //         if (e.key === 'F12') {
  //             e.preventDefault();
  //             showDeveloperToolsAlert();
  //         }
  //     };

  //     window.addEventListener('keydown', handleKeyPress);

  //     return () => {
  //         window.removeEventListener('keydown', handleKeyPress);
  //     };
  // }, []);

  // const showDeveloperToolsAlert = () => {
  //   Swal.fire({
  //     icon: "warning",
  //     title: "Developer Tools Blocked",
  //     text: "Please refrain from using developer tools on this website.",
  //     confirmButtonText: "OK",
  //   });
  // };

  // Developer aleart ends --------------------------------
  return (
    <GlovalContext.Provider value={glovalData}>
      {
        showWelcome ? <div className="h-screen flex justify-center items-center w-full bg-bandTernary">

          <CircularText
            text=" -Welcome-to-the-sky-"
            // text=" -Welcome-to-the-portfolio-"
            degree={18}
            circleSize="80px"
            logoSize={"65px"}
            logoUrl={logo}
            origin="40px"
            // degree={14.8}
            // circleSize="100px"
            // logoSize={"90px"}
            // logoUrl={logo}
            // origin="50px"
            textClass="text-[0.5rem] text-bandYellow font-bold uppercase shadow-md shadow-white"
            animationSpeed="7s"
          />

        </div> :
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      }
    </GlovalContext.Provider>
  );
};

export const useGlovalContext = () => useContext(GlovalContext);
