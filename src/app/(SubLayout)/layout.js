import AnimationPageContainer from "@/components/AnimationPageContainer";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { Suspense } from "react";

const layout = ({ children }) => {
  return (
    // <AnimatePresence mode="wait">
    //   <motion.div
    //     key={route}
    //     initial="pageInitial"
    //     animate="pageAnimate"
    //     variants={{
    //       pageInitial: {
    //         opacity: 0,
    //       },
    //       pageAnimate: {
    //         opacity: 1,
    //       },
    //     }}
    //     transition={{
    //       duration: 0.5,
    //     }}
    //   >
    <div className={` min-h-screen max-w-screen-xl mx-auto `}>
      <Header />

      <Suspense
        fallback={
          <div className="h-screen mx-auto">
            <p className="loading loading-infinity loading-lg text-band-orange"></p>
          </div>
        }
      >
        <AnimationPageContainer>{children}</AnimationPageContainer>
        <Footer />
      </Suspense>
    </div>
  );
};

export default layout;
