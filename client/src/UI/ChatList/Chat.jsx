import React, { useEffect } from 'react'
import { io } from "socket.io-client"
import * as Unicons from '@iconscout/react-unicons';
import SideBar from '../../components/SideBar';

export default function Chat() {


    const socket = io(`${import.meta.env.VITE_APP_BACKEND_URL}`, {
        transports: ["websocket"]
    })

    useEffect(() => {
        socket.on("connect", () => {
            console.log("connected", socket.id)
        })

    }, [])


    return (
        <div className='flex justify-end items-center flex-col w-full h-screen bg-gray-100'>
            <div className='w-full bg-teal-900 h-48 absolute top-0 flex justify-start px-60 py-10'>
                <Unicons.UilCommentChartLine width={27} height={27} className="h-14 w-14 text-teal-500 mr-2" />
                <h2 className='text-3xl text-white text-center font-semibold'>Chat.io</h2>
            </div>
            <div className='w-4/5 bg-gray-100 h-5/6 z-10 rounded-lg'>
                <SideBar/>
            </div>

        </div>
    )
}
