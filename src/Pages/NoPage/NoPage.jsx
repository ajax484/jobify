import React from 'react';
import pawpawErrorPage from '../../Assets/Img/pawpawErrorPage.jpg';

export default function NoPage() {
    return (
        <section className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex flex-col-reverse md:flex-row items-center justify-center gap-8">
            <div className="order-2 md:order-1 flex justify-end">
                <img src={pawpawErrorPage} alt="error page" />
            </div>

            <div className="order-1 md:order-2 text-center flex flex-col justify-start">
                <h1 className="text-5xl md:text-7xl font-primaryExtraBold">Error 404</h1>
                <p className="text-xl md:text-3xl text-gray-500">Na you sabi wetin you dey find, boss</p>
            </div>
        </section>
    )
}
