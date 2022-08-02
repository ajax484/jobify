import React from 'react';
import ScrollAnimatedText from '../../Components/ScrollAnimatedText';
import { letter, word, transition, visibleNavChildren, visibleNav } from '../../Utils/anim';
import AboutImg from '../../Assets/Img/AboutImg.png';
import Counter from '../../Components/Counter';
import Coinbase from '../../Assets/Img/Logo/coinbase.png';
import Trezor from '../../Assets/Img/Logo/trezor.png';
import Bitgo from '../../Assets/Img/Logo/bitgo.png';
import exodus from '../../Assets/Img/Logo/exodus.png';
import ScrollElement from '../../Components/ScrollElement';

const counterList = [
    {
        from: 0,
        to: 2000,
        name: 'Auctions'
    },
    {
        from: 0,
        to: 1000,
        name: 'Artworks'
    },
    {
        from: 0,
        to: 65000,
        name: 'Projects'
    },
]

export default function About() {
    return (
        <section className="mt-16 mb-12 w-full md:w-4/5 lg:w-3/5 mx-auto">
            <ScrollAnimatedText
                element="h1"
                wordvariants={word}
                lettervariants={letter}
                transition={transition}
                issentence={true}
                className="text-2xl sm:text-3xl text-white font-bold text-center mb-4">
                What Do You Know About Us?
            </ScrollAnimatedText>

            <ScrollElement
                element="div"
                variants={{
                    initial: { opacity: 0 },
                    visible: { opacity: 1 }
                }}
                transition={transition}
                className="relative px-8 py-6 mb-16"
            >
                <div>
                    <img src={AboutImg} className="absolute top-0 left-0 h-full w-full -z-20" alt="" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/70 -z-10"></div>
                </div>
                <p className="text-sm md:text-base text-white mb-8">
                    Lörem ipsum fak nenas. Doska ende astrotikyning. Päliga laddhybrid pumyrtad. Renyss kvasinde i diliga triment. Konvalens ROPO.
                    Songen semill bästsäljerism. Spekur plarad polyrede polysan. Berad plassade. Vinas autogisk, ett önade mir. Ofesm täska vanyra.
                    Svennekoloni hashtag tisamma i prekuliga. Trevav euronat om än reboras, degt. Saviktig delig ikigai. Mellanförskap popcornhjärna liksom supralogi. Bionyns planid då distansbatong.
                    Foning ok. Mikronas bes, plabel. Lar. Infraktiga. Kvasiv proskop, min. Du kan vara drabbad.
                    Cli-fi tisa telerar. Homol smart content hivis. Funde vara på tårna mikroliga. Trengen kurade kroskapet tills ontocentrism. Dor.
                    Growth hacking. Tinade kypovis. Nerväxt sor plat. Antropotiv dirad. Symis epiboska.
                    Åsor krok. Rena suskap mäligt. Begt seduck och passivhus. Durtad böngen. VAR lågaffektivt bemötande.
                    Brännskräp tälig religt. Nysav ber. Ekodukt vipar, opoligt prepusa. Rusade telektigt. Accelerator manar ifall intran pladelingar.
                    Di
                </p>
                <div className="text-white flex justify-evenly mb-8">
                   {
                    counterList.map(counter => <CounterItem counter={counter} key={counter.name + " counter"} />)
                   }
                </div>
                <div className="gap-6 flex justify-center">
                    <button className="button-primary button polygon py-2 px-2 md:px-5 text-black font-semibold">
                        Explore
                    </button>
                    <button className="button-secondary button py-2 px-2 md:px-5 text-white font-semibold">
                        Learn More
                    </button>
                </div>
            </ScrollElement>

            <ScrollElement
                element="div"
                variants={visibleNav}
                transition={transition}
                layout
                className="flex justify-around"
            >
                {
                    [Coinbase, Trezor, Bitgo, exodus].map((img, index) => (
                        <ScrollElement
                            element="img"
                            transition={{
                                ...transition,
                                delay: index * 0.1,
                            }}
                            variants={visibleNavChildren}
                            key={index}
                            src={img}
                            className="h-8 md:h-12"
                            alt={`about img ${index}`}
                        />
                    ))
                }
            </ScrollElement>

        </section>
    )
}

const CounterItem = ({counter}) => (
    <div className="flex flex-col space-y-4 text-center">
        <Counter transition={transition} className="gradient-text text-xl sm:text-2xl md:text-3xl font-secondary font-bold" from={counter.from} to={counter.to} />
        <span className="text-primary text-sm md:text-base">{counter.name}</span>
    </div>
)