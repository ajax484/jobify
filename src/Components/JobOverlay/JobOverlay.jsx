import React, { useRef } from 'react';
import CloseIcon from '../../Assets/svg/CloseIcon';
import CaretRight from '../../Assets/svg/CaretRight';
import Button from '../../Components/Button/Button';
import Briefcase from '../../Assets/svg/Briefcase';
import { motion, useScroll } from "framer-motion";
import { useUserJobsData } from '../../Utils/Hooks';
import './JobOverlay.css';
import Image from '../Image/Image';

const JobOverlay = ({ jobObj, closeOverlay, jobActions }) => {
    const jobId = jobObj.id;
    const job = jobObj.data;
    const description = JSON.parse(job.description);
    const { userJobsData, loading, USERJOBFIELDS } = useUserJobsData();

    const contentRef = useRef(null);
    const { scrollYProgress } = useScroll({ container: contentRef });

    const appliedCheck = loading ? loading : userJobsData['applied'].includes(jobId);

    return (
        <div className="overlay__inner">
            <div className="progress-bar__container">
                <motion.div
                    className="progress-bar"
                    style={{ scaleX: scrollYProgress }}
                />
            </div>

            <div className="overflow-y-scroll min-h-[80%] max-h-full space-y-10 no-scrollbar p-4" ref={contentRef}>
                <div className="w-full space-y-8">
                    <div className="flex w-full justify-between">
                        <div className="flex w-full gap-8 items-center">
                            <Image
                                image={job.logo}
                                alt={job.company}
                                parentRef='joblogos'
                            />

                            <div>
                                <h1 className="text-2xl font-bold capitalize">{job.company}</h1>
                                <h3 className="text-lg capitalize">{job.location}</h3>
                            </div>
                        </div>

                        <button className="h-fit" onClick={closeOverlay}>
                            <CloseIcon className="h-8 w-8 text-gray-700" />
                        </button>
                    </div>
                    <div className="flex w-full justify-between items-center text-xl">
                        <h2 className="font-bold capitalize">{job.position}</h2>
                        <span className="inline-flex items-center gap-2">
                            <Briefcase className="w-8 h-8" /> {job.is_fulltime ? 'Full Time' : 'Part Time'}
                        </span>
                    </div>
                </div>
                <div className="space-y-6 w-full">
                    <Description description={description} />
                </div>
                <div className="ml-auto w-full">
                    <Button
                        text={appliedCheck ? 'Applied' : 'Apply'}
                        color='primary'
                        onClick={() => jobActions(jobId, USERJOBFIELDS.APPLIED)}
                        disabled={appliedCheck}
                    />
                </div>
            </div>
        </div>
    )
}

const Description = ({ description }) => (
    <>
        {
            description.map(
                (element, index) => (
                    <div key={index} className="space-y-2">
                        {
                            element.title !== null && <h2 className="text-lg font-bold capitalize">{element.title}</h2>
                        }
                        {
                            typeof element.content === "string"
                                ?
                                <p className="text-gray-800">{element.content}</p>
                                :
                                <ul className="text-gray-800 space-y-1">
                                    {
                                        element.content.map(
                                            (item, index) => (
                                                <li key={index} className="flex gap-x-4 items-start">
                                                    <div className="h-4 w-4">
                                                        <CaretRight />
                                                    </div>
                                                    {item}
                                                </li>
                                            )
                                        )
                                    }
                                </ul>
                        }
                    </div>
                )
            )
        }
    </>
)

export default JobOverlay;
