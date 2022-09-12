import React, { useLayoutEffect, useRef } from 'react';
import CheckCircle from '../../Assets/svg/CheckCircle';
import CloudUpload from '../../Assets/svg/CloudUpload';
import UserIcon from '../../Assets/svg/User';
import SearchIcon from '../../Components/Search';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
    {
        icon: <UserIcon className="h-6 w-6 text-green-500" />,
        heading: 'create account',
        description: 'First you have to create account'
    },
    {
        icon: <CloudUpload className="h-6 w-6 text-yellow-500" />,
        heading: 'upload cv/resume',
        description: 'For a job you have to upload your best cv  or resume'
    },
    {
        icon: <SearchIcon className="h-6 w-6" />,
        heading: 'Search job',
        description: 'Find your next big job using search'
    },
    {
        icon: <CheckCircle className="h-6 w-6 text-orange-500" />,
        heading: 'Apply',
        description: 'Finally you apply for your dream job'
    },
]

export default function HowItWorks() {
    const mainRef = useRef();
    const textRef = useRef();
    const boxesRef = useRef();

    let countCard = 0;

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
            .fromTo(textEl.querySelector(".header-1"), { y: -50 }, { opacity: 1, y: 0, }, 'text-boxes')
            .fromTo(textEl.querySelector(".header-2"), { x: 50 }, { opacity: 1, x: 0, }, 'text-boxes')
            .fromTo(textEl.querySelector(".paragraph"), { x: -50 }, { opacity: 1, x: 0, }, 'text-boxes')
            .fromTo(boxesEl.querySelector(".card-1"), { y: -50 }, { opacity: 1, y: 0, }, 'text-boxes')
            .fromTo(boxesEl.querySelector(".card-2"), { x: -50 }, { opacity: 1, x: 0, }, 'text-boxes')
            .fromTo(boxesEl.querySelector(".card-3"), { x: 50 }, { opacity: 1, x: 0, }, 'text-boxes')
            .fromTo(boxesEl.querySelector(".card-4"), { y: 50 }, { opacity: 1, y: 0, }, 'text-boxes')

        // gsap.fromTo(element.querySelector(".paragraph"),
        //     {
        //         opacity: 0,
        //         x: -100
        //     },
        //     {
        //         opacity: 1,
        //         x: 0,
        //         scrollTrigger: {
        //             markers: true,
        //             trigger: mainEl,
        //             start: "top top",
        //             end: `=+${mainEl.offsetHeight}`,
        //             scrub: true,
        //             pin: true,
        //             // pinSpacing: true
        //         }
        //     });
    }, []);

    return (
        <section className="pt-16 md:pt-0 h-fit md:h-screen flex flex-col gap-y-8 md:grid md:grid-cols-2 items-center px-6 md:px-8 lg:px-12 my-8 md:my-16 overflow-hidden" ref={mainRef}>
            <div className="space-y-2 md:space-y-4 text-center md:text-left" ref={textRef}>
                <h1 className="font-primaryExtraBold text-3xl md:text-5xl first-text header-1">How it works?</h1>
                <h2 className="font-primaryExtraBold text-3xl md:text-5xl header-2">Follow <br className="hidden md:block" /> 4 easy steps</h2>
                <p className="md:text-lg paragraph">
                    Follow this few step to get started
                    and get your dream job
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:gap-8 md:px-4 lg:px-8" ref={boxesRef}>
                <div className="md:space-y-6 lg:space-y-8 contents md:block">
                    {
                        [...steps].filter((el, index) => (index % 2) === 0).map((step, index) => (<InfoCard key={index} step={step} index={++countCard} />))
                    }
                </div>

                <div className="md:mt-8 md:space-y-6 lg:space-y-8 contents md:block">
                    {
                        [...steps].filter((el, index) => (index % 2) !== 0).map((step, index) => (<InfoCard key={index} step={step} index={++countCard} />))
                    }
                </div>
            </div>
        </section>
    )
}

const InfoCard = ({ step, index }) => (
    <div className={`flex flex-col items-center px-4 py-4 md:py-8 lg:py-10 bg-white space-y-3 border-[1px] shadow-sm rounded-md card-${index}`}>
        {step.icon}
        <h2 className="font-bold text-center">{step.heading}</h2>
        <p className="text-center">{step.description}</p>
    </div>
)