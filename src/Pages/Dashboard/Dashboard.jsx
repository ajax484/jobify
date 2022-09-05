import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '../../Assets/svg/DeleteIcon';
import Button from '../../Components/Button/Button';
import DashboardCard from '../../Components/DashboardCard/DashboardCard';
import Loadable from '../../Components/Loadable/Loadable';
import Page from '../../Components/Page/Page';
import { db } from '../../Utils/Firebase.config';
import { useUserJobsData } from '../../Utils/Hooks';

const dashboardItems = [
    {
        title: "applied",
        caption: "jobs you have applied to",
        card: true,
        tab: true
    },
    {
        title: "matches",
        caption: "jobs you have been matched to",
        card: true,

    },
    {
        title: "interviews",
        caption: "jobs you have been interviewed for",
        card: true
    },
    {
        title: "offers",
        caption: "offers you have received",
        card: true
    },
    {
        title: "saved",
        caption: "offers you have received",
        card: false
    },
    {
        title: "archived",
        caption: "offers you have received",
        card: false
    },
]

const Dashboard = () => {
    const [tabState, setTabState] = useState({ activeTab: 0, activeTabJobs: [], activeTabLoading: true });
    const { userJobsData, loading: userJobsDataLoading, fetchUserJobsData } = useUserJobsData();

    const switchTab = async (currTab) => {
        setTabState(prevTabState => { return { ...prevTabState, activeTabLoading: true } })

        const title = dashboardItems[currTab].title;
        const jobsId = userJobsData[title];
        let activeTabJobs = [];

        for (let id of jobsId) {
            const job = await fetchJob(id);
            activeTabJobs.push(job);
        }

        setTimeout(() => setTabState({ activeTab: currTab, activeTabJobs, activeTabLoading: false }), 500)
    }

    const fetchJob = async (id) => {
        try {
            const docRef = doc(db, "jobs", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                // console.log("Document data:", docSnap.id, docSnap.data());
                return { id: docSnap.id, ...docSnap.data() }
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                return;
            }
        } catch (error) {
            console.log(error);
        }
    }

    const deleteJob = async (targetId) => {
        const { activeTab } = tabState;
        const title = dashboardItems[activeTab].title;
        const jobsId = userJobsData[title];
        const newJobsId = [...jobsId].filter(id => targetId !== id);

        try {
            const docRef = doc(db, "userJobsData", userJobsData.id);
            await updateDoc(docRef, {
                [title]: newJobsId
            });

            fetchUserJobsData()
            console.log(jobsId, newJobsId, targetId);
            return true;

        } catch (error) {
            console.log(error);
            return false;
        }
    }

    useEffect(() => {
        if (userJobsDataLoading) return;
        const { activeTab } = tabState;

        switchTab(activeTab);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userJobsDataLoading, userJobsData]);


    return (
        <Page className="space-y-12">
            <section className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-8 min-h-[150px] relative">
                {
                    [...dashboardItems].filter((item) => item.card).map((item, index) => {
                        const count = !userJobsDataLoading && userJobsData[item.title] ? userJobsData[item.title].length : 'X'
                        return (
                            <DashboardCard
                                key={index}
                                dashboardItem={item}
                                count={count}
                            />
                        )
                    })
                }
            </section>

            <Tab
                tabState={tabState}
                switchTab={switchTab}
                deleteJob={deleteJob}
            />
        </Page>
    );
}

const Tab = ({ tabState, switchTab, deleteJob }) => {
    const { activeTab, activeTabJobs, activeTabLoading } = tabState;

    const TabJobListItem = ({ job }) => (
        <li className="w-full grid grid-cols-3 items-center text-center py-2 px-4 text-lg capitalize bg-secondary rounded-md">
            <span className="">{job.position}</span>
            <span>{job.company}</span>
            <span className="ml-auto">
                <Button
                    color='primary'
                    text="delete"
                    icon={<DeleteIcon />}
                    type="button"
                    onClick={() => deleteJob(job.id)}
                    size="fit"
                    padding='tight'
                />
            </span>
        </li>
    )
    return (
        <section className="space-y-4">
            <div className="overflow-x-auto py-2">
                <ul className="flex bg-gray-200 rounded-md w-fit divide-x-2 divide-gray-50">
                    {
                        dashboardItems
                            .map(
                                (item, index) => (
                                    <li key={index}>
                                        <button className={`${activeTab === index ? 'bg-background' : ''} text-sm md:text-base font-bold text-gray-800 px-1.5 md:px-3 lg:px-6 py-1 md:py-1.5`} onClick={() => switchTab(index)}>
                                            {item.title}
                                        </button>
                                    </li>
                                )
                            )
                    }
                </ul>
            </div>

            <ul className="w-full h-fit min-h-[150px] bg-white flex flex-col items-center rounded-lg p-1.5 gap-1.5">
                <Loadable
                    fallback={<div className="flex self-center justify-center">loading</div>}
                    isloading={activeTabLoading}
                >
                    {activeTabJobs.length > 0 ?
                        activeTabJobs.map((job, index) => <TabJobListItem job={job} key={index} />)
                        :
                        <div className="flex self-center justify-center">nothing here</div>
                    }
                </Loadable>
            </ul>
        </section>
    )
}


export default Dashboard;

