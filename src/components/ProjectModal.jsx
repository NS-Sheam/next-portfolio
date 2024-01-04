

import { RxOpenInNewWindow } from 'react-icons/rx';
import { AiFillGithub } from 'react-icons/ai';
import { FiLink } from 'react-icons/fi';
import Image from "next/image";
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLink, FaWindowClose } from 'react-icons/fa';


const imageLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}


const ProjectModal = ({ projectData }) => {
    console.log(projectData);
    const { projectName, technology, description, liveSite, image, clientSite, serverSite } = projectData;
    console.log(clientSite, liveSite);

    return (
        <div>
            {/* The button to open modal */}

            <dialog id="my_modal_4" className="modal w-11/12 max-w-5xl bg-bandSecondary p-4">
                <form method="dialog" className="modal-box ">
                    <div className="modal-action">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10 w-full">
                            <div className="md:w-1/2 rounded-lg">

                                <Image
                                    blurDataURL='../assets/images/banner3.jpg'
                                    placeholder='blur' height={700} width={700} layout='responsive' className="rounded-lg" src={image} alt="" />

                            </div>
                            <div className="md:w-1/2 space-y-2">
                                <h1 className="text-xl lg:text-3xl text-bandYellow font-bold text-center">{projectName}</h1>
                                <h3 className="text-base lg:text-2xl font-bold text-bandYellow">Description: </h3>
                                <ul className="text-white text-sm lg:text-base list-disc">
                                    {
                                        description?.map((d, i) => <li key={i}>
                                            {d}
                                        </li>)
                                    }
                                </ul>
                                <h3 className="text-xl lg:text-2xl font-bold text-bandYellow">Technologies: </h3>
                                <ul className="text-white text-base list-disc z-10">
                                    {
                                        technology?.map((tec, i) => <li key={i}>
                                            {tec}
                                        </li>)
                                    }
                                </ul>

                                <div className="social-buttons flex items-center justify-start gap-6 z-20">
                                    <a href={liveSite} className="social-button social-button--instagram " aria-label="Instagram">
                                        <RxOpenInNewWindow />
                                    </a>
                                    <a href={clientSite} className="social-button social-button--github" aria-label="GitHub">
                                        <FaGithub />
                                    </a>

                                    {
                                        serverSite && <a href={serverSite} className="social-button social-button--hire-me" aria-label="Server Site">
                                            <FaLink />
                                        </a>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn text-white bg-pink-600 hover:scale-110 duration-200 font-extrabold btn-sm btn-circle btn-ghost absolute right-2 top-2  hover:bg-warning border-none rounded-full w-8 h-8">✕</button>
                </form>
            </dialog>
        </div >
    );
};

export default ProjectModal;