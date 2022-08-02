import React, { useEffect } from 'react';
import heroImg from '../../Assets/Img/hero.png';
import { motion, useAnimation } from 'framer-motion';
import { growOutAndVisible, slideInAndVisible, transition } from '../../Utils/anim';
import { useInView } from 'react-intersection-observer';
import ScrollElement from '../../Components/ScrollElement';

export default function Hero() {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
    }, [control, inView]);

    return (
        <section className="py-6 mb-3 flex gap-6 items-center">
            <motion.div
                variants={slideInAndVisible}
                animate={control}
                ref={ref}
                initial="initial"
                transition={transition}
                className="sm:flex-[50%] space-y-4 md:space-y-6"
            >
                <h1 className="hero text-[30px] md:text-[40px]">
                    Relics, NFTS and Projects get Value through us
                </h1>
                <div className="flex justify-around sm:justify-evenly">
                    <button className="button-primary button polygon py-1 lg:py-2 px-3 md:px-5 text-black font-semibold">
                        Explore
                    </button>
                    <button className="button-secondary button py-1 lg:py-2 px-3 md:px-5 text-white font-semibold">
                        Auction
                    </button>
                </div>
            </motion.div>

            <div className="sm:flex-[50%] flex justify-center relative">
                <div className="heroimg-div absolute top-0 left-0 w-full h-full heroimg-div -z-20"></div>
                <ScrollElement
                    element="div"
                    variants={growOutAndVisible}
                    transition={transition}
                >
                    <img src={heroImg} alt=""/>
                </ScrollElement>
            </div>

        </section>
    )
}
