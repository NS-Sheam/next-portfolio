
import { useGlovalContext } from '@/app/Provider/GlovalContext';

const SectionTitle = ({ heading, paragraph, punchLine }) => {
    const { theme } = useGlovalContext();
    return (
        <div
            data-aos="zoom-in"
            data-aos-anchor="#example-anchor"
            data-aos-duration="1000"
            className='space-y-2'
        >
            <h1 className={` text-3xl lg:text-6xl font-bold mb-4 text-bandOrange text-center`}>{heading}</h1>
            <h2 className="text-xl md:text-3xl font-bold text-white text-center">
                {punchLine}
            </h2>
            <p className={`text-xl lg:text-xl lg:w-4/5 mx-auto text-white text-center`}>{paragraph}</p>
        </div>
    );
};

export default SectionTitle;