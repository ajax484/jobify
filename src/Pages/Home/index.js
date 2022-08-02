import React from 'react'
import Footer from '../../Components/Footer'
import ScrollElement from '../../Components/ScrollElement'
import { slideOut, transition } from '../../Utils/anim'
import About from './About'
import Auctions from './Auctions'
import Hero from './Hero'
import JoinCommunity from './JoinCommunity'
import SearchNFTS from './SearchNFTS'
import UpcomingAuctions from './UpcomingAuctions'

export default function Home() {
    return (
        <main className="px-4 md:px-8 lg:px-12">
            <Hero />
            <SearchNFTS />
            <ScrollElement
                element="div"
                variants={slideOut}
                transition={transition}
                className="divider"></ScrollElement>
            <Auctions />
            <ScrollElement
                element="div"
                variants={slideOut}
                transition={transition}
                className="divider"></ScrollElement>
            <About />
            <UpcomingAuctions />
            <JoinCommunity />
            <ScrollElement
                element="div"
                variants={slideOut}
                transition={transition}
                className="divider"></ScrollElement>
                <Footer />
        </main>
    )
}
