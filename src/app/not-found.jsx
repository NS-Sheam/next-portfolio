"use client"

import CircularText from '@/components/CurcularText/CircularText';
import AnimatedButton from '@/components/buttons/AnimatedButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NotFound = () => {
    const path = usePathname();


    return (
        <div className="inner-container flex flex-col justify-center items-center gap-4 h-screen bg-bandTernary">
            <CircularText
                text="- Error - Error - Error "
                degree={15}
                circleSize="250px"
                origin="125px"
                textClass="text-3xl font-bold text-bandYellow uppercase "
                filter="brightness(1.2) contrast(1.2)"
                animationSpeed="9s"
            />

            <h1 className='font-semibold mb-2 banner-name-font text-xl '>{process.env.NEXT_PUBLIC_PUBLIC_HOSTING_URL + path} not found</h1>
            <AnimatedButton
                htmlFor="my-modal-5"
                className="text-bandTernary p-4 font-bold"
            >
                <Link href="/">Go to Home </Link>
            </AnimatedButton>

        </div>
    );
};

export default NotFound;