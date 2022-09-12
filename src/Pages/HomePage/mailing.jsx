import React, { useLayoutEffect, useRef } from 'react';
import Briefcase from '../../Assets/svg/Briefcase';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';

const Mailing = () => {
    const mainRef = useRef();
    const textRef = useRef();
    const boxesRef = useRef();

    useLayoutEffect(() => {
        const textEl = textRef.current;
        const boxesEl = boxesRef.current;
        const mainEl = mainRef.current;
    }, [])

    return (
        <section className="py-12 flex items-center justify-center">
            <div className="bg-primary py-16 w-11/12 md:w-3/5 flex flex-col gap-y-8 items-center rounded-2xl">
                <h1 className="font-primaryExtraBold text-2xl text-white text-center">Subscribe to get latest  job alerts</h1>
                <div className="flex justify-center gap-4 w-full">
                    <input type="text" className="px-4 py-3 w-1/3 md:w-2/3" placeholder='enter email' />
                    <button className="bg-purple-900 px-4 py-3 text-white rounded-md">Subscribe</button>
                </div>
            </div>

        </section>
    );
}

export default Mailing;
