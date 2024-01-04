

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { FaFacebook, FaGithub, FaLinkedin, FaSnapchat, FaYoutube } from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 py-20 bg-gradient-to-r from-bandPrimary via-bandSecondary to-bandTernary text-white mx-auto space-y-4 ">
            <div className='text-center'>
                <h2 className='text-3xl font-bold'>Nazmus Sakib</h2>
                <div className='space-x-4'>
                    <Link href="/about" className='hover:underline'>About</Link>
                    <Link href="https://drive.google.com/file/d/1XhOOmSn6iqDiaA-DNsgsBg3HS7YFNtfa/view?usp=drive_link" className='hover:underline'>Resume</Link>
                    <Link href="https://drive.google.com/file/d/1R7LXM_2AP6UaZMsIprypvUJhMB0MYUyS/view?usp=drive_link" className='hover:underline'>CV</Link>
                    <Link href="/contact" className='hover:underline'>Hire me</Link>
                </div>
                <p>Copyright © 2023 - All right reserved by Nazmus Sakib</p>
            </div>
            <div>
                <div className="social-buttons">
                    <Link href="https://www.facebook.com/nazmus.sheam.sakib" className="social-button social-button--facebook" aria-label="Facebook">
                        <FaFacebook />
                    </Link>
                    <Link href="https://www.linkedin.com/in/nazmus-sakib-sheam" className="social-button social-button--linkedin" aria-label="LinkedIn">
                        <FaLinkedin />
                    </Link>
                    <Link href="https://www.youtube.com/channel/UCdY7PHMDlimtznZZHBHlcHw" className="social-button social-button--youtube" aria-label="Snapchat">
                        <FaYoutube />
                    </Link>
                    <Link href="https://www.github.com/NS-Sheam" className="social-button social-button--github" aria-label="GitHub">
                        <FaGithub />
                    </Link>

                </div>
            </div>

        </footer>
    );
};

export default Footer;