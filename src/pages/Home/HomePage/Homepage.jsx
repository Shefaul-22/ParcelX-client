import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../OurServices/OurServices';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';

const Homepage = () => {
    return (
        <div className='space-y-4'>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <OurServices></OurServices>
            <Brands></Brands>
            <Reviews></Reviews>
        </div>
    );
};

export default Homepage;