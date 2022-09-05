import React, { useContext } from 'react';
import { OverlayContext } from '../../Context/OverlayContext';
import { motion, useCycle } from 'framer-motion';
import './Overlay.css';

const overlayAnimation = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
            mass: 0.8,
            type: "spring"
        },
        display: "flex"
    },
    close: {
        y: -30,
        opacity: 0,
        transition: {
            duration: 0.3
        },
        transitionEnd: {
            display: "none"
        }
    }
}

const Overlay = () => {
    const { overlayContent, overlayState } = useContext(OverlayContext);

    return (
        <motion.div
            className="overlay__container"
            initial="close"
            animate={overlayState ? "open" : "close"}
            variants={overlayAnimation}
        >
            {overlayContent}
        </motion.div>
    )
}

export default Overlay;

