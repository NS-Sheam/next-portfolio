
"use client"
import "./Banner.css"
import myImg from "@/assets/images/my-img.jpg"
import { AiOutlineCloudDownload } from 'react-icons/ai';
import Image from "next/image";
import TypedComponent from "@/components/Typed";
const Banner = () => {

    const handleDownloadResume = () => {
        const url = "https://drive.google.com/u/0/uc?id=1XhOOmSn6iqDiaA-DNsgsBg3HS7YFNtfa&export=download";
        const fileName = "Nazmus-Sakib-Resume"
        const link = document.createElement('a');
        link.href = url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.download = fileName;
        link.click();
    };

    return (
        <>
            {/* for dextop  */}
            <section className='min-h-screen hidden inner-container lg:flex justify-around items-center'>
                <div
                    data-aos="fade-right"
                    data-aos-anchor="#example-anchor"
                    data-aos-duration="500"
                    className='w-1/2 space-y-6'
                >
                    <h2 className='text-xl font-semibold tracking-widest text-bandYellow border-bandYellow rounded-md px-4 py-2 mb-2 w-3/4 banner-img'>Welcome to my portfolio</h2>
                    <h2 className='text-5xl font-light text-white italic'>HI! I am <span className='font-semibold mb-2 banner-name-font'>Nazmus Sakib</span></h2>
                    <div className='w-full'>
                        <p className='text-white text-4xl'>I am a</p>
                        <p
                            data-aos="fade-up"
                            data-aos-anchor="#example-anchor"
                            data-aos-duration="500"
                            className='ms-6 text-5xl font-bold font-gradient underline banner-text-underline'>

                            <TypedComponent />
                        </p>
                    </div>
                    <div className="my-8">
                        <button onClick={handleDownloadResume} className="text-white uppercase font-bold flex items-center gap-2 gradient-btn py-2 px-3 rounded-full border-2 border-white">Download Resume <AiOutlineCloudDownload /></button>
                    </div>
                </div>
                <div className=''>
                    <div
                        data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-duration="500"
                        className='wavecontainer banner-img '
                    >
                        <Image className='w-[30rem] h-[30rem]'
                            src={myImg} alt="" />
                    </div>
                </div>
            </section>
            {/* For Mobile  */}
            <section className='inner-container px-4 lg:hidden py-16'>
                <div
                    data-aos="fade-right"
                    data-aos-anchor="#example-anchor"
                    data-aos-duration="500"
                    className='mb-8'>
                    <h2 className='text-xs font-semibold text-bandYellow tracking-widest banner-img rounded-md px-4 py-2 mb-2 w-3/4'>Welcome to my portfolio</h2>
                    <h2 className='text-[2rem] font-light text-white'>HI! I am <span className='font-semibold mb-2 text-white banner-name-font'>Nazmus Sakib</span></h2>
                    <div className='w-full flex justify-start items-start'>
                        <p className='font-light text-xl mb-2 text-white'>I am a</p>

                        <TypedComponent />

                    </div>
                    <div className="mb-8 mt-4">
                        <button onClick={handleDownloadResume} className="text-white uppercase font-bold flex items-center gap-2 bg-gradient-to-r from-bandPrimary via-bandSecondary to-bandTernary hover:from-bandTernary hover:to-bandPrimary py-2 px-3 rounded-full border-2 border-white">Download Resume <AiOutlineCloudDownload /></button>
                    </div>
                </div>
                <div className='mx-auto'>
                    <div
                        data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-duration="500"
                        className='wavecontainer banner-img bg-transparent mx-auto'
                    >
                        <Image className='w-84 h-84'
                            src={myImg} alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;