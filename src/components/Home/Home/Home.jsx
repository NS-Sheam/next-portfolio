import HeaderBanner from "../HeaderBanner/HeaderBanner";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import { useLayoutEffect } from "react";
import Quotes from "../Quotes/Quotes";
import HomeBlogs from "../HomeBlogs/HomeBlogs";
import MetaDecorator from "../../../meta/MetaDecorator";
import Technology from "../Technology/Technology";

const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <MetaDecorator
        description="Hey this is Nazmus Sakib and welcome to the sky...."
        title="Nazmus Sakib"
        imageUrl="https://i.ibb.co/TYDxj4H/ns-logo.png"
        imageAlt="nazmus-sakib"
      />
      <HeaderBanner />
      {/* <Skills /> */}
      <Technology />
      <Projects />
      <HomeBlogs />
      <Quotes />
    </>
  );
};

export default Home;
