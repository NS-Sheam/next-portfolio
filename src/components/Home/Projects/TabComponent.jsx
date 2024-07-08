
"use client"

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import SingleTabItem from "./SingleTabItem";
const TabComponent = ({
    htmlCssProjects,
    reactProjects,
    jsProjects,
    loading,
}) => {
    const buttonCss = `hover:scale-105 duration-150 border-2 border-white gradient-btn text-xs lg:text-xl font-bold px-2 lg:px-6 py-2 rounded-full text-white bg-gradient-to-r from-bandPrimary via-bandSecondary to-bandTernary`;
    return (
        <>
            <Tabs className=" mx-auto">
                <TabList className="border-none outline-none flex justify-center items-center flex-wrap ">
                    <Tab>
                        <p className={buttonCss}>ReactJS</p>
                    </Tab>
                    <Tab>
                        <p className={buttonCss}>Javascript</p>
                    </Tab>
                    <Tab>
                        <p className={buttonCss}>HTML & CSS</p>
                    </Tab>
                </TabList>
                <TabPanel className="mx-auto lg:my-8">
                    <SingleTabItem
                        projects={!loading && reactProjects}

                    />
                </TabPanel>
                <TabPanel className="mx-auto lg:my-8">
                    <SingleTabItem
                        projects={!loading && jsProjects}

                    />
                </TabPanel>
                <TabPanel className="mx-auto lg:my-8">
                    <SingleTabItem
                        projects={!loading && htmlCssProjects}

                    />
                </TabPanel>
            </Tabs>
        </>
    );
};

export default TabComponent;