import Footer from "@/components/Footer/Footer";
import ExperienceCard from "@/components/Home/ExperienceCard/ExperienceCard";
import HeaderBanner from "@/components/Home/HeaderBanner/HeaderBanner";
import HomeBlogs from "@/components/Home/HomeBlogs/HomeBlogs";
// import MyServices from "@/components/Home/MyServices/MyServices";
import Projects from "@/components/Home/Projects/Projects";
import Quotes from "@/components/Home/Quotes/Quotes";
// import Skills from "@/components/Home/Skills/Skills";
import Technology from "@/components/Home/Technology/Technology";
// import Testimonial from "@/components/Home/Testimonial/Testimonial";
import LoadingComponent from "@/components/LoadingComponent";
import React, { Suspense } from "react";
// import { Blocks } from 'react-loader-spinner';

const HomePage = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Glowing ball css effect  */}
      <div className='absolute top-0 left-0 bottom-0 right-0'>
        <div className="glowing">
          <span style={{ '--i': 1 }}></span>
          <span style={{ '--i': 2 }}></span>
          <span style={{ '--i': 3 }}></span>
          <span style={{ '--i': 3 }}></span>
        </div>
        <div className="glowing">
          <span style={{ '--i': 1 }}></span>
          <span style={{ '--i': 2 }}></span>
          <span style={{ '--i': 3 }}></span>
          <span style={{ '--i': 3 }}></span>
        </div>

        <div className="glowing">
          <span style={{ '--i': 1 }}></span>
          <span style={{ '--i': 2 }}></span>
          <span style={{ '--i': 3 }}></span>
          <span style={{ '--i': 3 }}></span>
        </div>

        <div className="glowing">
          <span style={{ '--i': 1 }}></span>
          <span style={{ '--i': 2 }}></span>
          <span style={{ '--i': 3 }}></span>
          <span style={{ '--i': 3 }}></span>
        </div>
      </div>
      <HeaderBanner />
      {/* <Skills /> */}
      <ExperienceCard />
      <Technology />
      <Suspense fallback={<LoadingComponent />}>
        <Projects />
      </Suspense>
      <HomeBlogs />
      {/* <MyServices /> */}
      {/* <Testimonial /> */}
      <Quotes />
      <Footer />
    </div>
  );
};

export default HomePage;
