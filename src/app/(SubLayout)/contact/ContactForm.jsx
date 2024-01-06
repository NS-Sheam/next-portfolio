"use client";
import React, { useRef } from 'react';
import { sendEmailWithEmailJS } from './contact.utils';
import { BiArrowToRight } from 'react-icons/bi';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();
        const result = await sendEmailWithEmailJS(form.current);

        if (result?.status === 200) {
            form.current.reset();
        }


    };
    const commonInputClass = `w-full p-3 rounded-md border-b-2 bg-transparent outline-none`
    return (
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
    );
};

export default ContactForm;