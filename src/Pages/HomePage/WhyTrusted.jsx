import React, { useLayoutEffect, useRef } from 'react';
import LargeImage from '../../Assets/Img/whytrustedsection/largeimage.png';
import SmallImage1 from '../../Assets/Img/whytrustedsection/smallimage1.png';
import SmallImage2 from '../../Assets/Img/whytrustedsection/smallimage2.png';
import SmallImage3 from '../../Assets/Img/whytrustedsection/smallimage3.png';
import SmallImage4 from '../../Assets/Img/whytrustedsection/smallimage4.png';
import SmallImage5 from '../../Assets/Img/whytrustedsection/smallimage5.png';
import CheckCircle from '../../Assets/svg/CheckCircle';
import Button from '../../Components/Button/Button';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WhyTrusted() {
    const mainRef = useRef();
    const textRef = useRef();
    const imagesRef = useRef();

    useLayoutEffect(() => {
        const mainEl = mainRef.current;
        const textEl = textRef.current;
        const imagesEl = imagesRef.current;

        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                markers: true,
                trigger: mainEl,
                start: "top top",
                end: `=+${mainEl.offsetHeight * 2}`,
                scrub: true,
                pin: true,
                pinSpacing: true
            }
        });

        tl
            .addLabel('images-text-li')
            .fromTo(imagesEl.querySelector(".image-1"), { rotate: 180, x: -50, }, { rotate: 0, scale: 1, opacity: 1, x: 0 }, 'images-text-li')
            .fromTo(imagesEl.querySelector(".image-3"), { rotate: 180, y: -50, }, { rotate: 0, scale: 1, opacity: 1, y: 0 }, 'images-text-li')
            .fromTo(imagesEl.querySelector(".image-2"), { rotate: 180, y: 50, }, { rotate: 0, scale: 1, opacity: 1, y: 0 }, 'images-text-li')
            .fromTo(imagesEl.querySelector(".image-4"), { rotate: 180, x: 50, }, { rotate: 0, scale: 1, opacity: 1, x: 0 }, 'images-text-li')
            .fromTo(imagesEl.querySelector(".image-5"), { rotate: 180, y: -50, }, { rotate: 0, scale: 1, opacity: 1, y: 0 }, 'images-text-li')
            .fromTo(imagesEl.querySelector(".image-0"), { scale: 0.5 }, { rotate: 0, scale: 1, opacity: 1 }, 'images-text-li')
            .fromTo(textEl.querySelector(".header"), { y: -50 }, { opacity: 1, y: 0 }, 'images-text-li')
            .fromTo(textEl.querySelector(".paragraph"), { x: -50 }, { opacity: 1, x: 0 }, 'images-text-li')
            .fromTo(textEl.querySelector(".li-1"), { x: -50 }, { opacity: 1, x: 0 }, 'images-text-li')
            .fromTo(textEl.querySelector(".li-2"), { x: 50 }, { opacity: 1, x: 0 }, 'images-text-li')
            .fromTo(textEl.querySelector(".li-3"), { x: -50 }, { opacity: 1, x: 0 }, 'images-text-li')
            .fromTo(textEl.querySelector(".li-4"), { x: 50 }, { opacity: 1, x: 0 }, 'images-text-li')
            .fromTo(textEl.querySelector(".button-div"), { y: 50 }, { opacity: 1, y: 0 }, 'images-text-li')

    }, [])

    return (
        <section className="h-screen mt-32 grid md:grid-cols-2 items-center" ref={mainRef}>
            <div className="flex justify-center items-center" ref={imagesRef}>
                <div className="w-fit h-fit relative">
                    <img src={SmallImage1} className="image-1 md:w-[50px] lg:w-[80px] h-20 absolute top-0 md:-top-16 left-0 md:-left-20" alt="" />
                    <img src={SmallImage3} className="image-3 md:w-[50px] lg:w-[80px] h-20 absolute top-0 md:-top-14 right-0 md:-right-10" alt="" />
                    <img src={LargeImage} className="image-0 md:w-[200px] lg:w-[380px] relative -z-10 md:z-0" alt="" />
                    <img src={SmallImage2} className="image-2 md:w-[50px] lg:w-[80px] h-20 absolute bottom-0 md:-bottom-8 left-0 md:-left-20" alt="" />
                    <img src={SmallImage4} className="image-4 md:w-[50px] lg:w-[80px] h-20 absolute bottom-0 md:-bottom-5 right-0 md:-right-20" alt="" />
                    <img src={SmallImage5} className="image-5 md:w-[50px] lg:w-[80px] h-20 absolute hidden md:block bottom-4 md:-bottom-20 right-0 md:right-4" alt="" />
                </div>
            </div>

            <div className="flex flex-col px-8 md:px-16 lg:px-32 gap-4 items-center md:items-start" ref={textRef}>
                <h1 className="text-xl md:text-3xl font-primaryExtraBold text-gray-800 header">Why we are trusted</h1>
                <p className="md:text-lg leading-8 paragraph">100k+ job seekers trust us for <br /> the following reasons</p>
                <ul className="text-sm md:text-base flex flex-col gap-6">
                    <li className="inline-flex items-center space-x-4 li-1"><Tick /><span>Trusted & Quality Job</span></li>
                    <li className="inline-flex items-center space-x-4 li-2"><Tick /><span>International Job</span></li>
                    <li className="inline-flex items-center space-x-4 li-3"><Tick /><span>Top Companies</span></li>
                    <li className="inline-flex items-center space-x-4 li-4"><Tick /><span>No Extra Charge</span></li>
                </ul>
                <div className="button-div">
                    <Button text='Get Started' color='primary' isformbutton={false} />
                </div>
            </div>
        </section>
    )
}

const Tick = () => (
    <span className="bg-primary text-white rounded-full text-sm h-6 w-6 flex justify-center items-center">
        √
    </span>
)
