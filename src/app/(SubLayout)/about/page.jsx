


import Link from "next/link";
import myImg from "@/assets/images/my-img.jpg";
import {
  FaFile,
  FaGithub,
  FaLinkedin,
  FaUser,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import CircularText from "@/components/CurcularText/CircularText";
import { generateMetaDatas } from "@/components/utils";
import ResumeDownloadButton from "@/components/ResumeDownloadButton";



export const metadata = await generateMetaDatas(
  "About",
  "I am a Full Stack Developer, Backend Developer, React Specialist, Javascript Developer. Building Tomorrow's Web Today – Where Imagination Meets Innovation in Full Stack, Backend, and React Development.",
  null,
  "about",

)


const About = () => {

  const mySkills = {
    Expertise: [
      "HTML5",
      "CSS3",
      "JavaScript ES6",
      "React.js",
      "Tailwind",
      "Bootstrap",
      "React Bootstrap",
      "DaisiUI",
      "Flowbite",
      "Relationship Building",
      "Team Collaboration",
    ],
    Comfortable: [
      "Communication & Networking",
      "Career Counseling",
      "Mentoring & Guidance",
      "Project Management",
      "Express and Node.js",
      "Rest API",
      "Devtool and Debugging",
      "MongoDB",
      "JWT",
      "React Hook Form",
    ],
    Familiar: ["Git", "Adobe Photoshop", "Adobe Illustrator"],
    Tools: [
      "GitHub",
      "Visual Studio Code",
      "Firebase",
      "React Router",
      "Netlify",
      "Surge",
      "Vercel",
      "Dotenv",
      "Figma",
      "Chrome Dev Tools",
      "Canva",
    ],
  };

  return (
    <section className="bg-bandTernary inner-container py-8 lg:pb-16 lg:pt-0 ">
      <h1 className="font-extrabold banner-name-font text-6xl text-center">
        About me!
      </h1>
      <div className="py-5 space-y-4 flex flex-col md:flex-row items-start justify-between">
        <div
          data-aos="fade-right"
          data-aos-anchor="#example-anchor"
          data-aos-duration="1000"
          className="text-white p-6 rounded-lg w-full md:w-1/2 space-y-2"
        >
          <div className="flex justify-center items-center">
            <CircularText
              text="- Welcome - to - the - sky -"
              degree={13}
              circleSize="250px"
              logoSize={"180px"}
              logoUrl={myImg}
              origin="125px"
              textClass="text-3xl font-bold text-bandYellow uppercase "
              filter="brightness(1.2) contrast(1.2)"
              animationSpeed="9s"
            />
          </div>
          <p className="text-center text-2xl md:text-4xl  col-span-2 font-extrabold italic uppercase banner-name-font">
            MD. Nazmus Sakib Sheam
          </p>
          <p className="text-xl">
            Age: <span className="font-extrabold">23 Years</span>
          </p>
          <p className="text-xl">
            Position:{" "}
            <span className="font-extrabold">Full Stack Developer</span>
          </p>
          <p className="text-xl">
            Phone: <span className="font-extrabold">+880 1875 828625</span>
          </p>
          <p className="text-xl">
            Email:{" "}
            <Link
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRrczpmTQKXrTlKQBjkcbbcgzPHsLcgxwGNDRlXksLJrNndxkkZcNNNXtZkwzmLJZdLcxM"
              className="font-extrabold"
            >
              123sheamfeni@gmail.com
            </Link>
          </p>
          <p className="text-xl">
            Address: <span className="font-extrabold">Dhaka, Bangladesh</span>
          </p>
          <p className="text-xl">
            Nationality: <span className="font-extrabold">Bangladeshi</span>
          </p>
          <p className="text-xl">
            Religion: <span className="font-extrabold">Islam</span>
          </p>
          <p className="text-xl">
            Marital Status: <span className="font-extrabold">Unmarried</span>
          </p>
          <div className="col-span-2 space-y-2">
            <p className="text-2xl md:text-4xl font-extrabold">Skills:</p>
            <hr />

            <div className="grid grid-cols-2 gap-4">
              {Object.keys(mySkills).map((skill, index) => {
                return (
                  <div key={index}>
                    <h2 className="text-xl md:text-3xl font-bold ">{skill}:</h2>

                    <ul className=" pl-4">
                      {mySkills[skill].map((item, index) => {
                        return (
                          <li
                            className="text-bandYellow text-sm md:text-base md:font-bold"
                            key={index}
                          >
                            <FiArrowUpRight className="text-xs inline text-bandYellow" />{" "}
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-duration="1000"
          className={`grid grid-cols-2 items-center md:text-xl text-white space-y-3 w-full md:w-1/2 text-left`}
        >
          <ul className="col-span-2 space-y-2">
            <p className="text-2xl md:text-4xl font-extrabold">Experience</p>
            <hr />
            <li>
              Jun 2023 – Oct 2023 | MERN Stack Developer Intern, Fastbooks
            </li>
            <li>Oct 2020 – Jul 2021 | IT Incharge, The Daily Provat Alo</li>
          </ul>
          <ul className="col-span-2 space-y-2">
            <hr />
            <p className="text-2xl md:text-4xl font-extrabold">Education</p>
            <li>Green University of Bangladesh, B.Sc in CSE</li>
          </ul>
          <ul className="col-span-2 space-y-2">
            <p className="text-2xl md:text-4xl font-extrabold">
              {" "}
              Achievement/Courses/Certificates
            </p>
            <hr />
            <li>
              Jun 2023 – Oct 2023 | Fastbooks | MERN Stack Development
              Internship
            </li>
            <li>
              Dec 2022 – June 2023 | Programming Hero | Complete Web Development
              Course With Jhankar Mahbub (batch-7)
            </li>
            <li>
              Feb 2020 – May 2020 | Atova Technology | MikroTik Routing &
              Security
            </li>
            <li>
              Jan 2018 – May 2018 | Computer Village & Multimedia | Microsoft
              Office Management
            </li>
          </ul>
          <ul className="col-span-2 space-y-2">
            <p className="text-2xl md:text-4xl font-extrabold">Hobbies and Interests</p>
            <hr />
            <li>Learning unknown programming languages</li>
            <li>Watching movies</li>
          </ul>

          <div className="col-span-2 space-y-2">
            <p className="text-2xl md:text-4xl font-extrabold">Languages:</p>
            <hr />
            <p>Bengali, English, Hindi</p>
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-4 justify-center items-center">
            <p className="bg-bandSecondary p-10 gradient-border border-2 justify-center items-center flex flex-col gap-2 h-44">
              <Link
                href="https://www.linkedin.com/in/nazmus-sakib-sheam"
                className="social-button social-button--linkedin"
              >
                <FaLinkedin />
              </Link>
              <p className="text-white text-sm text-center font-extrabold">
                Connect with Linkedin
              </p>
            </p>
            <p className="bg-bandSecondary p-10 gradient-border border-2 justify-center items-center flex flex-col gap-2 h-44">
              <Link
                href="https://www.github.com/NS-Sheam"
                className="social-button social-button--github"
              >
                <FaGithub />
              </Link>
              <p className="text-white text-sm text-center font-extrabold">
                Explore my Github
              </p>
            </p>
            <p className="bg-bandSecondary p-10 gradient-border border-2 justify-center items-center flex flex-col gap-2 h-44">
              <Link
                href=""
                className="social-button social-button--hire-me"
              >
                <FaUser />
              </Link>
              <p className="text-white text-sm text-center font-extrabold">
                Hire me
              </p>
            </p>
            <p className="bg-bandSecondary p-10 gradient-border border-2 justify-center items-center flex flex-col gap-2 h-44">
              <ResumeDownloadButton
                className="social-button social-button--resume"
              >
                <FaFile />
              </ResumeDownloadButton>
              <p className="text-white text-sm text-center font-extrabold">
                Download my resume
              </p>
            </p>
          </div>
        </div>
      </div>
    </section >
  );
};

export default About;
