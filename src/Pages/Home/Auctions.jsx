import React from 'react'
import ScrollAnimatedText from '../../Components/ScrollAnimatedText'
import ScrollElement from '../../Components/ScrollElement'
import { letter, word, slideUpAndVisible, transition } from '../../Utils/anim';
import NFT3 from '../../Assets/Img/NFTs/NFT3.jpg';
import NFT4 from '../../Assets/Img/NFTs/NFT4.png';
import NFT5 from '../../Assets/Img/NFTs/NFT5.png';

const AuctionItems = [
    {
        id: 1,
        name: 'Neo Bull #574',
        price: '6.78ETH',
        image: NFT5
    },
    {
        id: 2,
        name: 'Trippy David #3872',
        price: '6.78ETH',
        image: NFT3
    },
    {
        id: 3,
        name: 'Lion geared #675',
        price: '6.78ETH',
        image: NFT4
    }
]

export default function Auctions() {
    return (
        <ScrollElement
            element="section"
            variants={slideUpAndVisible}
            transition={{
                ...transition,
                delayChildren: 1.5,
            }}
            layout
            className="mt-8 mb-16 space-y-4"
        >
            <ScrollAnimatedText
                element="h1"
                wordvariants={word}
                lettervariants={letter}
                transition={transition}
                issentence = {false}
                className="text-2xl sm:text-3xl text-white font-bold text-center md:text-left">
                Auctions
            </ScrollAnimatedText>

            <AuctionList />
        </ScrollElement>
    )
}

function AuctionList() {
    return (
        <div className="text-white grid sm:grid-cols-3 gap-4 mb-4">
            {AuctionItems.map(item => (<AuctionItem key={item.id} item={item} />))}
        </div >
    )
}

const AuctionItem = ({ item }) => (
    <div className="border-[1px] border-green-700 p-3 space-y-6">
        <div className="relative border-[1px] border-white">
            <img src={item.image} className="h-[150px] w-full" alt="" />
            <div className="absolute bottom-0 left-0 w-full flex py-3 px-6 bg-black/70">
                <h2 className="mx-auto font-secondary text-xs md:text-sm text-center">{item.name}</h2>
            </div>
        </div>

        <div className="space-y-2 text-sm md:text-base">
            <div className="flex justify-between">
                <span>{item.price}</span>
                <span>6 bidders</span>
            </div>
            <p>
                Lörem ipsum agnostitologi positiv anteck. Guligt miltonpengar då nylig. Härade devaren bån kronögt. Halig.  Härade devaren  Härade
            </p>
        </div>

        <div className="space-y-4">
            <button className="button button-primary font-secondary text-sm w-full px-4 py-2 text-black">Bid</button>
            <button className="button !border-[1px] button__border-gradient font-secondary text-sm w-full px-4 py-2">Add To Wishlist</button>
        </div>
    </div>
)
