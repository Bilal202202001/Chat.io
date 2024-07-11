import React, { useState } from 'react';
import * as Unicons from '@iconscout/react-unicons';

export default function SideBar() {
    const [arrowIndex, setArrowIndex] = useState(null);

    const handleMouseOver = (index) => {
        setArrowIndex(index);
    };

    const handleMouseLeave = () => {
        setArrowIndex(null);
    };

    const users = [
        {
            name: "Alice Johnson",
            image: "/dp.jpeg"
        },
        {
            name: "Bob Smith",
            image: "/dp.jpeg"
        },
        {
            name: "Catherine Brown",
            image: "/dp.jpeg"
        },
        {
            name: "David Wilson",
            image: "/dp.jpeg"
        },
        {
            name: "Emily Davis",
            image: "/dp.jpeg"
        },
        {
            name: "Frank Harris",
            image: "/dp.jpeg"
        },
        {
            name: "Grace Lee",
            image: "/dp.jpeg"
        }
    ];

    return (
        <div className='w-2/6 h-full flex flex-col justify-start item-center'>
            <div className='w-full h-20 bg-gray-100 flex justify-between items-center pl-3 rounded-lg'>
                <img src='/dp.jpeg' alt='profile' className='w-11 h-11 rounded-full ' />
                <div className='w-3/5 flex justify-end items-center h-full'>
                    <Unicons.UilUsersAlt width={7} height={7} className="h-7 w-7 text-gray-500 cursor-pointer mr-3" />
                    <Unicons.UilAdjustCircle width={7} height={7} className="h-7 w-7 text-gray-500 cursor-pointer mr-3" />
                    <Unicons.UilCommentAltMessage width={7} height={7} className="h-7 w-7 text-gray-500 cursor-pointer mr-3" />
                    <Unicons.UilEllipsisV width={7} height={7} className="h-7 w-7 text-gray-500 cursor-pointer mr-3" />
                </div>
            </div>
            <div className='w-full h-14 p-2 bg-white'>
                <div className='w-full h-10 flex justify-center items-center bg-gray-100 rounded-lg'>
                    <Unicons.UilSearch width={5} height={5} className="h-5 w-5 text-gray-500 cursor-pointer mr-3" />
                    <input type="text" className='w-4/5 h-10 bg-gray-100 outline-none text-gray-500' placeholder='Search' />
                </div>
            </div>
            <div className='w-full h-full pt-4 flex flex-col justify-center items-center bg-white mt-2 overflow-y-scroll'>
                {users.map((user, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-start w-full p-4 border border-gray-100 rounded-lg bg-white cursor-pointer transition duration-300 hover:bg-gray-100"
                        onMouseOver={() => handleMouseOver(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src={user.image} alt={user.name} className="w-12 h-12 rounded-full mr-4" />
                        <div className="font-light flex justify-center items-start w-full">
                            <div className='w-1/2 flex flex-col justify-center items-start'>
                                <h1 className='text-lg text-gray-800'>
                                    {user.name}
                                </h1>
                                <h2 className='text-xs text-gray-500'>
                                    {user.name}
                                </h2>
                            </div>
                            <div className='w-1/2 h-full flex flex-col justify-between items-end'>
                                <h6 className='text-xs text-gray-500'>
                                    12:37
                                </h6>
                                {arrowIndex === index && (
                                    <Unicons.UilAngleDown width={7} height={7} className="h-7 w-7 text-gray-500 cursor-pointer mr-3" />
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
