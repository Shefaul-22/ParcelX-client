import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaEye, FaUserCheck } from 'react-icons/fa';
import { IoPersonRemoveSharp } from 'react-icons/io5';
import { FaTrashCan } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const ApproveRiders = () => {
    const axiosSecure = useAxiosSecure();

    const { refetch, data: riders = [] } = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/riders');
            return res.data;
        }
    })

    const updateRiderStatus = (rider, status) => {
        const updateInfo = { status: status, email: rider.email }
        axiosSecure.patch(`/riders/${rider._id}`, updateInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Rider status is set to ${status}.`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }

    const handleApproval = rider => {
        updateRiderStatus(rider, 'approved');
    }

    const handleRejection = rider => {
        updateRiderStatus(rider, 'rejected')
    }

    const handleParcelDelete = rider => {
        console.log(rider);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/riders/${rider._id}`)
                    .then(res => {
                        console.log(res.data);

                        if (res.data.deletedCount) {
                            // refresh the data in the ui
                            refetch();

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your parcel request has been deleted.",
                                icon: "success"
                            });
                        }

                    })


            }
        });

    }


    return (
        <div>
            <h2 className="text-5xl">Riders Pending Approval: {riders.length} </h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>District</th>
                            <th>Application Status</th>
                            <th>Work Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            riders.map((rider, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{rider.name}</td>
                                <td>{rider.email}</td>
                                <td>{rider.district}</td>
                                <td>
                                    <p className={`${rider.status === 'approved' ? 'text-green-800' : 'text-red-500'}`}>{rider.status}</p>
                                </td>
                                <td>{rider.workStatus}</td>
                                <td>
                                    <button
                                        className='btn'>
                                        <FaEye></FaEye>
                                    </button>
                                    <button
                                        onClick={() => handleApproval(rider)} className='btn'>
                                        <FaUserCheck />
                                    </button>
                                    <button
                                        onClick={() => handleRejection(rider)}
                                        className='btn'>
                                        <IoPersonRemoveSharp />
                                    </button>
                                    <button 
                                    onClick={() => handleParcelDelete(rider)}
                                    className='btn'>
                                        <FaTrashCan />
                                    </button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApproveRiders;