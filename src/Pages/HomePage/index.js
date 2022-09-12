import React from 'react';
import Categories from './Categories';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import LatestJobs from './LatestJobs';
import LogoSection from './LogoSection';
import Mailing from './mailing';
import Testimonial from './Testimonial';
import WhyTrusted from './WhyTrusted';

export default function Home() {
    return (
        <main className="overflow-x-hidden overflow-y-auto">
            <Header />
            <Hero />
            <LogoSection />
            <HowItWorks />
            <LatestJobs />
            <WhyTrusted />
            <Categories />
            <Testimonial />
            <Mailing />
            <Footer />
        </main >
    )
}
