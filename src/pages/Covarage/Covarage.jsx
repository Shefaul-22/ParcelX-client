import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';

const Covarage = () => {

    const position = [23.6850, 90.3563]

    const serviceCenterData = useLoaderData();
    console.log(serviceCenterData);


    return (
        <div>
            <h2 className='text-center font-bold my-12'>We are available in 64 districts</h2>
            <div>

            </div>

            <div className='border w-full h-[1200px]'>
                <MapContainer
                    center={position}
                    zoom={8}
                    scrollWheelZoom={false}
                    className='h-[1200px]'
                >

                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {
                        serviceCenterData.map( (center,index) => <Marker position={[center.latitude, center.longitude]} key={index}>

                            <Popup>
                                {center.district} <br /> Service Area: {center.covered_area.join(', ')}
                            </Popup>


                        </Marker>)
                    }

                </MapContainer>
            </div>
        </div>
    );
};

export default Covarage;