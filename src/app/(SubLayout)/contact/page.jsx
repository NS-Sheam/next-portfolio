"use client";

import img from "@/assets/images/contact-image/contact_us.png"
import "./Contact.css"
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";
import { BiArrowToRight } from 'react-icons/bi';
import { sendEmailWithEmailJS } from "./contact.utils";
import myImg2 from "@/assets/images/my-img-2.jpg";
import CircularText from "@/components/CurcularText/CircularText";
const Contact = () => {
    const form = useRef();
    // console.log(object);
    const sendEmail = async (e) => {
        e.preventDefault();
        const result = await sendEmailWithEmailJS(form.current);
        console.log(result.status);

        if (result?.status === 200) {
            form.current.reset();
        }


    };
    const commonInputClass = `w-full p-3 rounded-md border-b-2 bg-transparent outline-none`

    return (
        <>
            <div
                className="bg-bandTernary inner-container py-8 lg:py-14">
                <h1 className="font-extrabold mb-2 banner-name-font text-6xl text-center">Contact me!</h1>
                <p className={`text-white text-justify md:text-center w-3/4 mx-auto pb-4 md:pb-6 lg:pb-8`}>Let's connect! If you have any questions or would like to discuss potential collaborations, feel free to reach out using the contact details below. I'm eager to hear from you and explore exciting opportunities together. Don't hesitate to get in touch!</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-16">
                    <div
                        data-aos="fade-right"
                        data-aos-anchor="#example-anchor"
                        data-aos-duration="1000"
                        className="bg-transparent col-span-1">
                        <form
                            ref={form} onSubmit={sendEmail} className="text-justify md:grid grid-cols-2 items-center justify-center gap-6 space-y-3 md:space-y-0">
                            <div
                                data-aos="flip-right"
                                data-aos-anchor="#example-anchor"
                                data-aos-duration="1500"
                                className="form-control">
                                <input type="text" placeholder="name" name="from_name" className={commonInputClass} required />
                            </div>
                            <div
                                data-aos="flip-right"
                                data-aos-anchor="#example-anchor"
                                data-aos-duration="1500"
                                className="form-control">
                                <input type="text" placeholder="email" name="from_email" className={commonInputClass} required />
                            </div>
                            <textarea
                                data-aos="flip-right"
                                data-aos-anchor="#example-anchor"
                                data-aos-duration="1500"
                                placeholder="your message" name="message" className={`${commonInputClass} col-span-2`} required></textarea>
                            <button
                                type="submit"
                                className={`w-32 py-1 rounded-md flex items-center justify-center gradient-btn bg-bandPrimary shadow-md shadow-white text-white text-4xl font-extrabold overflow-hidden`}
                            >
                                <BiArrowToRight className="go-to-right-btn" />
                            </button>
                        </form>
                    </div>
                    <div>
                        {/* for dextop  */}
                        <div className="lg:block ">
                            <CircularText
                                text="&nbsp; -Send &nbsp; me &nbsp; your &nbsp; thoughts- &nbsp;"
                                degree={8}
                                circleSize="400px"
                                logoSize={"320px"}
                                logoUrl={myImg2}
                                origin="200px"
                                textClass="text-4xl text-green-500 font-bold uppercase shadow-md shadow-white -leading-4"
                                animationSpeed="10s"
                            />
                        </div>
                        {/* for mobile */}
                        <div className="md:hidden">
                            <CircularText
                                text="&nbsp; -Send &nbsp; me &nbsp; your &nbsp; thoughts- &nbsp;"
                                degree={8}
                                circleSize="400px"
                                logoSize={"320px"}
                                logoUrl={myImg2}
                                origin="200px"
                                textClass="text-4xl text-green-500 font-bold uppercase shadow-md shadow-white -leading-4"
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
        </>
    );
};

export default Contact;