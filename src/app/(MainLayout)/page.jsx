import Footer from "@/components/Footer/Footer";
import GlowingBall from "@/components/GlowingBall";
import ExperienceCard from "@/components/Home/ExperienceCard/ExperienceCard";
import HeaderBanner from "@/components/Home/HeaderBanner/HeaderBanner";
import HomeBlogs from "@/components/Home/HomeBlogs/HomeBlogs";
// import MyServices from "@/components/Home/MyServices/MyServices";
import Projects from "@/components/Home/Projects/Projects";
import Quotes from "@/components/Home/Quotes/Quotes";
// import Skills from "@/components/Home/Skills/Skills";
import Technology from "@/components/Home/Technology/Technology";
import { CircularTextLoadingComponent } from "@/components/LoadingComponent";
import { Suspense } from "react";
// import Testimonial from "@/components/Home/Testimonial/Testimonial";
// import { Blocks } from 'react-loader-spinner';

const HomePage = () => {
  return (
    <div className="relative overflow-hidden">
      <Suspense fallback={<CircularTextLoadingComponent />}>
        <GlowingBall />
        <HeaderBanner />
        {/* <Skills /> */}
        <ExperienceCard />
        <Technology />
        <Projects />
        <HomeBlogs />
        {/* <MyServices /> */}
        {/* <Testimonial /> */}
        <Quotes />
        <Footer />
      </Suspense>
    </div>
  );
};

export default HomePage;
