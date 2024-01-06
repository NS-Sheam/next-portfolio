"use client";
import { useEffect, useState } from "react";
import SingleProject from "@/components/Home/Projects/SingleProject";
import ProjectModal from "@/components/ProjectModal";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [singleProject, setSingleProject] = useState([]);
  useEffect(() => {
    fetch("projectData.json")
      .then((res) => res.json())
      .then((projects) => {

        setProjects(projects);
      });
  }, []);

  return (
    <section className="bg-bandTernary inner-container py-8 lg:pb-16 lg:pt-0 ">
      <div
        data-aos="zoom-in"
        data-aos-anchor="#example-anchor"
        data-aos-duration="1000"
      >
        <h1 className="font-extrabold mb-2 banner-name-font text-6xl text-center">
          My Projects
        </h1>
        <p
          className={`text-white text-justify md:text-center w-3/4 mx-auto pb-4 md:pb-6 lg:pb-8`}
        >
          Browse through my portfolio to explore a diverse range of projects
          that demonstrate my skills in web development. From interactive React
          applications to functional JavaScript projects and visually appealing
          HTML/CSS interfaces, you will find a showcase of my expertise in
          various web technologies.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 items-end mx-auto gap-5">
        {projects?.map((project) => (
          <SingleProject
            key={project.id}
            project={project}
            setSingleProject={setSingleProject}
          />
        ))}
      </div>

      {singleProject ? <ProjectModal projectData={singleProject} /> : <></>}
    </section>
  );
};

export default ProjectsPage;
