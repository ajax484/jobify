import React, { useEffect, useState } from 'react'
import { motion, useTransform, animate, useTime, useMotionTemplate } from 'framer-motion'

import Woman from '../../Assets/Img/woman.png';
import Microsoft from '../../Assets/Img/microsoft.svg';
import EnvelopeOpen from '../../Assets/svg/Envelope';
import BadgeCheck from '../../Assets/svg/BadgeCheck';
import Briefcase from '../../Assets/svg/Briefcase';
import Input from '../../Components/Input/Input';
import LocationPin from '../../Assets/svg/LocationPin';
import Button from '../../Components/Button/Button';
import SearchIcon from '../../Components/Search';


export default function Hero() {
    return (
        <section className="h-screen grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 bg-secondary">
            <HeroLeft />
            <HeroRight />
        </section>
    )
}

const HeroLeft = () => (
    <div className="relative flex flex-col items-center justify-end lg:justify-center pb-5 md:pb-10 lg:pb-0 lg:px-0 lg:pl-8 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-black font-primary md:leading-tight mb-2 md:mb-4">Find your dream job with us</h1>
        <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-8">
            with us the job search app, you’re always
            one click away from your dream job, search
            for your new job from the comfort of your home.
        </p>

        <div className="flex gap-x-4 w-full justify-center lg:justify-start mx-auto">
            <div className="col-span-3 flex">
                <Input type='text' placeholder='Job Title' icon={<Briefcase />} className="w-20" />
                <Input type='text' placeholder='Location' icon={<LocationPin />} className="w-20" />
            </div>
            <div className="flex">
                <Button text='Search'color='primary' icon={<SearchIcon />} isformbutton={true} />
            </div>
        </div>
    </div>
)


const HeroRight = () => (
    <div className="relative w-full overflow-hidden">
    <div>
        <div className="place-center center-object circular-path w-[300px] h-[300px] md:w-[450px] md:h-[450px]">

        </div>

        <motion.div
            className="circular-motion1 center-object border-[1px] border-gray-400 bg-background p-1 md:p-2 flex items-center gap-2 md:gap-4 z-30 rounded-md">

            <img src={Microsoft} className="h-4 w-4 md:h-8 md:w-8" alt="" />

            <div className="flex flex-col gap-1 md:gap-2">
                <div className="text-xs md:text-sm text-green-700 font-bold inline-flex items-center gap-2">
                    <span>UI/UX Designer</span>
                    {/* <BadgeCheck className="w-4 h-4" /> */}
                </div>
                <div className="text-xxs md:text-xs inline-flex items-center gap-2 md:gap-4">
                    <span>Microsoft</span>
                    <button className="button button-secondary py-0.5 p-1 text-xxs md:text-xs text-primary rounded-md !border-0">Apply</button>
                </div>
            </div>
        </motion.div>
    </div>

    <div>
        <div className="place-center center-object circular-path w-[200px] h-[200px] md:w-[300px] md:h-[300px]">

        </div>

        <motion.div
            className="circular-motion2 center-object border-[1px] border-gray-400 bg-background p-1 md:p-2 flex items-center gap-2 md:gap-4 z-20 rounded-md">
            <EnvelopeOpen className="h-4 w-4 md:h-8 md:w-8 text-orange-500" />

            <div className="flex flex-col gap-1 md:gap-2">
                <div className="text-xs md:text-sm text-green-700 font-bold inline-flex items-center gap-2">
                    <span>Congratulations</span>
                    <BadgeCheck className="w-3 h-3 md:w-4 md:h-4" />
                </div>
                <span className="text-xxs md:text-xs">You just got the job</span>
            </div>
        </motion.div>
    </div>

    <div>
        <div className="place-center center-object circular-path w-[100px] h-[100px] md:w-[200px] md:h-[200px]">

        </div>

        <motion.div
            className="circular-motion3 center-object border-[1px] border-gray-400 bg-background p-1 md:p-2 flex flex-col items-center z-10 rounded-md">
            <Briefcase className="h-8 w-8 md:h-10 md:w-10 mb-1 md:mb-2 bg-purple-300 text-purple-700 p-2 rounded-md" />
            <span className="text-xs md:text-sm font-bold">180k+</span>
            <span className="text-xxs md:text-xs">Job Vacancies</span>
        </motion.div>
    </div>

    <img src={Woman} className="h-[65%] md:h-[70%] absolute left-1/2 bottom-0 -translate-x-1/2 z-[100]" alt="woman" />
    </div>
)