import React from 'react'
import ScrollAnimatedText from '../../Components/ScrollAnimatedText'
import ScrollElement from '../../Components/ScrollElement'
import { letter, slideUpAndVisible, transition, word } from '../../Utils/anim';
import NFT6 from '../../Assets/Img/NFTs/NFT6.jpg';
import NFT7 from '../../Assets/Img/NFTs/NFT7.webp';
import NFT8 from '../../Assets/Img/NFTs/NFT8.jpg';
import NFT9 from '../../Assets/Img/NFTs/NFT9.webp';
import NFT10 from '../../Assets/Img/NFTs/NFT10.jpg';
import NFT11 from '../../Assets/Img/NFTs/NFT11.png';

const auctionList = [
    {
        image: NFT6,
        name: 'Kitty Kitty',
        creator: 'Io Asumi',
        price: '7.28'
    },
    {
        image: NFT7,
        name: 'Pixelisa',
        creator: 'Monsieur Francias',
        price: '11.52'
    },
    {
        image: NFT8,
        name: 'Drippy Chicken',
        creator: 'David Lee',
        price: '2.31'
    },
    {
        image: NFT9,
        name: 'AstroChimp',
        creator: 'Ralphie',
        price: '4.53'
    },
    {
        image: NFT10,
        name: 'Old Man Franklin',
        creator: 'Ashley leigh',
        price: '3.00'
    },
    {
        image: NFT11,
        name: 'Man On The Moon',
        creator: 'Donnie Reeds',
        price: '10.20'
    }
]

export default function UpcomingAuctions() {
    return (
        <ScrollElement
            element="section"
            variants={slideUpAndVisible}
            layout
            className="space-y-6 mb-8 text-white"
            transition={transition}
        >
            <ScrollAnimatedText
                element="h1"
                wordvariants={word}
                lettervariants={letter}
                transition={transition}
                issentence={true}
                className="text-2xl sm:text-3xl text-white font-bold text-center md:text-left mb-4">
                Upcoming Auctions
            </ScrollAnimatedText>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                {
                    auctionList.map(item => (<AuctionItem key={item.name} item={item} />))
                }
            </div>
        </ScrollElement>
    )
}

const AuctionItem = ({ item }) => (
    <div className="border-green-700 border-[1px] p-2 md:p-4 space-y-4">
        <div className="border-white border-[1px] h-[150px] relative">
            <img src={item.image} className="h-full w-full" alt="" />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 opacity-100 hover:opacity-0 transition-opacity duration-150 flex flex-col justify-evenly items-center text-center">
                <h2 className="text-sm md:text-base font-secondary">{item.name}</h2>
                <h3 className="text-xs md:text-sm">Created by {item.creator}</h3>
                <h4 className="text-xs md:text-sm">{item.price}ETH</h4>
            </div>
        </div>
        <p className="text-sm leading-tight text-primary">
            Lörem ipsum agnostitologi positiv anteck. Guligt miltonpengar då nylig. Härade devaren bån kronögt. Halig.  Härade devaren  Härade
        </p>
    </div>
)