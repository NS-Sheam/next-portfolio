import React, { useEffect } from 'react';
import "./CircularText.css";

const CircularText = () => {

    useEffect(() => {
        const text = document.querySelector(".text p");
        text.innerHTML = text.innerText.split("").map((char, i) => `<span style="transform:rotate(${i * 7}deg)">${char}</span>`).join("");

    })


    return (
        <div className='circle relative w-[150px] h-[150px] flex justify-center items-center'>
            <div className="logo"></div>
            <div className="text absolute w-full h-full">
                <p className='text-xl text-bandYellow font-bold uppercase shadow-md shadow-white -leading-4'>&nbsp; Welcome &nbsp; to &nbsp; my &nbsp; portfolio!! &nbsp;</p>
            </div>
        </div>
    );
};

export default CircularText;