import StackingCards from "./StackingCards";

const MyServices = () => {
  return (
    <section className=" space-y-4 py-6">
      <h1 className="text-3xl md:text-6xl font-bold text-band-orange text-center">
        Trailblazing Software Teams
      </h1>
      <h2 className="text-2xl md:text-4xl font-bold text-white text-center">
        Comprehensive Software Development Services <br />{" "}
        <span className="text-3xl font-semibold">
          Streamlining Processes & Enhancing User Experiences
        </span>
      </h2>
      <p className="text-xl md:text-2xl text-white text-center">
        ASoftware development services include Custom Software Development, Web
        and Mobile Application Design & Development, UI/UX design, DevOps,
        Software Testing, Maintenance, and Continuous Support. These services
        streamline processes, improve productivity, and enhance user experiences
        by creating tailored software solutions.
      </p>
      <StackingCards />
      {/* <StackCards /> */}
    </section>
  );
};

export default MyServices;
