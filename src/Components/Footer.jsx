import React from 'react';
import { letter, transition, word } from '../Utils/anim';
import ScrollAnimatedText from './ScrollAnimatedText';

export default function Footer() {
    return (
        <footer>
            <div className="px-4 md:px-8 pt-16 pb-4 grid lg:grid-cols-5">
                <div className="lg:col-span-3 text-white h-full my-auto">
                    <ScrollAnimatedText
                        element="h1"
                        wordvariants={word}
                        lettervariants={letter}
                        transition={transition}
                        issentence={false}
                        className="text-3xl text-white font-bold mb-4 text-center lg:text-left">
                        Auctioneer
                    </ScrollAnimatedText>
                </div>

                <div className="lg:col-span-2 grid grid-cols-3 gap-12 text-white">
                    <div className="space-y-4 lg:mx-auto">
                        <h3 className="capitalize text-lg md:text-xl">Marketplace</h3>
                        <ul className="space-y-4 text-gray-300">
                            <li>
                                Explore
                            </li>
                            <li>
                                NFTs
                            </li>
                            <li>
                                Collectables
                            </li>
                            <li>
                                Virtual Reality
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4 lg:mx-auto">
                        <h3 className="capitalize text-lg md:text-xl">Resources</h3>
                        <ul className="space-y-4 text-gray-300">
                            <li>
                                Help Center
                            </li>
                            <li>
                                Partners
                            </li>
                            <li>
                                Blog
                            </li>
                            <li>
                                Newsletter
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4 lg:mx-auto">
                        <h3 className="capitalize text-lg md:text-xl">Company</h3>
                        <ul className="space-y-4 text-gray-300">
                            <li>
                                About Us
                            </li>
                            <li>
                                Careers
                            </li>
                            <li>
                                Support
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <Copyright />
        </footer>
    )
}

const Copyright = () => (
    <div className="py-4 text-gray-300 text-center">
        {new Date().getFullYear()} All Rights Reserved. Auctioneer by <a className="text-white text-sm md:text-base lg:text-lg hover:font-semibold hover:underline hover:underline-offset-1" href="https://portfolio-ajax484.vercel.app/">Y.B. UBAH</a>
    </div>

)
