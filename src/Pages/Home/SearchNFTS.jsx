import React from 'react';
import { motion } from 'framer-motion';
import { slideDownAndStretch, slideOutAndVisible, slideUpAndVisible, transition, visibleNav, visibleNavChildren } from '../../Utils/anim';
import SearchIcon from '../../Assets/svg/Search';
import NFT1 from '../../Assets/Img/NFTs/NFT1.png';
import NFT2 from '../../Assets/Img/NFTs/NFT2.png';
import NFT3 from '../../Assets/Img/NFTs/NFT3.jpg';
import ScrollElement from '../../Components/ScrollElement';
import Pagination from '../../Components/Pagination';

const NFTItems = [
    {
        id: 1,
        name: 'NFT#5367',
        price: '34ETH',
        image: NFT1
    },
    {
        id: 2,
        name: 'Astro Kid #3456',
        price: '34ETH',
        image: NFT2
    },
    {
        id: 3,
        name: 'Trippy David #3872',
        price: '34ETH',
        image: NFT3
    }
]


export default function SearchNFTS() {
    return (
        <ScrollElement
            element="section"
            variants={slideUpAndVisible}
            layout
            className="space-y-6 mb-8"
            transition={transition}
        >
            <SearchBar />
            <NFTList />
            <Pagination />
        </ScrollElement>
    )
}

const SearchBar = () => (
    <div className="space-x-4 grid grid-cols-4 gap-2 md:gap-4">
        <motion.div
            layout htmlFor="search" className="col-span-3 relative" variants={slideOutAndVisible}
            initial="initial" animate="visible" 
            transition={{
                ...transition,
                delay: 1.5
            }}
        >
            <SearchIcon className="h-10 text-white absolute left-2 top-0 bottom-0 w-5" />
            <input type="text" className="w-full bg-transparent border-gradient py-2 px-8 text-white" placeholder='Search for all products' name='search' />
        </motion.div>

        <motion.select name="sort_by" id="sort_by" variants={slideDownAndStretch} initial="initial" animate="visible" transition={transition} className="bg-transparent border-gradient py-2 px-4 text-white"></motion.select>
    </div>
)

function NFTList() {
    return (
        <div className="text-white grid md:grid-cols-3 gap-4 mb-4">
            {NFTItems.map(item => (<NFTItem key={item.id} item={item} />))}
        </div >
    )
}

const NFTItem = ({ item }) => (
    <div>
        <div className="relative p-3 border-[1px] border-green-700">
            <img src={item.image} className="h-[150px] md:h-[200px] lg:h-[250px] w-full" alt="" />
            <div className="absolute bottom-0 left-0 w-full flex flex-col md:flex-row items-center md:items-start gap-y-2 md:gap-y-0 p-6 bg-black/70 text-xs md:text-sm lg:text-base">
                <h2 className="md:mx-auto font-secondary text-center">{item.name}</h2>
                <h2 className="md:ml-auto">{item.price}</h2>
            </div>
        </div>
        <div className="space-y-2">
            <button className="button button-primary font-secondary text-sm w-full px-4 py-0.5 md:py-2 text-black">Buy</button>
            <button className="button button-tertiary font-secondary text-sm w-full px-4 py-0.5 md:py-2">Swap</button>
        </div>
    </div>
)
