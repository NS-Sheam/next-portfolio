import AnimationPageContainer from "@/components/AnimationPageContainer";
import Footer from "@/components/Footer/Footer";
import GlowingBall from "@/components/GlowingBall";
import Header from "@/components/Header/Header";
import { CircularTextLoadingComponent } from "@/components/LoadingComponent";

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
    <div className={` min-h-screen relative overflow-hidden`}>
      <GlowingBall />
      <Header />
      <Suspense fallback={<CircularTextLoadingComponent loadingObj="sky" />}>
        {/* <Suspense fallback={<CircularTextLoadingComponent loadingObj="page" />}> */}
        <AnimationPageContainer>{children}</AnimationPageContainer>
        <Footer />
      </Suspense>
    </div>
  );
};

export default layout;
