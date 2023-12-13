

import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 py-20 bg-gradient-to-r from-bandPrimary via-bandSecondary to-bandTernary text-white mx-auto space-y-4 ">
            <div className='text-center'>
                <h2 className='text-3xl font-bold'>Nazmus Sakib</h2>
                <div className='space-x-4'>
                    <Link className='hover:underline'>About</Link>
                    <Link to="https://drive.google.com/file/d/1XhOOmSn6iqDiaA-DNsgsBg3HS7YFNtfa/view?usp=drive_link" className='hover:underline'>Resume</Link>
                    <Link to="https://drive.google.com/file/d/1R7LXM_2AP6UaZMsIprypvUJhMB0MYUyS/view?usp=drive_link" className='hover:underline'>CV</Link>
                    <Link to="/contact" className='hover:underline'>Hire me</Link>
                </div>
                <p>Copyright © 2023 - All right reserved by Nazmus Sakib</p>
            </div>
            <div>
                <div className="flex justify-center gap-4 text-3xl my-4">
                    <Link className='transform transition-all duration-200 hover:text-4xl text-3xl hover:text-blue-400 hover:bg-white rounded-full' to="https://www.facebook.com/nazmus.sheam.sakib"><FaFacebook /></Link>
                    <Link className='transform transition-all duration-200 hover:text-4xl text-3xl hover:text-blue-800 hover:bg-white rounded-md' to="https://www.linkedin.com/in/nazmus-sakib-sheam"><FaLinkedin /></Link>
                    <Link className='transform transition-all duration-200 hover:text-4xl text-3xl hover:text-red-500 hover:bg-white rounded-lg' to="https://www.youtube.com/channel/UCdY7PHMDlimtznZZHBHlcHw"><FaYoutube /></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;