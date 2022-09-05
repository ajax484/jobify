import React from 'react'
import { useState } from 'react';
import Airbnb from '../../Assets/Img/jobssection/airbnb.svg';
import Behance from '../../Assets/Img/jobssection/behance.svg';
import Dribble from '../../Assets/Img/jobssection/dribble.svg';
import Facebook from '../../Assets/Img/jobssection/facebook.svg';
import Google from '../../Assets/Img/jobssection/google.svg';
import Instagram from '../../Assets/Img/jobssection/instagram.svg';
import Button from '../../Components/Button/Button';
import { JobCard } from '../../Components/JobCard/JobCard';

const jobsList = [
    {
        logo: Google,
        company: 'Google',
        location: 'Lagos, Nigeria',
        position: 'Software Engineer',
        description: 'You will be expected be stragic to lead the company’s entire development team.',
        is_fulltime: 'full-time'
    },
    {
        logo: Airbnb,
        company: 'AirBnB',
        location: 'Lagos, Nigeria',
        position: 'Graphics Designer',
        description: 'You will be expected be stragic to lead the company’s entire development team.',
        is_fulltime: 'full-time'
    },
    {
        logo: Dribble,
        company: 'Dribble',
        location: 'Lagos, Nigeria',
        position: 'Senior Developer',
        description: 'You will be expected be stragic to lead the company’s entire development team.',
        is_fulltime: 'full-time'
    },
    {
        logo: Behance,
        company: 'Behance',
        location: 'Lagos, Nigeria',
        position: 'Graphics Designer',
        description: 'You will be expected be stragic to lead the company’s entire development team.',
        is_fulltime: 'full-time'
    },
    {
        logo: Instagram,
        company: 'Instagram',
        location: 'Lagos, Nigeria',
        position: 'Senior Developer',
        description: 'You will be expected be stragic to lead the company’s entire development team.',
        is_fulltime: 'full-time'
    },
    {
        logo: Facebook,
        company: 'Faceboook',
        location: 'Lagos, Nigeria',
        position: 'UI/UX Designer',
        description: 'You will be expected be stragic to lead the company’s entire development team.',
        is_fulltime: 'full-time'
    },
]

export default function LatestJobs() {
    return (
        <section className="space-y-8 px-8">
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-bold">Latest Popular <span className="text-primary">Jobs</span></h1>
                <div className="flex items-center justify-center space-x-2 font-bold">
                    <p>Full time</p>
                    <FlipSwitch />
                    <p>Part time</p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {
                    jobsList.map((job, index) => <JobCard job={job} key={index} />)
                }
            </div>

                <Button text='Find more Jobs'color='primary' className="mx-auto" isformbutton={false} />
        </section>
    )
}

const FlipSwitch = () => {
    const [switched, setSwitched] = useState(false);

    return (
        <div className={`h-3 w-10 ${!switched ? 'bg-secondary' : 'bg-primary/30'} rounded-3xl flex items-center cursor-pointer transition-colors duration-150`} onClick={() => setSwitched(prevSwitched => !prevSwitched)}>
            <div style={{ transform: `translateX(${switched ? '100' : '0'}%)` }} className="h-5 w-5 bg-primary rounded-full transition-transform duration-150"></div>
        </div>
    )
}


