import Header from "../shared/Header/Header";
import emailjs from '@emailjs/browser';
import img from "@/assets/images/contact-image/contact_us.png"
import "./Contact.css"
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";

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

    return (
        <>
            <div
                className="hero min-h-screen w-full lg:py-6">
                <div className="hero-content flex-col lg:flex-row justify-between gap-16 lg:w-4/5">
                    <div
                        data-aos="fade-right"
                        data-aos-anchor="#example-anchor"
                        data-aos-duration="1000"
                        className="bg-transparent w-full lg:w-1/2">
                        <form
                            ref={form} onSubmit={sendEmail} className="space-y-4 lg:space-y-6 text-justify">
                            <h1 className="text-center text-3xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text italic">Contact me!</h1>
                            <p className={`text-white text-center`}>Let's connect! If you have any questions or would like to discuss potential collaborations, feel free to reach out using the contact details below. I'm eager to hear from you and explore exciting opportunities together. Don't hesitate to get in touch!</p>
                            <div
                                data-aos="flip-right"
                                data-aos-anchor="#example-anchor"
                                data-aos-duration="1500"
                                className="form-control">
                                <input type="text" placeholder="name" name="from_name" className={`input input-bordered shadow-md ${theme == "light" ? "bg-slate-800 shadow-slate-800 text-white" : "bg-white"}`} required />
                            </div>
                            <div
                                data-aos="flip-right"
                                data-aos-anchor="#example-anchor"
                                data-aos-duration="1500"
                                className="form-control">
                                <input type="text" placeholder="email" name="from_email" className={`input input-bordered shadow-md ${theme == "light" ? "bg-slate-800 shadow-slate-800 text-white" : "bg-white"}`} required />
                            </div>
                            <textarea
                                data-aos="flip-right"
                                data-aos-anchor="#example-anchor"
                                data-aos-duration="1500"
                                placeholder="your message" name="message" className={`p-3 text-base textarea textarea-bordered textarea-lg w-full ${theme == "light" ? "bg-slate-800 shadow-slate-800 text-white" : "bg-white"}`} required></textarea>
                            <div
                                data-aos="flip-right"
                                data-aos-anchor="#example-anchor"
                                data-aos-duration="1500"
                                className="form-control mt-6">
                                <button className={`btn gradient-btn ${theme === "dark" && "border-2 border-white"} text-white hover:bg-opacity-25 border`}>Send</button>
                            </div>
                        </form>
                    </div>
                    <div
                        className="contact-img text-center lg:text-left w-full lg:w-1/2">
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