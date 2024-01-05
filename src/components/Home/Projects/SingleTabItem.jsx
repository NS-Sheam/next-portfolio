import { useContext, useState } from "react";
import SingleProject from "./SingleProject";

const SingleTabItem = ({ projects, setSingleProject }) => {
  const [fold, setFold] = useState(true);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 items-end mx-auto my-5 gap-5">
      {fold
        ? projects
            ?.slice(0, 5)
            .map((project) => (
              <SingleProject
                key={project.id}
                project={project}
                setSingleProject={setSingleProject}
              />
            ))
        : projects?.map((project) => (
            <SingleProject
              key={project.id}
              project={project}
              setSingleProject={setSingleProject}
            />
          ))}
      {fold && (
        <div className="w-full h-full flex justify-center items-center">
          <button
            onClick={() => setFold(!fold)}
            className={`font-semibold text-bandTernary border-bandYellow button-container-dark h-14 w-36 py-2 px-2 z-30 text-xl`}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default SingleTabItem;
