import { useState } from "react";
import "./SingleProject.css";
import Image from "next/image";
import { useGlovalContext } from "@/app/Provider/GlovalContext";

const SingleProject = ({ project, setSingleProject }) => {
  // const [liFold, setLiFold] = useState(true);
  const { theme } = useGlovalContext();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="500"
      data-aos-offset="20"
      className={`single-project mx-auto shadow-xl rounded-lg transform rotate-30 hover:rotate-0 transition-transform duration-300 my-5 lg:my-8`}
    >
      <figure
        className={`relative flex items-center justify-center img-container-dark`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          blurDataURL="../../../assets/images/banner3.jpg"
          placeholder="blur"
          height={270}
          width={270}
          src={project.image}
          alt="image"
          className="rounded-xl mx-auto hover:scale-105 duration-300 shadow-lg"
        />

        {/* Button inside the figure */}
        <div
          className={`absolute h-full w-full ${
            isHovered ? "flex" : "hidden"
          } justify-center items-center bg-opacity-50 bg-black`}
        >
          <label
            onClick={() => {
              setSingleProject(project);
              window.my_modal_4.showModal();
            }}
            htmlFor="my-modal-5"
            className={`btn button-container-dark  text-bandTernary transform duration-300 p-4 font-bold`}
          >
            Details
          </label>
        </div>
      </figure>
      {/* <div className="card-body items-center text-center p-4 space-y-3 flex flex-col flex-grow justify-between">
                <h2 className="card-title text-xl lg:text-2xl font-bold">{project.projectName}</h2>
                <p className={`text-left leading-3 ${theme === "light" ? "text-bandYellow" : "text-bandTernary"} font-bold`}>Technologies:</p>
                <p className="list-disc list-inside leading-5">
                    {project.technology.slice(0, 5).map((tech, i) => (
                        <span key={i} className="text-left leading-7 my-1">
                            &#8226; &nbsp;{tech} &nbsp;
                        </span>
                    ))}
                </p>
                <div className="card-actions mt-auto w-full">
                    <label
                        onClick={() => {
                            setSingleProject(project)
                            window.my_modal_4.showModal()
                        }}
                        htmlFor="my-modal-5"
                        className={`btn gradient-btn text-white ${theme === "light" && "border-2 border-white"} transform duration-300 px-10 py-2 w-full rounded-md font-bold text-base`}
                    >
                        Details
                    </label>
                </div>
            </div> */}
    </div>
  );
};

export default SingleProject;

{
  /* <div
    data-aos="zoom-in"
    data-aos-duration="500"
    data-aos-offset="100"
    className={`single-project mx-auto ${theme == "light" ? "bg-bandSecondary text-white" : "bg-white text-bandTernary"} shadow-xl rounded-lg lg:h-full transform rotate-30 hover:rotate-0 transition-transform duration-300`}>
    <figure className="px-5 pt-5">
        <LazyLoad>
            <img src={project.image} alt="image" className="rounded-xl mx-auto hover:scale-105 duration-300 shadow-lg" />
        </LazyLoad>
    </figure>
    <div className="card-body items-center text-center p-4 space-y-3 flex flex-col flex-grow justify-between">
        <h2 className="card-title text-xl lg:text-2xl font-bold">{project.projectName}</h2>
        <p className={`text-left leading-3 ${theme === "light" ? "text-bandYellow" : "text-bandTernary"} font-bold`}>Technologies:</p>
        <p className="list-disc list-inside leading-5">
            {project.technology.slice(0, 5).map((tech, i) => (
                <span key={i} className="text-left leading-7 my-1">
                    &#8226; &nbsp;{tech} &nbsp;
                </span>
            ))}
        </p>
        <div className="card-actions mt-auto w-full">
            <label
                onClick={() => {
                    setSingleProject(project)
                    window.my_modal_4.showModal()
                }}
                htmlFor="my-modal-5"
                className={`btn gradient-btn text-white ${theme === "light" && "border-2 border-white"} transform duration-300 px-10 py-2 w-full rounded-md font-bold text-base`}
            >
                Details
            </label>
        </div>
    </div>
</div> */
}
