import React from 'react'
import { profile12, profile13 } from '../Assets/images/Images'

function ProfilePhotos() {
  return (
    <div className='space-y-12'>
        <div className='flex flex-row justify-between space-x-4 items-center'>
            <h1 class="text-5xl font-extrabold">Photos</h1>
            <p class="text-slate-500 hover:text-slate-900 ease-out duration-300 cursor-pointer">Show all</p>
        </div>
        <div className='flex flex-row space-x-8'>
            <div className='w-40 h-32'>
                <img src={profile12} className='w-full h-full object-contain object-cover'  />
            </div>

            <div className='w-40 h-32'>
                <img src={profile13} className='w-full h-full object-contain object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default ProfilePhotos