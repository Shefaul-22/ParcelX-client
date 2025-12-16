import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerIMg1 from '../../../assets/banner/banner1.png'
import bannerIMg2 from '../../../assets/banner/banner2.png'
import bannerIMg3 from '../../../assets/banner/banner3.png'




const Banner = () => {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={1000}
        >
            <div className='relative'>
                <img src={bannerIMg1} />
                <div  className="absolute inset-0 flex gap-4 top-[80%] left-2/5 -translate-x-1/2 ">
                    <button className='btn' >Track your percel</button>
                    <button className='btn' >Be a rider</button>
                </div>

            </div>
            <div>
                <img src={bannerIMg2} />

            </div>
            <div>
                <img src={bannerIMg3} />

            </div>
        </Carousel>

    );
};

export default Banner;