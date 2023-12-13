import Header from '@/components/Header/Header';
import HeaderBanner from '@/components/Home/HeaderBanner/HeaderBanner';
import HomeBlogs from '@/components/Home/HomeBlogs/HomeBlogs';
import Projects from '@/components/Home/Projects/Projects';
import Skills from '@/components/Home/Skills/Skills';
import LoadingComponent from '@/components/LoadingComponent';
import { Suspense } from 'react';
// import React, { Suspense } from 'react';
// import { Blocks } from 'react-loader-spinner';

const HomePage = () => {
    return (
        <div>
            {/* <Header /> */}
            <HeaderBanner />
            <Skills />
            <Suspense fallback={<LoadingComponent />}>
                <Projects />
            </Suspense>
            <HomeBlogs />
            {/* <Quotes /> */}
        </div >
    );
};

export default HomePage;