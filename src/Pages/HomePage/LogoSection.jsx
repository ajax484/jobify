import React, { useLayoutEffect, useRef } from 'react';
import MicrosoftLogo from '../../Assets/Img/logosection/MicrosoftLogo.svg';
import HeroLogo from '../../Assets/Img/logosection/HeroLogo.svg';
import GoogleLogo from '../../Assets/Img/logosection/GoogleLogo.svg';
import UIPathLogo from '../../Assets/Img/logosection/UIPathLogo.svg';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LogoSection() {
    const mainRef = useRef();
    const logosRef = useRef();

    useLayoutEffect(() => {
        const mainEl = mainRef.current;
        const logosEl = logosRef.current;

        const amount = window.innerWidth > 1024 ? 4 : window.innerWidth > 768 ? 3 : 2;

        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                
                trigger: mainEl,
                start: "bottom center",
                end: `=+${mainEl.offsetHeight * amount}`,
                scrub: true,
                pin: true,
                pinSpacing: true
            }
        });

        tl
            .addLabel('header-logo')
            .fromTo(mainEl.querySelector(".header"), { opacity: 0, }, { opacity: 1, }, 'header-logo')
            .fromTo(logosEl.querySelector(".logo-1"), { opacity: 0, y: 50 }, { opacity: 1, y: 0, }, 'header-logo')
            .fromTo(logosEl.querySelector(".logo-2"), { opacity: 0, y: -50 }, { opacity: 1, y: 0, }, 'header-logo')
            .fromTo(logosEl.querySelector(".logo-3"), { opacity: 0, y: 50 }, { opacity: 1, y: 0, }, 'header-logo')
            .fromTo(logosEl.querySelector(".logo-4"), { opacity: 0, y: -50 }, { opacity: 1, y: 0, }, 'header-logo')

    }, [])

    return (
        <section className="py-16 space-y-8 border-b-2" ref={mainRef}>
            <h1 className="text-center font-bold text-xl header">Trusted by 500+ agencies and companies</h1>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8" ref={logosRef}>
                {
                    [HeroLogo, MicrosoftLogo, UIPathLogo, GoogleLogo].map((img, index) =>
                        <div className="flex justify-center" key={index}>
                            <img src={img} className={`h-8 md:h-12 logo-${index + 1}`} alt={`img ${index}`} />
                        </div>
                    )
                }
            </div>
        </section>
    )
}
