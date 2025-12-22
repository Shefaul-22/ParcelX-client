import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

import Swal from 'sweetalert2';

const AssignedDeliveries = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['parcels', user?.email, 'driver_assigned'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/rider?riderEmail=${user.email}&deliveryStatus=driver_assigned`)

            return res.data;
        }
    })

    // console.log(user);
    // console.log(parcels);
    const handleDeliveryStatusUpdate = (parcel, status) => {
        const statusInfo = {
            deliveryStatus: status,
            riderId: parcel.riderId,
            trackingId: parcel.trackingId
        }

        let message = `Parcel Status is updated with ${status.split('_').join(' ')}`

        axiosSecure.patch(`/parcels/${parcel._id}/status`, statusInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: message,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleRejectDelivery = (parcel) => {

        const rejectInfo = {
            deliveryStatus: 'pending-pickup',
            riderId: parcel.riderId
        }

        Swal.fire({
            title: "Are you sure?",
            text: "You want to reject this delivery",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            confirmButtonText: "Yes, Reject"
        }).then(result => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/parcels/${parcel._id}/reject`, rejectInfo)
                    .then(res => {
                        if (res.data.modifiedCount) {

                            refetch();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Delivery rejected",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }

        })

        // console.log(parcel, 'button clicked');
    }

    return (
        <div>
            <h2 className="text-4xl">Parcels Pending Pickup: {parcels.length}</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Confirm</th>
                            <th>Other Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parcels.map((parcel, i) => <tr key={parcel._id}>
                            <th>{i + 1}</th>
                            <td>{parcel.parcelName}</td>
                            <td>
                                {
                                    parcel.deliveryStatus === 'driver_assigned'
                                        ? <>
                                            <button
                                                onClick={() => handleDeliveryStatusUpdate(parcel, 'rider_arriving')}
                                                className='btn btn-primary text-black'>Accept</button>

                                            <button

                                                onClick={() => handleRejectDelivery(parcel)}

                                                className='btn btn-warning text-black ms-2'>Reject</button>
                                        </>
                                        : <span>Accepted</span>
                                }

                            </td>
                            <td>

                                {
                                    parcel.deliveryStatus === 'rider_arriving' ?
                                        <button
                                            onClick={() => handleDeliveryStatusUpdate(parcel, 'parcel_picked_up')}
                                            className='btn btn-primary text-black'>Mark as Picked Up
                                        </button> 
                                        :
                                        parcel.deliveryStatus==='parcel_picked_up' &&
                                        <span>Mark as Picked</span>
                                }
                                
                                {
                                    parcel.deliveryStatus ==='parcel_picked_up' && <button
                                    onClick={() => handleDeliveryStatusUpdate(parcel, 'parcel_delivered')}
                                    className='btn btn-primary text-black mx-2'>Mark as Delivered</button>
                                }
                            </td>
                        </tr>)}


                    </tbody>
                </table>
            </div>

        </div >
    );
};

export default AssignedDeliveries;