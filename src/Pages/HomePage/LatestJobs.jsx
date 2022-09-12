import React, { useLayoutEffect, useRef } from 'react'
import { useState } from 'react';
import Airbnb from '../../Assets/Img/jobssection/airbnb.svg';
import Behance from '../../Assets/Img/jobssection/behance.svg';
import Dribble from '../../Assets/Img/jobssection/dribble.svg';
import Facebook from '../../Assets/Img/jobssection/facebook.svg';
import Google from '../../Assets/Img/jobssection/google.svg';
import Instagram from '../../Assets/Img/jobssection/instagram.svg';
import Briefcase from '../../Assets/svg/Briefcase';
import Button from '../../Components/Button/Button';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const jobsList = [
    {
        logo: Google,
        company: 'Google',
        location: 'Lagos, Nigeria',
        position: 'Software Engineer',
        description: 'You will be expected be stragic to lead the company’s entire development team.',
        is_fulltime: 'full-time'
    },
    {
        logo: Airbnb,
        company: 'AirBnB',
        location: 'Lagos, Nigeria',
        position: 'Graphics Designer',
        description: 'You will be expected be stragic to lead the company’s entire development team.',
        is_fulltime: 'full-time'
    },
    {
        logo: Dribble,
        company: 'Dribble',
        location: 'Lagos, Nigeria',
        position: 'Senior Developer',
        description: 'You will be expected be stragic to lead the company’s entire development team.',
        is_fulltime: 'full-time'
    },
    {
        logo: Behance,
        company: 'Behance',
        location: 'Lagos, Nigeria',
        position: 'Graphics Designer',
        description: 'You will be expected be stragic to lead the company’s entire development team.',
        is_fulltime: 'full-time'
    },
    {
        logo: Instagram,
        company: 'Instagram',
        location: 'Lagos, Nigeria',
        position: 'Senior Developer',
        description: 'You will be expected be stragic to lead the company’s entire development team.',
        is_fulltime: 'full-time'
    },
    {
        logo: Facebook,
        company: 'Faceboook',
        location: 'Lagos, Nigeria',
        position: 'UI/UX Designer',
        description: 'You will be expected be stragic to lead the company’s entire development team.',
        is_fulltime: 'full-time'
    },
]

export default function LatestJobs() {
    const mainRef = useRef();
    const textRef = useRef();
    const jobsCardRef = useRef();

    useLayoutEffect(() => {
        const mainEl = mainRef.current;
        const textEl = textRef.current;
        const jobsCardEl = jobsCardRef.current;

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
            .addLabel('header-jobCards')
            .fromTo(textEl.querySelector(".header-1"), { y: -50 }, { opacity: 1, y: 0 }, 'header-jobCards')
            .fromTo(textEl.querySelector(".header-2"), { x: -100 }, { opacity: 1, x: 0 }, 'header-jobCards')
            .fromTo(jobsCardEl.querySelector(".jobCard-1"), { y:30, x: 200, rotate: 30 }, { rotate: 0, scale: 1, opacity: 1, x: 0, y:0 }, 'header-jobCards')
            .fromTo(jobsCardEl.querySelector(".jobCard-2"), { x:-30, y: 150, rotate: 60 }, { rotate: 0, scale: 1, opacity: 1, x: 0, y:0 }, 'header-jobCards')
            .fromTo(jobsCardEl.querySelector(".jobCard-3"), { y:30, x: -200, rotate: -60 }, { rotate: 0, scale: 1, opacity: 1, x: 0, y:0 }, 'header-jobCards')
            .fromTo(jobsCardEl.querySelector(".jobCard-4"), { y:-30, x: 200, rotate: 60 }, { rotate: 0, scale: 1, opacity: 1, x: 0, y:0 }, 'header-jobCards')
            .fromTo(jobsCardEl.querySelector(".jobCard-5"), { x:30, y: -150, rotate: -60 }, { rotate: 0, scale: 1, opacity: 1, x: 0, y:0}, 'header-jobCards')
            .fromTo(jobsCardEl.querySelector(".jobCard-6"), { y:-30, x: -200, rotate: -30 }, { rotate: 0, scale: 1, opacity: 1, x: 0, y:0}, 'header-jobCards')
            .fromTo(mainEl.querySelector(".button-apply"), { y: 50 }, { scale: 1, opacity: 1, y: 0 }, 'header-jobCards')
    }, [])

    return (
        <section className="min-h-screen py-6 flex flex-col justify-center space-y-6 px-2 md:px-4 lg:px-8" ref={mainRef}>
            <div className="text-center space-y-4" ref={textRef}>
                <h1 className="text-3xl md:text-5xl font-primaryExtraBold text-gray-800 header-1">Latest Popular <span className="text-primary font-primaryExtraBold">Jobs</span></h1>
                <div className="flex items-center justify-center space-x-2 font-bold header-2">
                    <p>Full time</p>
                    <FlipSwitch />
                    <p>Part time</p>
                </div>
            </div>

            <div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mb-2" ref={jobsCardRef}>
                    {
                        jobsList.map((job, index) => <JobCard job={job} key={index} index={index} />)
                    }
                </div>

                <div className="ml-auto w-fit button-apply">
                    <Button text='Find more Jobs' color='primary' size='fit' isformbutton={false} />
                </div>
            </div>
        </section>
    )
}

const JobCard = ({ job, index }) => (
    <div className={`flex flex-col justify-between gap-0 items-center p-4 bg-white border-[1px] shadow-sm rounded-2xl h-full min-h-[200px] jobCard-${index + 1}`}>
        <div className="w-full space-y-2">
            <div className="flex w-full justify-between">
                <div className="flex items-center space-x-4">
                    <img src={job.logo} alt={'logo of ' + job.company} />
                    <div>
                        <h1 className="font-bold capitalize">{job.company}</h1>
                        <h3 className="text-sm capitalize text-gray-700">{job.location}</h3>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-between items-center">
                <h2 className="font-bold capitalize">{job.position}</h2>
                <span className="inline-flex items-center gap-2">
                    <Briefcase className="w-6 h-6" /> {job.is_fulltime ? 'Full Time' : 'Part Time'}
                </span>
            </div>
        </div>
        <div className="flex justify-between items-center w-full">
            <div className="ml-auto">
                <Button
                    type="button"
                    text='Apply'
                    color='primary'
                    // onClick={openOverlay}
                    isformbutton={false}
                    size="fit"
                />
            </div>
        </div>
    </div>
)

const FlipSwitch = () => {
    const [switched, setSwitched] = useState(false);

    return (
        <div className={`h-3 w-10 ${!switched ? 'bg-secondary' : 'bg-primary/30'} rounded-3xl flex items-center cursor-pointer transition-colors duration-150`} onClick={() => setSwitched(prevSwitched => !prevSwitched)}>
            <div style={{ transform: `translateX(${switched ? '100' : '0'}%)` }} className="h-5 w-5 bg-primary rounded-full transition-transform duration-150"></div>
        </div>
    )
}


