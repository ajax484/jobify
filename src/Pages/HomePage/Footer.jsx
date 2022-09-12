import React from 'react';
import Logo from '../../Assets/Img/jobify.png';
import { Facebook, Twitter, Instagram, CaretRight, LocationPin, Telegram, MessageIcon } from '../../Assets/svg';
import Copyright from './Copyright';

export default function Footer() {
    return (
        <footer>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 px-5 md:px-10 py-10 lg:py-20 border-b-2">
                <div className="space-y-6 col-span-2 lg:col-span-1">
                    <img src={Logo} className="h-12" alt="" />
                    <p className="text-gray-800 leading-loose">
                        Our  job search app will guide you through the processs of finding a job. Personalize your job search and apply online.
                    </p>
                </div>

                <div className="space-y-6">
                    <h3 className="capitalize text-xl md:text-2xl font-semibold">useful links</h3>
                    <ul className="space-y-4 text-gray-800">
                        <li className="">
                            terms & conditions
                        </li>
                        <li className="">
                            user guide
                        </li>
                        <li className="">
                            support center
                        </li>
                        <li className="">
                            press info
                        </li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h3 className="capitalize text-xl md:text-2xl font-semibold">company</h3>
                    <ul className="space-y-4 text-gray-800">
                        <li>
                            home
                        </li>
                        <li>
                            about
                        </li>
                        <li>
                            blog
                        </li>
                        <li>
                            contact us
                        </li>
                    </ul>
                </div>

                <div className="space-y-6 col-span-2 lg:col-span-1">
                    <h3 className="capitalize text-xl md:text-2xl font-semibold">get in touch</h3>
                    <p className="text-gray-800">Stay connected with us and know the latest updates about our services through various social media</p>
                    <div className="flex gap-4">
                        <div className="bg-primary p-2 rounded-full text-white">
                            <Facebook className="h-6 w-6" />
                        </div>
                        <div className="bg-primary p-2 rounded-full text-white">
                            <Twitter className="h-6 w-6" />
                        </div>
                        <div className="bg-primary p-2 rounded-full text-white">
                            <Instagram className="h-6 w-6" />
                        </div>
                        <div className="bg-primary p-2 rounded-full text-white">
                            <Telegram className="h-6 w-6" />
                        </div>
                    </div>
                </div>
            </div>

            <Copyright />
        </footer>
    )
}
