
import "react-tabs/style/react-tabs.css";
import TabItem from "./TabItem";
import SectionTitle from "../../../components/SectionTitle";

const Projects = () => {
  return (
    <section className="bg-gradient-to-tr from-bandPrimary to-bandSecondary  py-8 lg:py-14">
      <div className="container mx-auto text-center  inner-container">
        <SectionTitle
          heading="Projects"
          punchLine={"Projects I've worked on"}
          paragraph="Browse through my portfolio to explore a diverse range of projects that demonstrate my skills in web development. From interactive React applications to functional JavaScript projects and visually appealing HTML/CSS interfaces, you will find a showcase of my expertise in various web technologies."
        />
        <div className="">
          <TabItem />
        </div>
      </div>
    </section>
  );
};

export default Projects;
