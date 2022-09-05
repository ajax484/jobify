import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { slideVerticalAnimation } from '../../Utils/anim';
import { useClickOutside } from '../../Utils/Hooks';

const Dropdown = ({ button, children }) => {
    const [isOpen, toggleDropdown] = useState(false);
    const nodeRef = useRef(null);

    useClickOutside(nodeRef, () => { toggleDropdown(false) });

    return (
        <div className="relative inline-block text-left" ref={nodeRef}>
            <div>
                <div type="button" className="h-fit cursor-pointer" onClick={() => toggleDropdown(!isOpen)}>
                    {button}
                </div>
            </div>

            <motion.div
                initial="close"
                animate={isOpen ? "open" : "close"}
                variants={slideVerticalAnimation}
                className="z-[2000] origin-top-right absolute right-0 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}
            >
                {children}
            </motion.div>

        </div>
    )
}

export default Dropdown;