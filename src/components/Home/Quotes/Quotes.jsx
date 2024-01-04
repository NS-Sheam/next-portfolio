"use client"
import SectionTitle from "@/components/SectionTitle";
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const Quotes = () => {

    const [quotes, setQuotes] = useState([]);
    useEffect(() => {
        fetch("https://api.api-ninjas.com/v1/quotes?category=", {
            method: "GET",
            headers: {
                "X-Api-Key": apiKey
            }
        })
            .then(res => res.json())
            .then(data => {
                setQuotes(data[0]);
            })
    }, [])
    return (
        <section className='bg-gradient-to-tr from-bandPrimary to-bandSecondary inner-container p-8 lg:p-14'>
            <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000"
                data-aos-offset="100"
                className={`w-full lg:w-4/5 mx-auto text-center p-4 lg:p-8 lg:my-8 space-y-4 lg:space-y-6 shadow-2xl lg-min-h-screen gradient-border bg-bandTernary border-4 `}>
                <SectionTitle heading="Quotes" />
                <p className="text-4xl lg:text-7xl text-green-500 text-center flex justify-center items-center"><FaQuoteLeft /></p>
                <p className="text-xl text-white text-center flex flex-col items-center lg:w-3/4 mx-auto">{quotes?.quote || "No pain, No gain"}</p>
                <h3 className="text-2xl font-bold text-white">&#8212; {quotes?.author || "nazmus Sakib"}</h3>
            </div>
        </section>
    );
};

export default Quotes;