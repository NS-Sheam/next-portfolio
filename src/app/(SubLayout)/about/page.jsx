import Link from "next/link";
import myImg from "@/assets/images/my-img.jpg";
import { FaFile, FaGithub, FaLinkedin, FaUser } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import CircularText from "@/components/CurcularText/CircularText";
import { generateMetaDatas } from "@/components/utils";
import ResumeDownloadButton from "@/components/ResumeDownloadButton";
import { getAllSkills } from "@/services/actions/skills";
import { getAllExperiences } from "@/services/actions/experience";
import { getAllEducations } from "@/services/actions/education";
import { getAllHobbiesAndInterest } from "@/services/actions/hobbiesAndInterest";
import { getAllAchievement } from "@/services/actions/achievement";
import { formatDate } from "@/components/utils/formateDate";


export const metadata = await generateMetaDatas(
  "About",
  "I am a Full Stack Developer, Backend Developer, React Specialist, Javascript Developer. Building Tomorrow's Web Today – Where Imagination Meets Innovation in Full Stack, Backend, and React Development.",
  null,
  "about",
  null
);

const About = async () => {
  const {
    familiarSkills,
    comfortableSkills,
    expertiseSkills,
    tools,
    loading: isSkillsLoading,
  } = await getAllSkills();
  const { experiences, loading: isExperienceLoading } = await getAllExperiences();
  const { educations, loading: isEducationLoading } = await getAllEducations();
  const { hobbiesAndInterests, loading: isHobbiesAndInterestsLoading } = await getAllHobbiesAndInterest();
  const { achievements, loading: isAchievementsLoading } = await getAllAchievement();
  const mySkills = {
    Expertise: expertiseSkills?.map((skill) => skill.name),
    Comfortable: comfortableSkills?.map((skill) => skill.name),
    Familiar: familiarSkills?.map((skill) => skill.name),
    Tools: tools.map((skill) => skill.name),
  };
  if (isSkillsLoading || isExperienceLoading || isEducationLoading || isHobbiesAndInterestsLoading || isAchievementsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-bandTernary py-8 lg:pb-16 lg:pt-0">
      <div className="container mx-auto inner-container">
        <h1 className="font-extrabold banner-name-font text-6xl text-center">
          About me!
        </h1>
        <div
          data-aos="fade-right"
          data-aos-anchor="#example-anchor"
          data-aos-duration="1000"
          className="text-white p-6 rounded-lg grid grid-cols-1 md:grid-cols-3"
        >
          <div className="flex justify-center items-center col-span-1">
            <CircularText
              text="- Welcome - to - the - portfolio -"
              degree={13}
              circleSize="250px"
              logoSize={"180px"}
              logoUrl={myImg}
              origin="125px"
              textClass="text-3xl font-bold text-bandYellow uppercase"
              filter="brightness(1.2) contrast(1.2)"
              animationSpeed="9s"
            />
          </div>
          <div className="col-span-2 text-xl md:text-xl md:grid grid-cols-2">
            <p className="text-2xl md:text-4xl col-span-2 font-extrabold italic uppercase banner-name-font">
              MD. Nazmus Sakib Sheam
            </p>
            <p >
              Age: <span className="font-extrabold">23 Years</span>
            </p>
            <p >
              Position: <span className="font-extrabold">Full Stack Developer</span>
            </p>
            <p >
              Phone: <span className="font-extrabold">+880 1875 828625</span>
            </p>
            <p >
              Email:{" "}
              <Link
                href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRrczpmTQKXrTlKQBjkcbbcgzPHsLcgxwGNDRlXksLJrNndxkkZcNNNXtZkwzmLJZdLcxM"
                className="font-extrabold"
              >
                123sheamfeni@gmail.com
              </Link>
            </p>
            <p >
              Address: <span className="font-extrabold">Dhaka, Bangladesh</span>
            </p>
            <p >
              Nationality: <span className="font-extrabold">Bangladeshi</span>
            </p>
            <p >
              Religion: <span className="font-extrabold">Islam</span>
            </p>
            <p >
              Marital Status: <span className="font-extrabold">Unmarried</span>
            </p>
          </div>
        </div>
        <div className="col-span-2 space-y-2">
          <p className="text-2xl md:text-4xl font-extrabold">Skills:</p>
          <hr />
          <div className="grid grid-cols-2 gap-4">
            {Object.keys(mySkills)?.map((category, index) => (
              <div key={index}>
                <h2 className="text-xl md:text-3xl font-bold ">{category}:</h2>
                <ul className="pl-4">
                  {mySkills[category]?.map((skill, idx) => (
                    <li
                      className="text-bandYellow text-sm md:text-base md:font-bold"
                      key={idx}
                    >
                      <FiArrowUpRight className="text-xs inline text-bandYellow" />{" "}
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-duration="1000"
          className=" md:text-xl text-white space-y-3 "
        >
          <div>
            <p className="text-2xl md:text-4xl font-extrabold">Experience</p>
            <hr />
            <ul className="space-y-2">
              {experiences?.map((experience, index) => (
                <li key={index}>
                  {`${formatDate(experience.startDate)} - ${experience.endDate
                    ? formatDate(experience.endDate)
                    : experience.isCurrent
                      ? "Present"
                      : ""
                    } | ${experience.designation}, ${experience.company}`}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-2xl md:text-4xl font-extrabold">Education</p>
            <hr />
            <ul className="space-y-2">
              {educations?.map((education, index) => (
                <li key={index}>
                  {`${formatDate(education.startDate)} - ${education.endDate
                    ? formatDate(education.endDate)
                    : education.isCurrent
                      ? "Present"
                      : ""
                    } | ${education.degree} in ${education.institution}`}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-2xl md:text-4xl font-extrabold">
              Achievements/Courses/Certificates
            </p>
            <hr />
            <ul className="space-y-2">
              {achievements?.map((achievement, index) => (
                <li key={index}>
                  {`${achievement.date ? formatDate(achievement.date) + " | " : ""}${achievement.title
                    }, ${achievement.organization}`}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-2xl md:text-4xl font-extrabold">Hobbies and Interests</p>
            <hr />
            <ul className="space-y-2">
              {hobbiesAndInterests?.map((hobby, index) => (
                <li key={index}>
                  {`${hobby.passionLevel ? hobby.passionLevel + " | " : ""}${hobby.name}`}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-2xl md:text-4xl font-extrabold">Languages:</p>
            <hr />
            <p>Bengali, English, Hindi</p>
          </div>
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="bg-bandSecondary p-10 gradient-border border-2 justify-center items-center flex flex-col gap-2 h-44">
              <Link
                href="https://www.linkedin.com/in/nazmus-sakib-sheam"
                className="social-button social-button--linkedin"
              >
                <FaLinkedin />
              </Link>
              <p className="text-white text-sm text-center font-extrabold">
                Connect via Linkedin
              </p>
            </div>
            <div className="bg-bandSecondary p-10 gradient-border border-2 justify-center items-center flex flex-col gap-2 h-44">
              <Link
                href="https://www.github.com/NS-Sheam"
                className="social-button social-button--github"
              >
                <FaGithub />
              </Link>
              <p className="text-white text-sm text-center font-extrabold">
                Explore my Github
              </p>
            </div>
            <div className="bg-bandSecondary p-10 gradient-border border-2 justify-center items-center flex flex-col gap-2 h-44">
              <Link
                href=""
                className="social-button social-button--hire-me"
              >
                <FaUser />
              </Link>
              <p className="text-white text-sm text-center font-extrabold">
                Hire me
              </p>
            </div>
            <div className="bg-bandSecondary p-10 gradient-border border-2 justify-center items-center flex flex-col gap-2 h-44">
              <ResumeDownloadButton
                className="social-button social-button--resume"
              >
                <FaFile />
              </ResumeDownloadButton>
              <p className="text-white text-sm text-center font-extrabold">
                Download my resume
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;