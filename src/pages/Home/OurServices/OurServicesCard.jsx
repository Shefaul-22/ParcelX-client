import React from 'react';

const OurServicesCard = ({services}) => {
    // console.log(services);
    return (
        <div className='text-center space-y-4 p-6 bg-white rounded-2xl text-[#03373D] hover:bg-[rgb(132,224,78)] transition-transform duration-1000 cursor-pointer'>

            <div className='flex justify-center'>
                <img className='w-20 h-20 rounded-full' src={services.image} alt="image" />
            </div>

            <h3 className='font-bold text-2xl mt-3'>{services.title}</h3>

            <p className='font-medium text-[#606060]'>{services.description}</p>
            
        </div>
    );
};

export default OurServicesCard;