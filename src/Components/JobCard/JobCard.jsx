import React from 'react';
import Briefcase from '../../Assets/svg/Briefcase';
import HeartIcon from '../../Assets/svg/HeartIcon';
import ThreeDots from '../../Assets/svg/ThreeDots';
import { loadingImage, transition } from '../../Utils/anim';
import Button from '../Button/Button';
import { motion } from 'framer-motion';
import Dropdown from '../Dropdown/Dropdown';

import './JobCard.css';
import ArchiveIcon from '../../Assets/svg/ArchiveIcon';
import Image from '../Image/Image';

export const JobCard = ({ job, id, openOverlay, jobActions, savedCheck, archivedCheck, USERJOBFIELDS }) => {
    const description = JSON.parse(job.description);
    let shortInfo = description[0];

    const dropdownlist = [
        {
            title: 'save',
            action: () => jobActions(id, USERJOBFIELDS.SAVED),
            disabled: savedCheck
        },
        {
            title: 'archive',
            action: () => jobActions(id, USERJOBFIELDS.ARCHIVED),
            disabled: archivedCheck
        }
    ]

    return (
        <div className="jobcard__container">
            <div className="w-full space-y-2">
                <div className="flex w-full justify-between">
                    <div className="flex items-center space-x-4">
                        <Image
                            image={job.logo}
                            alt={job.company}
                            parentRef='joblogos'
                        />
                        <div>
                            <h1 className="font-bold capitalize">{job.company}</h1>
                            <h3 className="text-sm capitalize text-gray-700">{job.location}</h3>
                        </div>
                    </div>

                    <Dropdown
                        button={<ThreeDots className="h-4 w-4 text-gray-800" />}
                        dropdownlist={dropdownlist}
                    >
                        <div className="py-0.5 w-full space-y-0.5" role="none">
                            {dropdownlist.map((item, index) =>
                                <button
                                    key={index}
                                    className="text-gray-700 hover:bg-secondary disabled:bg-gray-300 disabled:text-white block px-4 py-2 text-sm w-full"
                                    onClick={item.action} role="menuitem"
                                    tabIndex={-1}
                                    disabled={item.disabled}
                                >
                                    {item.title}
                                </button>
                            )}
                        </div>
                    </Dropdown>

                </div>
                <div className="flex w-full justify-between items-center">
                    <h2 className="font-bold capitalize">{job.position}</h2>
                    <span className="inline-flex items-center gap-2">
                        <Briefcase className="w-6 h-6" /> {job.is_fulltime ? 'Full Time' : 'Part Time'}
                    </span>
                </div>
            </div>
            <div className="space-y-4 w-full text-gray-800 text-sm">
                <p>
                    {
                        typeof shortInfo.content === "string" ?
                            shortInfo.content.substr(0, 100)
                            :
                            "click to find out more"
                    }...
                </p>
                {/* <Description description={description}/> */}
            </div>
            <div className="flex justify-between items-center w-full">
                <div className="flex gap-2">
                    <HeartIcon className={`fill-primary h-6 w-6 transition-opacity duration-150 ${savedCheck ? 'block' : 'hidden'}`} />
                    <ArchiveIcon className={`fill-primary h-6 w-6 transition-opacity duration-150 ${archivedCheck ? 'block' : 'hidden'}`} />
                </div>
                <div className="ml-auto">
                    <Button
                        type="button"
                        text='Expand'
                        color='primary'
                        onClick={openOverlay}
                        isformbutton={false}
                        size="fit"
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
                    <div key={index}>
                        {
                            element.title !== null && <h1>{element.title}</h1>
                        }
                        {
                            typeof element.content === "string"
                                ?
                                <p>{element.content}</p>
                                :
                                <ul>
                                    {
                                        element.content.map(
                                            (item, index) => (
                                                <li key={index}>{item}</li>
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