"use client";

import { useState } from "react";
import SingleProject from "../Home/Projects/SingleProject";
import ProjectModal from "../ProjectModal";

const ProjectCardClientComponent = ({ projects }) => {
    const [singleProject, setSingleProject] = useState(null);
    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 items-end mx-auto gap-5">
                {projects?.map((project) => (
                    <SingleProject
                        key={project?._id}
                        project={project}
                        setSingleProject={setSingleProject}
                    />
                ))}
            </div>

            {singleProject ? <ProjectModal projectData={singleProject} /> : <></>}
        </>
    );
};

export default ProjectCardClientComponent;