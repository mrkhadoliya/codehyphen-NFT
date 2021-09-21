import React from 'react'
import Carousel from 'react-elastic-carousel';
import { CardCarousel } from './CardCarousel';
import styled from 'styled-components'
import CollectionData from './CollectionData';

export const HotCarousel = () => {

    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 500, itemsToShow: 2},
        {width: 768, itemsToShow: 3},
        {width: 1200, itemsToShow: 4}
    ]


    return (
         <Carousel breakPoints={breakPoints}>
             <CardCarousel 
                imgsrc={CollectionData[0].imgsrc}
                avtrsrc={CollectionData[0].avtrsrc}
                checkicon={CollectionData[0].checkicon}
                title={CollectionData[0].title}
                links={CollectionData[0].links}
             />  
             <CardCarousel 
                imgsrc={CollectionData[1].imgsrc}
                avtrsrc={CollectionData[1].avtrsrc}
                checkicon={CollectionData[0].checkicon}
                title={CollectionData[1].title}
                links={CollectionData[1].links}
             />  
             <CardCarousel 
                imgsrc={CollectionData[2].imgsrc}
                avtrsrc={CollectionData[2].avtrsrc}
                checkicon={CollectionData[0].checkicon}
                title={CollectionData[2].title}
                links={CollectionData[2].links}
             />  
             <CardCarousel 
                imgsrc={CollectionData[3].imgsrc}
                avtrsrc={CollectionData[3].avtrsrc}
                checkicon={CollectionData[0].checkicon}
                title={CollectionData[3].title}
                links={CollectionData[3].links}
             />  
             <CardCarousel 
                imgsrc={CollectionData[0].imgsrc}
                avtrsrc={CollectionData[0].avtrsrc}
                checkicon={CollectionData[0].checkicon}
                title={CollectionData[0].title}
                links={CollectionData[0].links}
             />  
             <CardCarousel 
                imgsrc={CollectionData[1].imgsrc}
                avtrsrc={CollectionData[1].avtrsrc}
                checkicon={CollectionData[0].checkicon}
                title={CollectionData[1].title}
                links={CollectionData[1].links}
             />  
             <CardCarousel 
                imgsrc={CollectionData[2].imgsrc}
                avtrsrc={CollectionData[2].avtrsrc}
                checkicon={CollectionData[0].checkicon}
                title={CollectionData[2].title}
                links={CollectionData[2].links}
             />  
         </Carousel>
    )
}
