"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import AOS from "aos";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CircularTextLoadingComponent } from "@/components/LoadingComponent";


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
    }, 2500);

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
        showWelcome ? <CircularTextLoadingComponent loadingObj="Sky" /> :
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      }
    </GlovalContext.Provider>
  );
};

export const useGlovalContext = () => useContext(GlovalContext);
