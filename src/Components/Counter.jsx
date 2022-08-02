import { motion, animate, useAnimationControls } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';

export default function Counter({ from, to, transition, ...props }) {
    // const controls = useAnimationControls();
    const [animationPlayed, setAnimationPlayed] = useState(false);
    const [counter, setCounter] = useState(from);
    const [ref, inView] = useInView();

    useEffect(() => {
        // eslint-disable-next-line no-unused-vars
        const controls = inView && !animationPlayed && animate(from, to, {
            ...transition,
            onUpdate: (value) => setCounter(value),
            onComplete: () => setAnimationPlayed(true)
        });


        // return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [from, to, inView, animationPlayed]);

    return <span ref={ref} {...props} >{counter.toFixed(0)}</span>;
}

