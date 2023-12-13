"use client"
import { useEffect, useState } from 'react';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { AiOutlineHome, AiOutlineMail, AiOutlineProject } from 'react-icons/ai';
import { BiMoon, BiSun } from 'react-icons/bi';
import { SiAboutdotme } from 'react-icons/si';
import { LiaBlogSolid } from 'react-icons/lia';
import { motion } from "framer-motion";
import logo from "@/assets/images/ns-logo.png";
import { useGlovalContext } from '@/app/Provider/GlovalContext';
import Image from 'next/image';
import ActiveLink from '@/components/ActiveLink/ActiveLink';
import Link from 'next/link';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isHeaderFixed, setIsHeaderFixed] = useState(false);

    const { theme, setTheme } = useGlovalContext();

    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn)
        theme == "light" ? setTheme("dark") : setTheme("light")
    };

    const menuData = [
        {
            path: "/",
            name: "Home",
            icon: <AiOutlineHome />
        },
        {
            path: "/projects",
            name: "Projects",
            icon: <AiOutlineProject />
        },
        {
            path: "/blogs",
            name: "Blogs",
            icon: <LiaBlogSolid />
        },
        {
            path: "/about",
            name: "About",
            icon: <SiAboutdotme />
        },
        {
            path: "/contact",
            name: "Contact",
            icon: <AiOutlineMail />
        }
    ]

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;

            if (scrollPosition > 0) {
                setIsHeaderFixed(true);
            } else {
                setIsHeaderFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const floatingMenu = <div
        className={`${isHeaderFixed && `fixed bottom-2 md:bottom-auto md:left-2 w-full md:w-auto md:top-1/3 rounded-full bg-bandTernary z-50`}`}>
        <ul className={`header-list flex gap-6 ${isHeaderFixed && "flex-row md:flex-col p-3 text-2xl items-center justify-center"} ${theme == "light" ? "text-bandTernary" : "text-bandFont"}`}>


            {
                menuData.map(({ path, icon }, index) => <li key={index}>
                    <ActiveLink exact={path === "/"} href={path}>{isHeaderFixed && icon}</ ActiveLink>
                </li>)
            }
            <li onClick={toggleSwitch} className='text-bandYellow'>
                {isHeaderFixed && <p>{theme == "light" ? <BiMoon /> : <BiSun />}</p>}
            </li>

        </ul>
    </div>
    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    };
    return (
        <>
            {/* For dextop */}
            <section className={`${isHeaderFixed && "hidden"} hidden lg:flex justify-around items-center inner-container py-4`}>
                <div className='flex justify-center items-center gap-2'>
                    <Link href="/">
                        <Image className='w-24' src={logo} alt="logo" />
                    </Link>
                    <div className="switch dark-switch" data-isOn={isOn} onClick={toggleSwitch}>
                        <motion.div
                            className={theme === "light" ? "dark-handle" : "light-handle"}
                            layout
                            transition={spring}
                        />
                    </div>
                </div>
                <div className="">
                    <ul className='header-list flex gap-6 text-bandFont text-2xl font-bold'>
                        {
                            menuData.map(({ path, name }, index) =>
                                <li key={index} className='dextop-menu-btn'>
                                    <ActiveLink href={path}>{name}</ ActiveLink>
                                </li>
                            )
                        }

                    </ul>
                </div>
                <div>
                    <ActiveLink href="/contact">
                        <button className='font-semibold text-white bg-bandPrimary border-2 rounded-md py-2 px-3 hover:border-bandYellow hover:text-bandYellow text-2xl'>
                            Hire me
                        </button>
                    </ActiveLink>
                </div>
            </section>

            {/* For Mobile  */}
            <section className='lg:hidden my-container px-4 py-4 flex justify-between items-center'>
                <div className='flex justify-center items-center gap-2'>
                    <Link href="/">
                        <Image className='w-12' src={logo} alt="logo" />
                    </Link>
                    <div className="switch dark-switch" data-isOn={isOn} onClick={toggleSwitch}>
                        <motion.div className={theme == "light" ? "dark-handle" : "light-handle"} layout transition={spring} />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-end'>
                    <div>
                        {
                            isMenuOpen ?
                                <FontAwesomeIcon onClick={() => setIsMenuOpen(!isMenuOpen)} className={'text-2xl text-white font-extrabold'} icon={faXmark} /> :
                                <FontAwesomeIcon onClick={() => setIsMenuOpen(!isMenuOpen)} className={'text-2xl text-white font-extrabold'} icon={faBars} />

                        }
                    </div>
                    <div className={`sm-menu-item absolute transform duration-500 ${theme == "light" ? " bg-black bg-opacity-60" : "backdrop-blur-sm"} rounded-md border p-2 w-40 m-2 border-white z-30 ${isMenuOpen ? "top-10" : "-top-80"}`}>
                        <ul className={`header-list text-bandFont mb-2 text-xl flex flex-col items-center gap-2`}>
                            <li className=''>
                                <ActiveLink href="/">Home</ ActiveLink>
                            </li>
                            <hr className='w-full' />
                            <li className=''>
                                <ActiveLink href="/Projects">Projects</ ActiveLink>
                            </li>
                            <hr className='w-full' />
                            <li className=''>
                                <ActiveLink href="/blogs">Blogs</ ActiveLink>
                            </li>
                            <hr className='w-full' />
                            <li className=''>
                                <ActiveLink href="/about">About</ActiveLink>
                            </li>
                            <hr className='w-full' />
                            <li className=''>
                                <ActiveLink href="/contact">Contact</ActiveLink>
                            </li>
                            <hr className='w-full' />

                            <ActiveLink href="/contact" className="">
                                <button className='font-semibold bg-bandPrimary text-white border-2 py-2 px-2 hover:border-bandYellow hover:text-bandYellow rounded-md text-xl'>
                                    Hire me
                                </button>
                            </ActiveLink>
                        </ul>
                    </div>
                </div>
            </section>
            {floatingMenu}
        </>
    );
};

export default Header;