
import ProjectCardClientComponent from "@/components/project/ProjectCardsClientComponent";

import { getAllProjects } from "@/services/actions/project";



const ProjectsPage = async () => {

  const { projects, loading } = await getAllProjects();

  return (
    <section className="bg-bandTernary py-8 lg:pb-16 lg:pt-0 ">
      <div className="container mx-auto  inner-container">
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
        {
          !loading &&
          <ProjectCardClientComponent projects={projects} />
        }
      </div>
    </section>
  );
};

export default ProjectsPage;
