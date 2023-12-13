
import { useGlovalContext } from '@/app/Provider/GlovalContext';

const SectionTitle = ({ heading, paragraph }) => {
    const { theme } = useGlovalContext();
    return (
        <div
            data-aos="zoom-in"
            data-aos-anchor="#example-anchor"
            data-aos-duration="1000"
        >
            <h1 className={`${theme == "light" ? "text-bandPrimary" : "text-white"} text-3xl lg:text-5xl italic font-bold mb-4`}>{heading}</h1>
            <p className={`${theme == "light" ? "text-bandSecondary" : "text-white"} lg:text-xl text-justify lg:text-center mb-4 w-3/4 mx-auto`}>{paragraph}</p>
        </div>
    );
};

export default SectionTitle;