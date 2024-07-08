// "use client";
import React from "react";


import Image from "next/image";
import Marquee from "react-fast-marquee";


import { getAllSkills } from "@/services/actions/skills";
import Technology from "./Technology";
const HomeTechnology = async () => {
    const { skills, frontendSkills, backendSkills, databaseSkills, devOpsSkills } = await getAllSkills();
    const marqueSkills = skills?.filter(skill => skill?.image)

    return (
        <section className="pt-4 pb-8 lg:pb-14 bg-bandTernary ">
            <div className="inner-container space-y-4 container mx-auto">
                <h1 className="text-3xl md:text-6xl font-bold text-bandOrange text-center">
                    Skills
                </h1>
                <h2 className="text-xl md:text-3xl font-bold text-white text-center">
                    Technology that I know
                </h2>

                <Marquee autoFill={true}>
                    {marqueSkills?.map((skill, i) => (
                        <div
                            className="w-12 h-12 lg:w-20 lg:h-20 flex justify-center items-center mx-4 rounded-3xl"
                            key={i}
                        >
                            <Image
                                className={`${skill.name == "Express.js" ? "rounded-2xl bg-white" : skill.name == "Next.js" ? "bg-white rounded-full" : ""}`}
                                src={skill?.image}
                                width={100}
                                height={100}
                                alt=""
                            />
                        </div>
                    ))}
                </Marquee>

                <p className="text-xl lg:text-xl lg:w-4/5 mx-auto text-white text-justify md:text-center">
                    Check out my extensive list of skills to get a comprehensive
                    understanding of my expertise and capabilities. From front-end
                    development to back-end programming, UI/UX design, database management,
                    and more, my skills cover a wide range of areas in web development.
                    Explore the skills section to see how my technical proficiencies align
                    with your project requirements and discover the value I can bring to
                    your team.
                </p>

                <Technology technologies={
                    {
                        frontend: frontendSkills,
                        backend: backendSkills,
                        database: databaseSkills,
                        devops: devOpsSkills
                    }
                } />
            </div>
        </section>
    );
};

export default HomeTechnology;
