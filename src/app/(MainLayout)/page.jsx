import Footer from "@/components/Footer/Footer";
import GlowingBall from "@/components/GlowingBall";
import ExperienceCard from "@/components/Home/ExperienceCard/ExperienceCard";
import HeaderBanner from "@/components/Home/HeaderBanner/HeaderBanner";
import HomeBlogs from "@/components/Home/HomeBlogs/HomeBlogs";
// import MyServices from "@/components/Home/MyServices/MyServices";
import Projects from "@/components/Home/Projects/Projects";
import Quotes from "@/components/Home/Quotes/Quotes";
// import Skills from "@/components/Home/Skills/Skills";

import { CircularTextLoadingComponent } from "@/components/LoadingComponent";
import { Suspense } from "react";
// import Testimonial from "@/components/Home/Testimonial/Testimonial";
// import { Blocks } from 'react-loader-spinner';
import metaImage from "../../assets/images/nazmus-sakib.png";
import HomeTechnology from "@/components/Home/Technology/HomeTechnology";

export const metadata = {
  title: "Nazmus Sakib",
  description: "Welcome to the sky of Nazmus Sakib",
  // description: "Welcome to the portfolio of Nazmus Sakib",
  image: metaImage,
  url: "https://nazmussakib.dev/",
  type: "Nazmus Sakib",
  siteName: "Nazmus Sakib",
  facebook: "https://www.facebook.com/nazmus.sakib.sheam/",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://nazmussakib.dev/",
    title: "Nazmus Sakib",
    description: "Welcome to the sky of Nazmus Sakib",
    // description: "Welcome to the portfolio of Nazmus Sakib",
    images: [
      {
        url: "https://nazmussakib.dev/static/media/nazmus-sakib.58e4c67c.png"
      },
    ],
    site_name: "Nazmus Sakib",
  },


}
const HomePage = () => {

  return (
    <div className="relative overflow-hidden">
      <Suspense fallback={<CircularTextLoadingComponent loadingObj="sky" />}>
        {/* <Suspense fallback={<CircularTextLoadingComponent loadingObj="Page" />}> */}
        <GlowingBall />
        <HeaderBanner />
        {/* <Skills /> */}
        <ExperienceCard />
        <HomeTechnology />
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
