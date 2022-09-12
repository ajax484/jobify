import React, { useLayoutEffect, useRef } from 'react';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const categoryList = [
    {
        heading: 'UI/UX design',
        count: 50
    },
    {
        heading: 'Web design',
        count: 150
    },
    {
        heading: 'sales Rep',
        count: 50
    },
    {
        heading: 'General Manager',
        count: 120
    },
    {
        heading: 'Engineering',
        count: 170
    },
    {
        heading: 'Administration',
        count: 170
    },
    {
        heading: 'Manufacturing',
        count: 30
    }
]

const Categories = () => {
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
                markers: true,
                trigger: mainEl,
                start: "top top",
                end: `=+${mainEl.offsetHeight * 2}`,
                scrub: true,
                pin: true,
            }
        });

        tl
            .addLabel('text-boxes')
            .fromTo(textEl.querySelector(".header"), { y: -50 }, { opacity: 1, y: 0, }, 'text-boxes')
            .fromTo(textEl.querySelector(".paragraph"), { x: -50 }, { opacity: 1, x: 0, }, 'text-boxes')
            .fromTo(boxesEl.querySelector(".box-1"), { x: -50 }, { opacity: 1, x: 0, }, 'text-boxes')
            .fromTo(boxesEl.querySelector(".box-2"), { y: -50 }, { opacity: 1, y: 0, }, 'text-boxes')
            .fromTo(boxesEl.querySelector(".box-3"), { y: 50 }, { opacity: 1, y: 0, }, 'text-boxes')
            .fromTo(boxesEl.querySelector(".box-4"), { x: -50 }, { opacity: 1, x: 0, }, 'text-boxes')
            .fromTo(boxesEl.querySelector(".box-5"), { x: 50 }, { opacity: 1, x: 0, }, 'text-boxes')
            .fromTo(boxesEl.querySelector(".box-6"), { y: 50 }, { opacity: 1, y: 0, }, 'text-boxes')
            .fromTo(boxesEl.querySelector(".box-7"), { y: -50 }, { opacity: 1, y: 0, }, 'text-boxes')
            .fromTo(boxesEl.querySelector(".box-8"), { x: 50 }, { opacity: 1, x: 0, }, 'text-boxes')
    }, [])

    return (
        <section className="min-h-screen py-8 flex flex-col items-center justify-center gap-y-8" ref={mainRef}>
            <div className="space-y-2 text-center md:text-left" ref={textRef}>
                <h1 className="font-primaryExtraBold text-3xl md:text-5xl first-text header">browse jobs category</h1>
                <p className="md:text-lg paragraph">
                    Browse  through different job category  and get your dream job
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4" ref={boxesRef}>
                {
                    categoryList.map((category, index) => (
                        <div key={index} className={`flex flex-col items-center gap-2 p-8 bg-white rounded-md border-[1px] border-gray-200 shadow-sm box-${index + 1}`}>
                            <h1 className="font-primaryExtraBold text-primary">{category.heading}</h1>
                            <h1 className="font-primarySemiBold text-sm">{category.count}+ new jobs posted</h1>
                        </div>
                    ))
                }
                <div className="flex flex-col items-center gap-2 p-8 bg-primary rounded-md border-[1px] border-gray-200 shadow-sm box-8">
                    <h1 className="font-primaryExtraBold text-white text-lg">50+ more categories</h1>
                </div>
            </div>
        </section>
    );
}

const categoryCard = () => {

}

export default Categories;
