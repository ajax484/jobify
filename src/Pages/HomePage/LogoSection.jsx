import React from 'react';
import MicrosoftLogo from '../../Assets/Img/logosection/MicrosoftLogo.svg';
import HeroLogo from '../../Assets/Img/logosection/HeroLogo.svg';
import GoogleLogo from '../../Assets/Img/logosection/GoogleLogo.svg';
import UIPathLogo from '../../Assets/Img/logosection/UIPathLogo.svg';

export default function LogoSection() {
    return (
        <section className="py-16 space-y-8 border-b-2">
            <h1 className="text-center font-bold text-xl">Trusted by 500+ agencies and companies</h1>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8">
                {
                    [HeroLogo, MicrosoftLogo, UIPathLogo, GoogleLogo].map((img, index) =>
                        <div className="flex justify-center" key={index}>
                            <img src={img} className="h-8 md:h-12" alt={`img ${index}`} />
                        </div>
                    )
                }
            </div>
        </section>
    )
}
