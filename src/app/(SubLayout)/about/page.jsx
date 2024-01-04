"use client"
import Link from "next/link";


const About = () => {
    const handleDownloadResume = () => {
        window.open("https://drive.google.com/u/0/uc?id=1XhOOmSn6iqDiaA-DNsgsBg3HS7YFNtfa&export=download");
    };
    const handleDownloadCv = () => {
        window.open("https://drive.google.com/u/0/uc?id=1R7LXM_2AP6UaZMsIprypvUJhMB0MYUyS&export=download");
    };
    return (
        <section className="bg-bandTernary inner-container py-8 lg:py-14">
            <h1 className="font-extrabold banner-name-font text-6xl text-center">About me!</h1>
            <div className="py-5 md:py-8 space-y-4 flex flex-col md:flex-row-reverse bg-bandSecondary items-center justify-between">
                <div
                    data-aos="fade-right"
                    data-aos-anchor="#example-anchor"
                    data-aos-duration="1000"
                    className={`grid grid-cols-2 items-center md:text-xl text-white space-y-3 w-full md:w-1/2 text-center md:text-left`}>
                    <p className="text-center text-4xl col-span-2 font-extrabold uppercase text-green-500">MD. Nazmus Sakib Sheam</p>
                    <p className="text-xl">Age: <span className="font-extrabold">23 Years</span></p>
                    <p className="text-xl">Position: <span className="font-extrabold">Full Stack Developer</span></p>
                    <p className="text-xl">Phone: <span className="font-extrabold">+880 1875 828625</span></p>
                    <p className="text-xl">Email: <Link href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRrczpmTQKXrTlKQBjkcbbcgzPHsLcgxwGNDRlXksLJrNndxkkZcNNNXtZkwzmLJZdLcxM" className="font-extrabold text-green-500">123sheamfeni@gmail.com</Link></p>
                    <p className="text-xl">Address: <span className="font-extrabold">Dhaka, Bangladesh</span></p>
                    <p className="text-xl">Nationality: <span className="font-extrabold">Bangladeshi</span></p>
                    <p className="text-xl">Religion: <span className="font-extrabold">Islam</span></p>
                    <p className="text-xl">Marital Status: <span className="font-extrabold">Unmarried</span></p>
                    <ul className="col-span-2 space-y-2">
                        <p className="text-4xl font-extrabold">Experience</p>
                        <hr />
                        <li>Jun 2023 – Oct 2023 | MERN Stack Developer Intern, Fastbooks</li>
                        <li>Oct 2020 – Jul 2021 | IT Incharge, The Daily Provat Alo</li>
                    </ul>
                    <ul className="col-span-2 space-y-2">
                        <hr />
                        <p className="text-4xl font-extrabold">Education</p>
                        <li>Green University of Bangladesh, B.Sc in CSE</li>
                    </ul>
                    <ul className="col-span-2 space-y-2">
                        <p className="text-4xl font-extrabold"> Achievement/Courses/Certificates</p>
                        <hr />
                        <li>Jun 2023 – Oct 2023 | Fastbooks | MERN Stack Development Internship</li>
                        <li>Dec 2022 – June 2023 | Programming Hero | Complete Web Development Course With Jhankar Mahbub (batch-7)</li>
                        <li>Feb 2020 – May 2020 | Atova Technology | MikroTik Routing & Security</li>
                        <li>Jan 2018 – May 2018 | Computer Village & Multimedia | Microsoft Office Management</li>
                    </ul>
                    <ul className="col-span-2 space-y-2">
                        <p className="text-4xl font-extrabold">Hobbies and Interests</p>
                        <hr />
                        <li>Learning unknown programming languages</li>
                        <li>Watching movies</li>
                    </ul>
                    <div className="col-span-2 space-y-2">
                        <p className="text-4xl font-extrabold">Skills:</p>
                        <hr />
                        <p>HTML5 | CSS3 | JavaScript ES6 | React.js | Tailwind | Bootstrap | React Bootstrap | DaisiUI | Flowbite | Express and Node.js | Typescript | Rest API | Mongoose | Devtool and Debugging | MongoDB | JWT | React Hook Form | Prisma | Redux | Next.js | PostgreSQL | Git | Adobe Photoshop | Adobe Illustrator | GitHub | Visual Studio Code | Firebase | React Router | Netlify | Surge | Vercel | Dotenv | Figma | Chrome Dev Tools | Canva</p>
                    </div>

                    <div className="col-span-2 space-y-2">
                        <p className="text-4xl font-extrabold">Languages:</p>
                        <hr />
                        <p>Bengali, English, Hindi</p></div>
                    <p>LinkedIn: <Link href="https://linkedin.com/in/nazmus-sakib-sheam" className="font-bold text-green-500">Nazmus Sakib</Link></p>
                    <p>Github: <Link href="https://github.com/nS-Sheam/" className="font-bold text-green-500">NS-Sheam</Link></p>

                    <button onClick={handleDownloadResume} className={`gradient-btn border-2 border-white mx-auto w-56 block py-2 px-5 rounded-full text-white font-bold`}>Download Resume</button>
                    <button onClick={handleDownloadCv} className={`gradient-btn border-2 border-white mx-auto w-56 block py-2 px-5 rounded-full text-white font-bold`}>Download CV</button>

                </div>
                <div
                    data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-duration="1000"
                    className="bg-bandSecondary text-white p-6 rounded-lg w-full md:w-1/2 text-center">
                    <p className="text-xl md:text-3xl font-bold text-white">Hello! I am </p>
                    <p className="text-xl md:text-3xl"><span className="font-bold text-green-500">MD. Nazmus Sakib Sheam</span></p>
                    <p className="text-justify">I am a <span className="font-bold text-green-500">MERN Stack Developer</span>. As a MERN stack developer, I have a good understanding of HTML, CSS, and JavaScript, and I have successfully worked on over 30 projects. With my expertise in these core technologies, I specialize in building dynamic and responsive web applications.

                        In my portfolio, I have developed a diverse range of projects, including e-commerce websites, social media platforms, content management systems, and more. Each project has provided me with valuable experience in implementing different features, integrating APIs, and optimizing performance.

                        Throughout these projects, I have demonstrated my ability to effectively collaborate with clients, designers, and other team members to bring their visions to life. I am skilled at translating requirements into functional and visually appealing web applications, while adhering to best practices and ensuring code quality.

                        My experience spans the entire development lifecycle, from initial planning and design to deployment and maintenance. I am proficient in version control using Git, which enables me to work efficiently in a team environment and ensure smooth collaboration.

                        I am constantly expanding my knowledge and staying up to date with the latest advancements in the MERN stack and web development industry. This allows me to incorporate the most relevant and cutting-edge techniques into my projects, ensuring they are modern, performant, and user-friendly.

                        Overall, my experience of working on 30+ projects as a MERN stack developer has provided me with a strong foundation in HTML, CSS, and JavaScript, as well as a deep understanding of the MERN stack. I am committed to delivering high-quality web applications that meet client requirements and provide an exceptional user experience.</p>
                </div>
            </div>
        </section >
    );
};

export default About;



// Objective_______________________________________________________________________________
// Passionate and dedicated web developer with a strong foundation in HTML5, CSS3, and JavaScript. Skilled in creating dynamic web applications using React, Express, Node.js, and MongoDB. Committed to delivering exceptional code quality, driving innovation, and providing seamless user experiences. Seeking a challenging role where I can leverage my skills and contribute to cutting-edge projects in a collaborative and growth-oriented environment.
// Skills___________________________________________________________________________________
// Expertise: HTML5 | CSS3 | JavaScript ES6 | React.js | Tailwind | Bootstrap | React Bootstrap | DaisiUI | Flowbite
// Comfortable: Express and Node.js | Typescript | Rest API | Mongoose | Devtool and Debugging | MongoDB | JWT | React Hook Form
// Familiar: Prisma | Redux | Next.js | PostgreSQL | Git | Adobe Photoshop | Adobe Illustrator
// Tools: GitHub | Visual Studio Code | Firebase | React Router | Netlify | Surge | Vercel | Dotenv | Figma | Chrome Dev Tools | Canva
// Projects________________________________________________________________________________
// Magic Learner (A summer camp music school website) Client Site | Server Site | Live Site
// Time Period: 10-12 days
// Key Features:
// • Implemented payment system.
// • Integrated real-time data using Express, MongoDB and Firebase.
// • Implemented different dashboard for admin, instructor and user.
// Heroverse (A superhero toy marketplace website) Client Site | Server Site | Live Site
// Time Period: 7-10 days
// Key Features:
// • Implemented responsive design using React and CSS3.
// • Integrated real-time data using Express, MongoDB and Firebase.
// • Optimized website performance for fast loading speed.
// Chef Universe (Chef’s details related website) Client Site | Server Site | Live Site
// Time Period: 7-10 days
// Key Features:
// • Designed and implemented interactive user interface using React and CSS3.
// • Integrated backend functionalities using Express and Firebase.
// • Implemented dynamic data filtering functionality using React and Express
// Experience______________________________________________________________________________
// Jun 2023 – Oct 2023 | MERN Stack Developer Intern, Fastbooks
// Bihar, India
// Oct 2020 – Jul 2021 | IT Incharge, The Daily Provat Alo
// Feni Pouroshova, Feni
// Education_______________________________________________________________________________
// Green University of Bangladesh, B.Sc in CSE
// Duration: Feb 2021 to present
// Achievement/Courses/Certificates__________________________________________________________
// -Jun 2023 – Oct 2023 | Fastbooks | MERN Stack Development Internship
// - Dec 2022 – June 2023 | Programming Hero | Complete Web Development Course With Jhankar Mahbub (batch-7)
// - Feb 2020 – May 2020 | Atova Technology | MikroTik Routing & Security
// - Jan 2018 – May 2018 | Computer Village & Multimedia | Microsoft Office Management
// Hobbies and Interests_____________________________________________________________________
// - Learning unknown programming languages
// - Watching movies
// Languages______________________________________________________________________________
// Bangla (Native) | English (Comfortable) | Hindi (Familiar)