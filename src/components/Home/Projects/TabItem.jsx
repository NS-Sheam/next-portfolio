
"use client"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import SingleTabItem from "./SingleTabItem";
import { useEffect, useState } from "react";

const TabItem = ({ setSingleProject }) => {
    const [reactProjects, setReactProjects] = useState([]);
    const [jsProjects, setJsProjects] = useState([]);
    const [htmlCssProjects, setHtmlCssProjects] = useState([]);
    useEffect(() => {
        fetch("projectData.json")
            .then(res => res.json())
            .then(projects => {
                // console.log(projects);
                // Filter projects made with React
                const reactProject = projects.filter(project => project.madeWith.includes('React'));
                setReactProjects(reactProject)
                // Filter projects made with JavaScript
                const javascriptProject = projects.filter(project => project.madeWith.includes('JavaScript'));
                setJsProjects(javascriptProject)
                // Filter projects made with HTML/CSS
                const htmlCssProject = projects.filter(project => project.madeWith.includes('HTML') && project.madeWith.includes('CSS'));
                setHtmlCssProjects(htmlCssProject);

            })
    }, [])
    const buttonCss = `hover:scale-105 duration-150 border-2 border-white gradient-btn text-xs lg:text-xl font-bold px-2 lg:px-6 py-2 rounded-full text-white bg-gradient-to-r from-bandPrimary via-bandSecondary to-bandTernary`
    return (
        <>
            <Tabs className=" mx-auto">
                <TabList className="border-none outline-none flex justify-center items-center flex-wrap ">
                    <Tab><p className={buttonCss}>ReactJS</p></Tab>
                    <Tab><p className={buttonCss}>Javascript</p></Tab>
                    <Tab><p className={buttonCss}>HTML & CSS</p></Tab>
                </TabList>
                <TabPanel className="mx-auto lg:my-8">
                    <SingleTabItem
                        projects={reactProjects}
                        setSingleProject={setSingleProject}
                    />
                </TabPanel>
                <TabPanel className="mx-auto lg:my-8">
                    <SingleTabItem
                        projects={jsProjects}
                        setSingleProject={setSingleProject}
                    />
                </TabPanel>
                <TabPanel className="mx-auto lg:my-8">
                    <SingleTabItem
                        projects={htmlCssProjects}
                        setSingleProject={setSingleProject}
                    />
                </TabPanel>
            </Tabs>
        </>
    );
};

export default TabItem;