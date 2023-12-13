"use client"
import { useContext, useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import TabItem from './TabItem';
import SectionTitle from '../../../components/SectionTitle';
import { useGlovalContext } from '@/app/Provider/GlovalContext';
import ProjectModal from '@/components/ProjectModal';



const Projects = () => {
    const { theme } = useGlovalContext();
    const [singleProject, setSingleProject] = useState(null);
    return (
        <>
            <div
                className='bg-gradient-to-tr from-bandPrimary to-bandSecondary inner-container min-h-screen p-4 lg:p-6'>
                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1000"
                    className={`w-full lg:w-4/5 mx-auto text-center p-4 lg:p-8 lg:my-8 ${theme == "light" ? "bg-white" : "bg-bandTernary"} rounded-2xl shadow-2xl`}>
                    <SectionTitle
                        heading="Projects"
                        paragraph="Browse through my portfolio to explore a diverse range of projects that demonstrate my skills in web development. From interactive React applications to functional JavaScript projects and visually appealing HTML/CSS interfaces, you will find a showcase of my expertise in various web technologies."
                    />
                    <div className="">
                        <TabItem setSingleProject={setSingleProject}
                        />
                    </div>
                </div>
            </div>
            {
                singleProject && <ProjectModal projectData={singleProject} />
            }
        </>
    );
};

export default Projects;