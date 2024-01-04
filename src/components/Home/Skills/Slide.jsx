"use client"
// import { useEffect, useState } from 'react';
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper core and required modules
// import SwiperCore from 'swiper'
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// import Image from 'next/image';
// import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';

// // Install Swiper modules
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Slide = () => {
    const [skills, setSkills] = useState([]); // Initialize skills as an array
    useEffect(() => {
        fetch("skill.json")
            .then(res => res.json())
            .then(skills => {
                setSkills(skills);
            });
    }, []);

    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 1024) {
                setSlidesPerView(3);
            } else if ((width >= 768)) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(1);
            }
        };
        handleResize(); // call the function once on mount
        window.addEventListener('resize', handleResize); // listen for resize events

        return () => window.removeEventListener('resize', handleResize); // remove the event listener on unmount
    }, []);

    // call the function once on mount
    const styles = {
        path: {
            stroke: '#ffd60a' // Green color
        },
        trail: {
            stroke: '#000814' // Grey color
        },
        text: {
            fill: '#ffffff', // White color
            fontSize: '1.5rem',
            fontWeight: "700",
        }
    };

    return (
        <div className='my-6'>
            {/* <Swiper
                spaceBetween={50}
                slidesPerView={slidesPerView}
                navigation={false}
                autoplay={{ delay: 3000 }}
            >
                {Array.isArray(skills) &&
                    skills.map(({ id, percentage, name, image }) => (
                        <SwiperSlide key={id}>
                            <div className='text-center relative w-3/4 lg:w-full mx-auto'>
                                <CircularProgressbar
                                    className='relative'
                                    styles={styles}
                                    value={percentage}
                                />
                                <Image className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4 ${name === "Express.js" || name === "Git" || name.includes("Bootstrap") ? "bg-white p-2 rounded-full" : ""}`} height={110} width={110} src={image} alt={name} />
                                <p className='text-xl lg:text-2xl text-white font-bold'>{name}</p>
                                <p className='text-xl lg:text-2xl text-bandYellow font-bold'>{percentage}%</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper> */}
        </div>
    );
};

export default Slide;
