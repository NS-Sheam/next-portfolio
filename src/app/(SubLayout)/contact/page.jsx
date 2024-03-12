
import "./Contact.css"
// import { useRef } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import myImg2 from "@/assets/images/my-img-2.jpg";
import CircularText from "@/components/CurcularText/CircularText";
import { generateMetaDatas } from "@/components/utils";
import ContactForm from "./ContactForm";
export const metadata = await generateMetaDatas(
    "Contact",
    "Let's connect! If you have any questions or would like to discuss potential collaborations, feel free to reach out using the contact details below. I'm eager to hear from you and explore exciting opportunities together. Don't hesitate to get in touch!",
    myImg2,
    "contact"

)
const Contact = () => {


    return (
        <div className="bg-bandTernary py-8 lg:pb-16 lg:pt-0">
            <div
                className="container mx-auto inner-container ">
                <h1 className="font-extrabold mb-2 banner-name-font text-6xl text-center">Contact me!</h1>
                <p className={`text-white text-justify md:text-center lg:w-3/4 mx-auto pb-4 md:pb-6 lg:pb-8`}>Let's connect! If you have any questions or would like to discuss potential collaborations, feel free to reach out using the contact details below. I'm eager to hear from you and explore exciting opportunities together. Don't hesitate to get in touch!</p>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-16">
                    <div
                        data-aos="fade-right"
                        data-aos-anchor="#example-anchor"
                        data-aos-duration="1000"
                        className="bg-transparent col-span-1 order-last lg:order-first">
                        <ContactForm />
                    </div>
                    <div>
                        {/* for dextop  */}
                        <div className="hidden lg:flex items-center justify-center">
                            <CircularText
                                text="&nbsp; --Hey There! Send &nbsp; me &nbsp; your &nbsp; thoughts-- &nbsp;"
                                degree={8}
                                circleSize="390px"
                                logoSize={"300px"}
                                logoUrl={myImg2}
                                origin="195px"
                                textClass="text-4xl text-green-500 font-bold uppercase shadow-md shadow-white "
                                animationSpeed="10s"
                            />
                        </div>
                        {/* for mobile */}
                        <div className="flex lg:hidden order-first items-center justify-center">
                            <CircularText
                                text="&nbsp; --Hey There! Send &nbsp; me &nbsp; your &nbsp; thoughts-- &nbsp;"
                                degree={9}
                                circleSize="210px"
                                logoSize={"140px"}
                                logoUrl={myImg2}
                                origin="105px"
                                textClass="text-2xl text-green-500 font-bold uppercase shadow-md shadow-white"
                                animationSpeed="10s"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Contact;