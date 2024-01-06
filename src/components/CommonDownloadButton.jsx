"use client"

const CommonDownloadButton = ({ downloadFn, className, children }) => {

    return (
        <figure
            className={className}
            onClick={downloadFn}
        >

            {children}
        </figure>
    );
};

export default CommonDownloadButton;