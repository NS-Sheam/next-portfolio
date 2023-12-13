import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
const apiKey = import.meta.env.VITE_API_KEY;
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
        <section className='bg-gradient-to-tr from-bandPrimary to-bandSecondary inner-container lg:min-h-screen p-4 lg:p-6'>
            <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000"
                data-aos-offset="100"
                className={`w-full lg:w-4/5 mx-auto text-center p-4 lg:p-8 lg:my-8 bg-bandTernary rounded-2xl space-y-4 lg:space-y-6 shadow-2xl lg-min-h-screen `}>
                <h1 className='text-white text-3xl lg:text-5xl italic font-bold mb-4'>Quotes</h1>
                <p className="text-3xl lg:text-6xl text-bandOrange text-center flex justify-center items-center"><FaQuoteLeft /></p>
                <p className="text-xl text-white text-center flex flex-col items-center lg:w-3/4 mx-auto">{quotes?.quote}</p>
                <h3 className="text-2xl font-bold text-white">&#8212; {quotes?.author}</h3>

            </div>
        </section>
    );
};

export default Quotes;