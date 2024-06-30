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
import metaImage from "../../assets/images/nazmus-sakib.png";

export const metadata = {
  title: "Nazmus Sakib",
  // description: "Welcome to the sky of Nazmus Sakib",
  description: "Welcome to the portfolio of Nazmus Sakib",
  image: metaImage,
  url: "https://nazmus-sakib.me/",
  type: "Nazmus Sakib",
  siteName: "Nazmus Sakib",
  facebook: "https://www.facebook.com/nazmus.sakib.sheam/",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://nazmus-sakib.me/",
    title: "Nazmus Sakib",
    // description: "Welcome to the sky of Nazmus Sakib",
    description: "Welcome to the portfolio of Nazmus Sakib",
    images: [
      {
        url: "https://nazmus-sakib.me/static/media/nazmus-sakib.58e4c67c.png"
      },
    ],
    site_name: "Nazmus Sakib",
  },


}
const HomePage = () => {

  return (
    <div className="relative overflow-hidden">
      <Suspense fallback={<CircularTextLoadingComponent loadingObj="sky" />}>
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
