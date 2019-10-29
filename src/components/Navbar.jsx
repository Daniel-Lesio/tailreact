import React from 'react'
import star from '../assets/stars-24px.svg'
export default function Navbar() {
    return (
        <div className='bg-green-500 flex items-center p-0 m-0 ' style={{height:'70px'}}>
            <div className="container h-full mx-auto p-0 my-0 ">
            <div className="brand flex  items-center h-full">
            <img className='mr-2 w-10 h-10' src={star} alt=""/>
            <h1 className='leading-loose text-lg p-0 m-0'>Tailwind + Purge + React Starter</h1>
            </div>
            </div>
        </div>
    )
}


