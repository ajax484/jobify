import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ScrollElement({ children, element, transition, layout, ...props }) {
    const control = useAnimation();
    const [ref, inView] = useInView();
    const MotionComponent = motion[element];

    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
    }, [control, inView]);

    return (
        <MotionComponent
            variants={props.variants}
            animate={control}
            ref={ref}
            initial="initial"
            {...transition !== undefined && { transition }}
            {...props}
        >
            {children}
        </MotionComponent>
    )
}
