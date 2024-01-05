"use client";
import { useContext, useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import TabItem from "./TabItem";
import SectionTitle from "../../../components/SectionTitle";
import { useGlovalContext } from "@/app/Provider/GlovalContext";
import ProjectModal from "@/components/ProjectModal";

const Projects = () => {
  const { theme } = useGlovalContext();
  const [singleProject, setSingleProject] = useState(null);
  return (
    <>
      <div className="text-center bg-gradient-to-tr from-bandPrimary to-bandSecondary inner-container min-h-screen py-8 lg:py-14">
        <SectionTitle
          heading="Projects"
          punchLine={"Projects I've worked on"}
          paragraph="Browse through my portfolio to explore a diverse range of projects that demonstrate my skills in web development. From interactive React applications to functional JavaScript projects and visually appealing HTML/CSS interfaces, you will find a showcase of my expertise in various web technologies."
        />
        <div className="">
          <TabItem setSingleProject={setSingleProject} />
        </div>
      </div>
      {singleProject && <ProjectModal projectData={singleProject} />}
    </>
  );
};

export default Projects;
