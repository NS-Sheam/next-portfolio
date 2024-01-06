"use client"

import { handleDownloadResume } from "./utils";

const ResumeDownloadButton = ({ className, children }) => {

    return (
        <figure
            className={className}
            onClick={handleDownloadResume()}
        >

            {children}
        </figure>
    );
};

export default ResumeDownloadButton;