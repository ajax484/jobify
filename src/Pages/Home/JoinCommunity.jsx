import React from 'react'
import SearchIcon from '../../Assets/svg/Search'
import ScrollAnimatedText from '../../Components/ScrollAnimatedText'
import ScrollElement from '../../Components/ScrollElement'
import { letter, slideOutAndVisible, slideUpAndVisible, transition, word } from '../../Utils/anim'

export default function JoinCommunity() {
    return (
        <ScrollElement
            element="section"
            variants={slideUpAndVisible}
            transition={transition}
            layout
            className="my-24 space-y-4"
        >

            <ScrollAnimatedText
                element="h1"
                wordvariants={word}
                lettervariants={letter}
                transition={transition}
                issentence={true}
                className="text-xl sm:text-2xl w-fit text-white font-bold mx-auto">
                Join The AUCTIONEER Community
            </ScrollAnimatedText>

            <div className="md:w-3/4 lg:w-1/2 mx-auto grid grid-cols-4">
                <ScrollElement
                    element="div"
                    variants={slideOutAndVisible}
                    transition={{ ...transition, delay: 1 }}
                    initial="initial" animate="visible"
                    layout htmlFor="search" className="col-span-3 relative"
                >
                    {/* <SearchIcon className="h-10 text-white absolute left-2 top-0 bottom-0 w-5" /> */}
                    <input type="text" className="w-full bg-transparent !border-r-0 border-gradient px-2 md:px-4 py-1.5 sm:py-2 md:py-4 text-white" placeholder='example@gmail.com' name='search' />
                </ScrollElement>
                <button className="button button-primary font-secondary text-sm w-full px-0.5 sm:px-2 md:px-4 py-1.5 sm:py-2 md:py-4 text-black">Notify Me</button>
            </div>

        </ScrollElement>
    )
}
