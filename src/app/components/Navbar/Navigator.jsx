'use client'
import Image from 'next/image'
import React from 'react'
import { InlineIcon } from '@iconify/react'
function Navigator({ children }) {
    return (
        <div className='w-screen h-fit'>
            <div className="flex px-10 py-4 justify-between items-center">
                <div className=" flex items-center justify-center gap-2">
                    <Image src={'/logos/logo.svg'} height={30} width={30} />
                    <h1 className='font-bold tex-gray-900 text-lg'>Edulearn</h1>
                </div>
                <div className="flex bg-[#92D1CD99] px-2 rounded-lg items-center">
                    <InlineIcon className='text-gray-600' icon="tdesign:search" height="25" width="25" />
                    <input type="text" className='w-[300px] bg-transparent outline-none px-2 py-1 text-gray-700' placeholder='Search' />
                </div>
                <div className="flex">
                    <select className='px-2 py-2 rounded-lg bg-white shadow-[0px_0px_2px_0px_var(--green-mild)] ' name="" id="">
                        <option value="1">Grade 1 </option>
                        <option value="add"> Add Grade </option>
                    </select>
                </div>
            </div>
            <div className="flex">
                <div className="navbar min-w-[250px] h-screen">

                </div>
                <div className="w-[100%] min-h-screen">
                    {children}
                </div>
            </div>

        </div>
    )
}

export default Navigator