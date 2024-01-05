"use client";
import emailjs from '@emailjs/browser';
import img from "@/assets/images/contact-image/contact_us.png"
import "./Contact.css"
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";
import { BiArrowToRight } from 'react-icons/bi';

const Contact = () => {
    const form = useRef();
    // console.log(object);
    const sendEmail = (e) => {
        e.preventDefault();

        // emailjs.sendForm(`${import.meta.env.VITE_SERVICE_ID}`, `${import.meta.env.VITE_TAMPLATE_ID}`, form.current, `${import.meta.env.VITE_PUBLIC_KEY}`)
        //     .then((result) => {
        //         toast.success("Your email sent successfully", {
        //             position: "top-right",
        //             autoClose: 2500,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined,
        //             theme: "dark"
        //         })
        //     }, (error) => {
        //         // console.log(error.text);
        //         toast.success(error.text, {
        //             position: "top-right",
        //             autoClose: 2500,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined,
        //             theme: "dark"
        //         })
        //     });
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
                            <div
                                className={`w-32 py-1 rounded-md flex items-center justify-center gradient-btn bg-bandPrimary shadow-md shadow-white text-white text-4xl font-extrabold overflow-hidden`}
                            >
                                <BiArrowToRight className="go-to-right-btn" />
                            </div>
                        </form>
                    </div>
                    <div
                        className="hidden lg:block contact-img text-center lg:text-left col-span-1">
                        <Image
                            src={img}
                            alt="contact"
                            width={500}
                            height={500}
                            data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-duration="1000"
                        />
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