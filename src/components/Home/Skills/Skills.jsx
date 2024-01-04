
import Slide from './Slide';
import Marquee from "react-fast-marquee";
import skillImg1 from "../../../assets/images/skill-icon/html.png"
import skillImg2 from "../../../assets/images/skill-icon/css-3.png"
import skillImg3 from "../../../assets/images/skill-icon/js.png"
import skillImg4 from "../../../assets/images/skill-icon/bootstrap.png"
import skillImg5 from "../../../assets/images/skill-icon/tailwind.png"
import skillImg6 from "../../../assets/images/skill-icon/react.png"
import skillImg7 from "../../../assets/images/skill-icon/node-js.png"
import skillImg8 from "../../../assets/images/skill-icon/express.png"
import skillImg9 from "../../../assets/images/skill-icon/mongodb.png"
import Image from 'next/image';


const Skills = () => {
    const skills = [skillImg1, skillImg2, skillImg3, skillImg4, skillImg5, skillImg6, skillImg7, skillImg8, skillImg9]
    return (
        <section className='relative bg-gradient-to-tr from-bandPrimary to-bandSecondary inner-container lg:min-h-screen py-4 lg:py-6 z-20'>
            <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000"
                data-aos-offset="100"
                className={`w-full lg:w-4/5 mx-auto text-center p-4 lg:p-8 -mt-16 lg:-mt-20 bg-bandTernary z-40 rounded-2xl space-y-4 lg:space-y-6`}>
                <h1 className='text-white text-3xl lg:text-5xl italic font-bold mb-4'>Skills</h1>
                <Marquee
                    autoFill={true} className='rounded-3xl'>
                    {skills?.map((skill, i) => <div className='w-12 h-12 lg:w-20 lg:h-20 flex justify-center items-center mx-4 ' key={i}>
                        <Image className={`${skill == skillImg8 ? "rounded-2xl bg-white" : ""}`} src={skill} alt="" />
                    </div>)}
                </Marquee>
                <p className='text-white text-justify lg:text-center lg:text-xl mb-4 w-3/4 mx-auto'>Check out my extensive list of skills to get a comprehensive understanding of my expertise and capabilities. From front-end development to back-end programming, UI/UX design, database management, and more, my skills cover a wide range of areas in web development. Explore the skills section to see how my technical proficiencies align with your project requirements and discover the value I can bring to your team. </p>
                <div className="skills">
                    <Slide />
                </div>
            </div>
        </section>
    );
};

export default Skills;
