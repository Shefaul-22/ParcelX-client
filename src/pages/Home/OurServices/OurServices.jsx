import React, { useEffect, useState } from 'react';
import OurServicesCard from './OurServicesCard';

const OurServices = () => {

    const [servicesData, setServicesData] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setServicesData(data)
            })
    })
    return (
        <div className='bg-secondary rounded-md p-6 md:p-16 lg:p-20 mb-4 md:mb-7'>

            <div className='text-center pt-12 md:pt-20 lg:pt-24 space-y-4'>
                <h2 className='font-extrabold text-3xl md:text-4xl text-white'>Our Services</h2>
                <p className='px-10 md:px-40 lg:px-64 pb-4 md:pb-7 font-medium text-[#DADADA]'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                {
                    servicesData.map(services => <OurServicesCard services={services} key={services.id}></OurServicesCard>)
                }

            </div>

        </div>
    );
};

export default OurServices;