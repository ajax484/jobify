import React, { useLayoutEffect, useRef } from 'react';

import star from '../../Assets/Img/star.png';
import testimonial1 from '../../Assets/Img/whytrustedsection/smallimage6.png';
import testimonial2 from '../../Assets/Img/whytrustedsection/smallimage1.png';
import testimonial3 from '../../Assets/Img/whytrustedsection/smallimage2.png';
import testimonial4 from '../../Assets/Img/whytrustedsection/smallimage3.png';
import testimonial5 from '../../Assets/Img/whytrustedsection/smallimage4.png';
import testimonial6 from '../../Assets/Img/whytrustedsection/smallimage5.png';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const persons = [
    {
        name: 'Mariam Yusuf',
        image: testimonial1
    },
    {
        name: 'Irene Furaye',
        image: testimonial2
    },
    {
        name: 'Frank Jacob',
        image: testimonial3
    },
    {
        name: 'Williams Nnamdi',
        image: testimonial4
    },
    {
        name: 'Ahmad Aliyu',
        image: testimonial5
    },
    {
        name: 'David Akinola',
        image: testimonial6
    },
]

const Testimonial = () => {
    const mainRef = useRef();
    const textRef = useRef();
    const boxesRef = useRef();

    useLayoutEffect(() => {
        const textEl = textRef.current;
        const boxesEl = boxesRef.current;
        const mainEl = mainRef.current;

        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                
                trigger: mainEl,
                start: "top top",
                end: `=+${mainEl.offsetHeight * 4}`,
                scrub: true,
                pin: true,
            }
        });

        tl.addLabel('text')
            .fromTo(textEl.querySelector(".header"), { x: -150 }, { opacity: 1, x: 0, }, 'text')
            .fromTo(textEl.querySelector(".paragraph"), { x: 150 }, { opacity: 1, x: 0, }, 'text')
            .fromTo(boxesEl.querySelector(".boxes"), { y: 250 }, { y: 0, }, 'text')
            .addLabel('boxes')
            .fromTo(boxesEl.querySelector(".boxes"), { x: 0 }, { x: '-50%', }, 'boxes')

    }, [])


    return (
        <section className="h-screen flex flex-col justify-center gap-8" ref={mainRef}>
            <div className="flex flex-col md:flex-row gap-y-4 justify-between px-4 md:px-6 lg:px-12 overflow-hidden" ref={textRef}>
                <h1 className="font-primaryExtraBold capitalize text-2xl md:text-4xl first-text header md:w-1/3">Responses from our
                    job holders</h1>
                <p className="md:text-lg paragraph md:w-1/3">
                    Various responses we get that reflect the products and services we provide to job seekers
                </p>
            </div>
            <div className="w-full overflow-auto py-4 no-scrollbar" ref={boxesRef}>
                <div className="w-fit flex space-x-8 pl-4 md:pl-8 lg:pl-16 boxes">
                    {
                        persons.map((person, index) => (
                            <div key={index} className="w-[350px] flex flex-col gap-y-4 px-4 py-2 bg-white rounded-md border-[1px] border-gray-200 shadow-sm">
                                <div className="flex gap-x-4">
                                    <img src={person.image} alt="testimonial" className="rounded-full w-14 h-14" />
                                    <div className="flex flex-col justify-evenly">
                                        <h1 className="font-primaryExtraBold">{person.name}</h1>
                                        <h2 className="text-sm text-gray-700">Student</h2>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <h3 className="font-primarySemiBold">Job Holder</h3>
                                    <div className="flex gap-x-2">
                                        {
                                            [1, 2, 3, 4, 5].map(number => <img className="h-4 w-4" src={star} key={number} alt="star" />)
                                        }
                                    </div>
                                </div>
                                <p>
                                    “ This is the best job searching site i’ve ever seen i found my drea job through this site. ”
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
