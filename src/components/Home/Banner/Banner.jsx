"use client";
import "./Banner.css";
// import myImg from "@/assets/images/my-img-3.jpg";
import myImg from "@/assets/images/my-image-3.jpg";
// import blurImageUrl from "@/assets/images/banner3.jpg";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Image from "next/image";
import { useState } from "react";
import { handleDownloadResume } from "@/components/utils";
import AnimatedButton from "@/components/buttons/AnimatedButton";
import { useRouter } from "next/navigation";

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  return (
    <>
      {/* for dextop  */}
      <section className="container mx-auto hidden inner-container min-h-[calc(100vh-20vh)] lg:flex justify-between items-center border-b border-white">
        <div
          data-aos="fade-right"
          data-aos-anchor="#example-anchor"
          data-aos-duration="500"
          className="w-1/2 space-y-4"
        >
          <h2 className="text-5xl font-light text-white">
            HI! I am{" "}
            <span className="font-semibold mb-2 banner-name-font text-6xl">
              Nazmus Sakib
            </span>
          </h2>
          <div className="w-full">
            <p className="text-white text-4xl text-scrollbar">
              I am a &nbsp;
              <span className="text-5xl font-bold py-2 ">
                Full Stack Developer
                <br />
                Backend Developer
                <br />
                Software Engineer
                <br />
                Javascript Developer
              </span>
              {/* <span className="text-5xl font-bold py-2 ">
                Software Engineer
                <br />
                Full Stack Developer
                <br />
                Javascript Enthusiast
                <br />
                Quick learner
              </span> */}
            </p>
          </div>
          <p className="text-white text-xl">
            {/* Building Tomorrow's Web Today – Where Imagination Meets Innovation
            in Full Stack, Backend, and React Development. */}
            I work with the latest technologies to build web applications that are fast, responsive, and user-friendly.  I am passionate about learning new technologies and building innovative solutions.

          </p>
          <div className="my-8">
            <button
              onClick={handleDownloadResume}
              className="text-white uppercase font-bold flex items-center gap-2 gradient-btn py-2 px-3 rounded-full border-2 border-white"
            >
              Download Resume <AiOutlineCloudDownload />
            </button>
          </div>
        </div>
        <div
          className="relative w-[25rem] h-[25rem]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-duration="500"
            // className='wavecontainer banner-img '
            className="img-container-dark banner-img h-[20rem] w-[20rem]  "
          >
            <Image
              blurDataURL="../../../assets/images/banner3.jpg"
              placeholder="blur"
              // onLoad={(e) => console.log(e.target.naturalWidth)}
              src={myImg}
              alt="image"
              className=" mx-auto hover:scale-105 duration-300 shadow-lg"
            />


            <div
              className={`absolute h-full w-full ${isHovered ? "flex" : "hidden"
                } justify-center items-center bg-opacity-50 bg-black top-0 right-0`}
            >
              <AnimatedButton
                onClick={() => router.push("/contact")}
                className={`text-bandTernary p-4 font-bold`}
              >
                HIRE ME
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>
      {/* For Mobile  */}
      <section className="inner-container px-4 lg:hidden py-8 z-10 border-b border-white ">
        <div className="mx-auto">
          <div
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-duration="500"
            className="wavecontainer w-32 h-32 bg-transparent mx-auto"
          >
            <Image src={myImg} alt="" />
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor="#example-anchor"
          data-aos-duration="500"
          className="my-8"
        >
          <h2 className="text-xs font-semibold text-bandYellow tracking-widest banner-img rounded-md px-4 py-2 mb-2 w-3/4 mx-auto text-center">
            Welcome to my portfolio
          </h2>
          <h2 className="text-xl font-light text-white text-center">
            HI! I am &nbsp;
            <span className="font-bold text-white banner-name-font text-center tracking-wider text-2xl">
              Nazmus Sakib
            </span>
          </h2>

          <p className="text-white text-2xl  text-center">I am a &nbsp;</p>
          <p className="text-scrollbar text-white text-2xl text-center">
            <span className=" font-bold py-2 block w-full">
              Full Stack Developer
              <br />
              Backend Developer
              <br />
              Software Engineer
              <br />
              Javascript Developer
            </span>
            {/* <span className=" font-bold py-2 block w-full">
              Software Engineer
              <br />
              Full Stack Developer
              <br />
              Javascript Enthusiast
              <br />
              Quick learner
            </span> */}
          </p>
          <p className="text-white text-center py-2">
            Building Tomorrow's Web Today – Where Imagination Meets Innovation
            in Full Stack, Backend, and React Development.
          </p>
        </div>
      </section>
    </>
  );
};

export default Banner;
