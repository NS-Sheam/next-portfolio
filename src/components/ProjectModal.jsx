

import { RxOpenInNewWindow } from 'react-icons/rx';
import { AiFillGithub } from 'react-icons/ai';
import { FiLink } from 'react-icons/fi';
import Image from "next/image";
import Link from 'next/link';

const imageLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}


const ProjectModal = ({ projectData }) => {
    const { projectName, technology, description, liveSite, image, clientSite, serverSite } = projectData;
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
                                <ul className="text-white text-base list-disc">
                                    {
                                        technology?.map((tec, i) => <li key={i}>
                                            {tec}
                                        </li>)
                                    }
                                </ul>
                                <div className="flex items-center gap-3 h-8 text-bandYellow">
                                    <Link className="transform transition-all duration-200 hover:text-4xl text-2xl" href={liveSite}>
                                        <RxOpenInNewWindow />
                                    </Link>
                                    <Link className="transform transition-all duration-200  hover:text-4xl text-2xl" href={clientSite}>
                                        <AiFillGithub />
                                    </Link>
                                    {
                                        serverSite && <Link className="transform transition-all duration-200 hover:text-4xl text-2xl" href={serverSite}>
                                            <FiLink />
                                        </Link>
                                    }
                                </div>
                            </div>
                        </div>
                        {/* if there is a button, it will close the modal */}
                    </div>
                    <button className="btn text-black btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-white hover:bg-warning border-none rounded-full w-8 h-8">✕</button>
                </form>
            </dialog>
        </div>
    );
};

export default ProjectModal;