import Link from "next/link";
import {
    FaFacebook,
    FaFile,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaUser,
    FaYoutube,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <footer className="inner-container pt-10 pb-14 md:pb:6 md:pt-20 md:pb-2 bg-gradient-to-r from-bandPrimary via-bandSecondary to-bandTernary text-white mx-auto ">
                <div className="gap-14 md:grid grid-cols-5 space-y-6">
                    <div className="col-span-3 space-y-3">
                        <h2 className="text-5xl font-extrabold banner-name-font text-center lg:text-left ">
                            Get In Touch
                        </h2>
                        <p className="text-white md:w-4/5 text-justify lg:text-left ">
                            Connect with me! Whether you have a project in mind, want to
                            collaborate, or just say hello, I'd love to hear from you. Feel
                            free to reach out through the form below or connect with me on
                            social media. Let's turn ideas into reality and create something
                            amazing together!
                        </p>

                        <div className="social-buttons flex flex-wrap justify-center md:justify-start gap-2">
                            <Link
                                href="https://www.facebook.com/nazmus.sheam.sakib"
                                className="social-button social-button--facebook"
                                aria-label="Facebook"
                            >
                                <FaFacebook />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/nazmus-sakib-sheam"
                                className="social-button social-button--linkedin"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </Link>
                            <Link
                                href="https://www.github.com/NS-Sheam"
                                className="social-button social-button--github"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </Link>
                            <Link
                                href="https://www.instagram.com/nazmus_sakib_sheam/"
                                className="social-button social-button--instagram"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </Link>

                            <Link
                                href="https://www.youtube.com/channel/UCdY7PHMDlimtznZZHBHlcHw"
                                className="social-button social-button--youtube"
                                aria-label="Snapchat"
                            >
                                <FaYoutube />
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-2 gap-4 justify-center items-center">
                        <p className="bg-bandSecondary p-10 gradient-border border-2 justify-center items-center flex flex-col gap-2 h-44">
                            <Link
                                href="/contact"
                                className="social-button social-button--hire-me"
                                aria-label="Hire me"
                            >
                                <FaUser />
                            </Link>
                            <p className="text-white text-sm text-center font-extrabold">
                                Hire me
                            </p>
                        </p>
                        <p className="bg-bandSecondary p-10 gradient-border border-2 justify-center items-center flex flex-col gap-2 h-44">
                            <Link
                                href="https://drive.google.com/file/d/1XhOOmSn6iqDiaA-DNsgsBg3HS7YFNtfa/view?usp=drive_link"
                                className="social-button social-button--resume"
                                aria-label="Resume"
                            >
                                <FaFile />
                            </Link>
                            <p className="text-white text-sm text-center font-extrabold">
                                Download my resume
                            </p>
                        </p>
                    </div>
                </div>
                <p className="text-center py-4">
                    Copyright © 2023 - All right reserved by Nazmus Sakib
                </p>
            </footer>
        </>
    );
};

export default Footer;
