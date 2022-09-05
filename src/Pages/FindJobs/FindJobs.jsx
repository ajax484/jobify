import React, { useContext, useEffect, useState } from 'react';
import FilterIcon from '../../Assets/svg/FilterIcon';
import Button from '../../Components/Button/Button';
import Page from '../../Components/Page/Page';
import SearchIcon from '../../Components/Search';
import { JobCard } from '../../Components/JobCard/JobCard';
import { motion } from 'framer-motion'
import Logo from '../../Assets/Img/jobify.png';
import Loadable from '../../Components/Loadable/Loadable';

import { useGetJobs, useUserJobsData } from '../../Utils/Hooks';
import JobOverlay from '../../Components/JobOverlay/JobOverlay';
import { loadingImage, transition } from '../../Utils/anim';
import Form from '../../Components/Form/Form';
import FormInput from '../../Components/FormInput';
import { OverlayContext } from '../../Context/OverlayContext';
import { AlertContext } from '../../Context/AlertContext';
import Dropdown from '../../Components/Dropdown/Dropdown';
import FormCheckBox from '../../Components/FormCheckBox/FormCheckBox';

const initialSearchValues = {
    searchInput: '',
    location: '',
    apply_filter: false,
    is_fulltime: '',
    is_remote: '',
    is_available: ''
}

const FindJobs = () => {
    const { jobsList, loading: jobsListLoading } = useGetJobs();
    const [loading, setLoading] = useState(true);
    const [filteredJobsList, updateJobsList] = useState(null);

    useEffect(() => {
        if (filteredJobsList === null) return;
        setLoading(false)
    }, [filteredJobsList]);

    useEffect(() => {
        if (jobsListLoading) return;
        updateJobsList(jobsList);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [jobsListLoading, jobsList])

    const searchJob = (values) => {
        setLoading(true);
        const { searchInput, location, apply_filter, is_fulltime, is_remote, is_available } = values;
        let newFilteredJobsList = [...jobsList];

        if (searchInput !== '') {
            newFilteredJobsList = newFilteredJobsList.filter(
                (job) => {
                    let jobPosition = job.data.position.toLowerCase();
                    return jobPosition.includes(searchInput)
                })
        }

        if (location !== '') {
            newFilteredJobsList = newFilteredJobsList.filter(
                (job) => {
                    let jobLocation = job.data.location.toLowerCase();
                    return jobLocation.includes(location)
                })
        }

        if (apply_filter) {
            if (is_remote !== '') newFilteredJobsList = newFilteredJobsList.filter(job => job.data.is_remote === is_remote)

            if (is_available !== '') newFilteredJobsList = newFilteredJobsList.filter(job => job.data.is_available === is_available)

            if (is_fulltime !== '') newFilteredJobsList = newFilteredJobsList.filter(job => job.data.is_fulltime === is_fulltime)
        }

        updateJobsList(newFilteredJobsList);
    }

    return (
        <Page className="space-y-8">
            <SearchForm searchJob={searchJob} />

            <Loadable
                fallback={
                    <motion.img
                        variants={loadingImage}
                        initial="init"
                        animate="anim"
                        transition={transition}
                        src={Logo}
                        className="h-10 md:h-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        alt="loading image"
                    />
                }
                isloading={loading}
            >
                <JobsList jobsList={filteredJobsList} loading={loading} />
            </Loadable>
        </Page>
    );
}

const SearchForm = ({ searchJob }) => {

    return (
        <section className="">
            <Form
                initialValues={initialSearchValues}
                className="flex flex-col md:flex-row items-center justify-between gap-4"
                onSubmit={searchJob}
            >
                <div className="grid grid-cols-2 gap-x-4 w-full">
                    <FormInput
                        type="text"
                        field="searchInput"
                        placeholder="e.g. Software Engineer"
                        color='transparent'
                        width='full'
                    />
                    <FormInput
                        type="text"
                        field="location"
                        placeholder="e.g. Lagos"
                        color='transparent'
                        width='full'
                    />
                </div>
                <div className="flex gap-x-4">
                    <Button
                        color='primary'
                        text="Search"
                        icon={<SearchIcon />}
                        type="submit"
                        size={window.innerWidth > 768 ? 'fit' : 'full'}
                        isformbutton={true}
                    />

                    <Dropdown
                        button={
                            <Button
                                color='tertiary'
                                text="Filter"
                                icon={<FilterIcon />}
                                type="button"
                                size={window.innerWidth > 768 ? 'fit' : 'full'}
                                isformbutton={false}
                            />
                        }
                    >
                        <div className="capitalize text-gray-700 divide-y-2">
                            <div className="flex gap-2 bg-gray-200 text-black px-4 py-2 uppercase font-bold">
                                <FormCheckBox
                                    field='apply_filter'
                                />
                                <span>apply filter</span>
                            </div>
                            <div className="flex gap-2 px-4 py-2">
                                <FormCheckBox
                                    field='is_fulltime'
                                />
                                <span>full time</span>
                            </div>
                            <div className="flex gap-2 px-4 py-2">
                                <FormCheckBox
                                    field='is_remote'
                                />
                                <span>remote</span>
                            </div>
                            <div className="flex gap-2 px-4 py-2">
                                <FormCheckBox
                                    field='is_available'
                                />
                                <span>available</span>
                            </div>
                        </div>
                    </Dropdown>
                </div>
            </Form>
        </section>
    )
}

const JobsList = ({ jobsList, loading }) => {
    const { openOverlay, closeOverlay } = useContext(OverlayContext);
    const { userJobsData, loading: userJobsDataloading, USERJOBFIELDS, updateUserJobData } = useUserJobsData();
    const alertContext = useContext(AlertContext);

    const jobActions = (jobId, action) => {
        if (updateUserJobData(jobId, action)) {
            alertContext.addAlert({
                type: "success",
                label: `successfully ${action} job`
            })
        } else {
            alertContext.addAlert({
                type: "error",
                label: "An error has occurred"
            })
        }
    }

    const showJobData = (index) => {
        openOverlay(<JobOverlay jobObj={jobsList[index]} closeOverlay={closeOverlay} jobActions={jobActions} />)
    }


    return (
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 min-h-[300px]">
            {
                jobsList.length > 0 && !loading
                    ?
                    jobsList.map(
                        (job, index) => (
                            <JobCard
                                job={job.data}
                                id={job.id}
                                key={index}
                                openOverlay={() => showJobData(index)}
                                jobActions={jobActions}
                                USERJOBFIELDS={USERJOBFIELDS}
                                savedCheck={userJobsDataloading ? !userJobsDataloading : userJobsData['saved'].includes(job.id)}
                                archivedCheck={userJobsDataloading ? !userJobsDataloading : userJobsData['archived'].includes(job.id)}
                            />
                        )
                    )
                    :
                    <div>Welp we have a problem</div>
            }
        </section >
    )
}



export default FindJobs;
