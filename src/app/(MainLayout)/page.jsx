
import HeaderBanner from '@/components/Home/HeaderBanner/HeaderBanner';
import HomeBlogs from '@/components/Home/HomeBlogs/HomeBlogs';
import MyServices from '@/components/Home/MyServices/MyServices';
import Projects from '@/components/Home/Projects/Projects';
import Skills from '@/components/Home/Skills/Skills';
import Technology from '@/components/Home/Technology/Technology';
import LoadingComponent from '@/components/LoadingComponent';
import { Suspense } from 'react';
// import React, { Suspense } from 'react';
// import { Blocks } from 'react-loader-spinner';

const HomePage = () => {
    return (
        <div>

            <HeaderBanner />
            {/* <Skills /> */}
            <Technology />
            <Suspense fallback={<LoadingComponent />}>
                <Projects />
            </Suspense>
            {/* <HomeBlogs />
            <MyServices /> */}
            {/* <Quotes /> */}
        </div >
    );
};

export default HomePage;