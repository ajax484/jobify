import React from 'react';

export default function Copyright() {
    const year = new Date().getFullYear();
    return (
        <div className="bg-vestaPurple-2 py-10 text-center">
            {year} All Rights Reserved. Vesta by <a className="text-primary text-sm md:text-base lg:text-lg font-primarySemiBold hover:font-primaryExtraBold transition-all duration-150" href="https://portfolio-ajax484.vercel.app/">Y.B. UBAH</a>
        </div>
    )
}
