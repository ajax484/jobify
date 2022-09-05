import React from 'react';
import LargeImage from '../../Assets/Img/whytrustedsection/largeimage.png';
import SmallImage1 from '../../Assets/Img/whytrustedsection/smallimage1.png';
import SmallImage2 from '../../Assets/Img/whytrustedsection/smallimage2.png';
import SmallImage3 from '../../Assets/Img/whytrustedsection/smallimage3.png';
import SmallImage4 from '../../Assets/Img/whytrustedsection/smallimage4.png';
import SmallImage5 from '../../Assets/Img/whytrustedsection/smallimage5.png';
import CheckCircle from '../../Assets/svg/CheckCircle';
import Button from '../../Components/Button/Button';

export default function WhyTrusted() {
    return (
        <section className="h-screen mt-32 grid grid-cols-2 items-center">
            <div className="flex justify-center items-center">
                <div className="w-fit h-fit relative">
                    <img src={LargeImage} className="relative z-20" alt="" />
                    <img src={SmallImage1} className="h-20 absolute -top-16 -left-20" alt="" />
                    <img src={SmallImage2} className="h-20 absolute -bottom-8 -left-20" alt="" />
                    <img src={SmallImage3} className="h-20 absolute -top-14 -right-10" alt="" />
                    <img src={SmallImage4} className="h-20 absolute -bottom-5 -right-20" alt="" />
                    <img src={SmallImage5} className="h-20 absolute -bottom-28 right-4" alt="" />
                </div>
            </div>

            <div className="flex flex-col px-32 gap-4">
                <h1 className="text-3xl font-bold">Why we are trusted</h1>
                <p className="text-lg leading-8">100k+ job seekers trust us for <br /> the following reasons</p>
                <ul className="flex flex-col gap-6">
                    <li className="inline-flex items-center space-x-4"><Tick /><span>Trusted & Quality Job</span></li>
                    <li className="inline-flex items-center space-x-4"><Tick /><span>International Job</span></li>
                    <li className="inline-flex items-center space-x-4"><Tick /><span>Top Companies</span></li>
                    <li className="inline-flex items-center space-x-4"><Tick /><span>No Extra Charge</span></li>
                </ul>
                <Button text='Get Started'color='primary' isformbutton={false} />
            </div>
        </section>
    )
}

const Tick = () => (
    <span className="bg-primary text-white rounded-full text-sm h-6 w-6 flex justify-center items-center">
        √
    </span>
)
