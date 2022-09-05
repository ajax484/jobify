import React from 'react';
import CheckCircle from '../../Assets/svg/CheckCircle';
import CloudUpload from '../../Assets/svg/CloudUpload';
import UserIcon from '../../Assets/svg/User';
import SearchIcon from '../../Components/Search';

const steps = [
    {
        icon: <UserIcon className="h-6 w-6 text-green-500" />,
        heading: 'create account',
        description: 'First you have to create account'
    },
    {
        icon: <CloudUpload className="h-6 w-6 text-yellow-500" />,
        heading: 'upload cv/resume',
        description: 'For a job you have to upload your best cv  or resume'
    },
    {
        icon: <SearchIcon className="h-6 w-6" />,
        heading: 'Search job',
        description: 'Find your next big job using search'
    },
    {
        icon: <CheckCircle className="h-6 w-6 text-orange-500" />,
        heading: 'Apply',
        description: 'Finally you apply for your dream job'
    },
]

export default function HowItWorks() {
    return (
        <section className="h-screen grid md:grid-cols-2 items-center px-6 md:px-8 lg:px-12 my-8 md:my-16">
            <div className="space-y-2 md:space-y-4 text-center md:text-left">
                <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl">How it works?</h1>
                <h2 className="font-bold text-2xl sm:text-3xl md:text-5xl">Follow <br className="hidden md:block" /> 4 easy steps</h2>
                <p className="md:text-lg">
                    Follow this few step to get started
                    and get your dream job
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:gap-8 md:px-4 lg:px-8">
                <div className="md:space-y-6 lg:space-y-8 contents md:block">
                    {
                        [...steps].filter((el, index) => (index % 2) === 0).map((step, index) => (<InfoCard key={index} step={step} />))
                    }
                </div>

                <div className="md:mt-8 md:space-y-6 lg:space-y-8 contents md:block">
                    {
                        [...steps].filter((el, index) => (index % 2) !== 0).map((step, index) => (<InfoCard key={index} step={step} />))
                    }
                </div>
            </div>
        </section>
    )
}

const InfoCard = ({ step }) => (
    <div className="flex flex-col items-center px-4 py-4 md:py-8 lg:py-10 bg-white space-y-3 border-[1px] shadow-sm rounded-md">
        {step.icon}
        <h2 className="font-bold text-center">{step.heading}</h2>
        <p className="text-center">{step.description}</p>
    </div>
)