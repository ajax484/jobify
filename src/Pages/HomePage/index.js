import React from 'react';
import Header from './Header';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import LatestJobs from './LatestJobs';
import LogoSection from './LogoSection';
import WhyTrusted from './WhyTrusted';

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <LogoSection />
            <HowItWorks />
            {/* <LatestJobs /> */}
            <WhyTrusted />
        </main >
    )
}
