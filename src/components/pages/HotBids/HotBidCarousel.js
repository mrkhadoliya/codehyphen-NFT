import React from 'react'
import Carousel from 'react-elastic-carousel'; 
import styled from 'styled-components'
import { HotBidCard } from './HotBidCard';
import HotBidCarouselData from './HotBidCarouselData';



export const HotBidCarousel = () => {
    
    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 500, itemsToShow: 2},
        {width: 768, itemsToShow: 3},
        {width: 1200, itemsToShow: 4}
    ]

    return (
        <Carousel breakPoints={breakPoints}>
            <HotBidCard
                imgtravis={HotBidCarouselData[0].imgtravis} 
                checkicon={HotBidCarouselData[0].checkicon}
                title={HotBidCarouselData[0].title}
                links={HotBidCarouselData[0].links}
            />
            <HotBidCard
                imgtravis={HotBidCarouselData[0].imgtravis} 
                checkicon={HotBidCarouselData[0].checkicon}
                title={HotBidCarouselData[0].title}
                links={HotBidCarouselData[0].links}
            />
            <HotBidCard
                imgtravis={HotBidCarouselData[0].imgtravis} 
                checkicon={HotBidCarouselData[0].checkicon}
                title={HotBidCarouselData[0].title}
                links={HotBidCarouselData[0].links}
            />
            <HotBidCard
                imgtravis={HotBidCarouselData[0].imgtravis} 
                checkicon={HotBidCarouselData[0].checkicon}
                title={HotBidCarouselData[0].title}
                links={HotBidCarouselData[0].links}
            />
            <HotBidCard
                imgtravis={HotBidCarouselData[0].imgtravis} 
                checkicon={HotBidCarouselData[0].checkicon}
                title={HotBidCarouselData[0].title}
                links={HotBidCarouselData[0].links}
            />
            <HotBidCard
                imgtravis={HotBidCarouselData[0].imgtravis} 
                checkicon={HotBidCarouselData[0].checkicon}
                title={HotBidCarouselData[0].title}
                links={HotBidCarouselData[0].links}
            />
        </Carousel>
    )
}
