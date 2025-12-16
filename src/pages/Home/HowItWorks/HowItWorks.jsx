import React from 'react';
import bookingIcon from '../../../assets/bookingIcon.png';

const HowItWorks = () => {
    return (
        <div className='p-3 text-[#03373D]'>
            <h2 className='my-3 font-extrabold text-3xl text-[#03373D]'>How It Works</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <div className='p-5 space-y-3 md:space-y-4 rounded-2xl bg-white'>

                    <img src={bookingIcon} alt="A booking Icon" />
                    <h3 className='font-bold text-xl'>Booking Pick & Drop</h3>
                    <p className='font-medium'>From personal packages to business shipments — we deliver on time, every time.</p>

                </div>
                <div className='p-5 space-y-3 md:space-y-4 rounded-2xl bg-white'>

                    <img src={bookingIcon} alt="A booking Icon" />
                    <h3 className='font-bold text-xl'>Cash On Delivery</h3>
                    <p className='font-medium'> Offer secure cash on delivery options to your customers and receive payments quickly and safely.</p>

                </div>
                <div className='p-5 space-y-3 md:space-y-4 rounded-2xl bg-white'>

                    <img src={bookingIcon} alt="A booking Icon" />
                    <h3 className='font-bold text-xl'>Delivery Hub</h3>
                    <p className='font-medium'>Manage parcels efficiently through our strategically located delivery hubs for faster distribution.</p>

                </div>
                <div className='p-5 space-y-3 md:space-y-4 rounded-2xl bg-white'>

                    <img src={bookingIcon} alt="A booking Icon" />
                    <h3 className='font-bold text-xl'>Booking SME & Corporate</h3>
                    <p className='font-medium'>Customized delivery solutions designed specifically for SME and corporate clients with bulk shipment support.</p>

                </div>
            </div>

        </div>
    );
};

export default HowItWorks;