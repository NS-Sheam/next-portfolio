import React from 'react';

const OldHeader = () => {
    // const spring = {
    //     type: "spring",
    //     stiffness: 700,
    //     damping: 30,
    // };
    return (
        <>
            {/* --------------- old desktop menu start ------------------- */}
            {/* For dextop */}
            {/* <section
        className={`${isHeaderFixed && "hidden"
          } hidden lg:flex justify-around items-center inner-container py-4`}
      >
        <div className="flex justify-center items-center gap-2">
          <Link href="/">
            <Image className="w-24" src={logo} alt="logo" />
          </Link>
          <div
            className="switch dark-switch"
            data-ison={isOn}
            onClick={toggleSwitch}
          >
            <motion.div
              className={theme === "light" ? "dark-handle" : "light-handle"}
              layout
              transition={spring}
            />
          </div>
        </div>
        <div className="">
          <ul className="header-list flex gap-6 text-bandFont text-2xl font-bold ">
            {menuData.map(({ path, name }, index) => (
              <li key={index} className="dextop-menu-btn">
                <ActiveLink href={path}>{name}</ActiveLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ActiveLink href="/contact">
            <button className="font-semibold text-white bg-bandPrimary border-2 rounded-md py-2 px-3 hover:border-bandYellow hover:text-bandYellow text-2xl">
              Hire me
            </button>
          </ActiveLink>
        </div>
            </section> */}
            {/* --------------- old desktop menu end ------------------- */}
            {/* --------------- old mobile menu start ------------------- */}
            {/* <section className="lg:hidden my-container px-4 py-4 flex justify-between items-center">
                <div className="flex justify-center items-center gap-2">
                    <Link href="/">
                        <Image className="w-12" src={logo} alt="logo" />
                    </Link>
                    <div
                        className="switch dark-switch"
                        data-ison={isOn}
                        onClick={toggleSwitch}
                    >
                        <motion.div
                            className={theme == "light" ? "dark-handle" : "light-handle"}
                            layout
                            transition={spring}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center z-20">
                    <div className="p-2 bg-bandPrimary w-10 h-10 flex justify-center items-center">
                        {isMenuOpen ? (
                            <FontAwesomeIcon
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={"text-2xl text-white font-extrabold"}
                                icon={faXmark}
                            />
                        ) : (
                            <FontAwesomeIcon
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={"text-2xl text-white font-extrabold"}
                                icon={faBars}
                            />
                        )}
                    </div>
                    <div className=" w-4/5 mx-auto absolute top-14 right-0 left-0">
                        <ul
                            className={` header-list text-bandFont mb-2 text-xl flex flex-col items-center gap-2 sm-menu-item transform duration-500 rounded-md border p-2 m-2 border-white z-20 bg-black bg-opacity-60 backdrop-blur-sm  ${isMenuOpen ? "visible" : "hidden"
                                }`}
                        >
                            {menuData?.map(({ path, name, icon }, index) => {

                                return (
                                    <React.Fragment key={index}>
                                        <li className="w-full text-center">
                                            <ActiveLink href={path}>{name}</ActiveLink>
                                        </li>
                                        <hr className="w-full" />
                                    </React.Fragment>
                                );
                            })}

                            <ActiveLink href="/contact" className="">
                                <button className="font-semibold bg-bandPrimary text-white border-2 py-2 px-2 hover:border-bandYellow hover:text-bandYellow rounded-md text-xl">
                                    Hire me
                                </button>
                            </ActiveLink>
                            <div className="my-2">
                                <button
                                    onClick={handleDownloadResume}
                                    className="text-white uppercase font-bold flex items-center gap-2 bg-gradient-to-r from-bandPrimary via-bandSecondary to-bandTernary hover:from-bandTernary hover:to-bandPrimary py-2 px-3 rounded-full border-2 border-white"
                                >
                                    Download Resume <AiOutlineCloudDownload />
                                </button>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="bg-white">

                </div>
            </section> */}
            {/* --------------- old mobile menu end ------------------- */}
        </>
    );
};

export default OldHeader;


<div className="md:grid grid-cols-3 gap-5 items-start justify-start">
    {/* button side  */}
    <div className="col-span-1 flex flex-col justify-center items-center gap-8 z-10">
        {["Frontend", "Backend", "Database", "Devops"].map((item, index) => (
            <button
                onClick={() => setShowedTechnology(item.toLowerCase())}
                key={index}
                className={`text-2xl font-bold bg-bandPrimary py-5 w-full rounded-lg ${showedTechnology === item.toLowerCase()
                    ? "bg-bandYellow text-bandTernary"
                    : "text-white"
                    }`}
            >
                {item}
            </button>
        ))}
    </div>
    {/* Data side */}
    <div className="col-span-2 py-4">
        {technologies.map((technology) => {
            return Object.keys(technology).map((key, index) => {
                return (
                    key === showedTechnology && (
                        <div
                            className="grid grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3 mx-auto"
                            key={index}
                        >
                            {technology[key].map((item, index) => {
                                return (
                                    <div
                                        data-aos="zoom-in"
                                        data-aos-duration="500"
                                        className="flex flex-col justify-center items-center gap-8 bg-bandPrimary p-5 border border-text-bandYellow rounded-lg"
                                        key={index}
                                    >
                                        <Image
                                            className={
                                                item.image === expressImage
                                                    ? "bg-white p-2 rounded-lg"
                                                    : ""
                                            }
                                            src={item.image}
                                            width={100}
                                            alt=""
                                        />
                                        <h3 className="text-xl font-bold text-bandYellow">
                                            {item.name}
                                        </h3>
                                    </div>
                                );
                            })}
                        </div>
                    )
                );
            });
        })}
    </div>
</div>