import React from 'react'
import { photo1, photo2, photo3, photo4, photo5 } from '../Assets/images/Images'

function ProfilePhotos() {
  return (
    <div className='space-y-12'>
        <div className='flex flex-row justify-between space-x-4 items-center'>
            <h1 class="text-5xl font-extrabold">Photos</h1>
            <p class="text-slate-500 hover:text-slate-900 ease-out duration-300 cursor-pointer">Show all</p>
        </div>
        <div className='flex flex-row space-x-8'>
            <div className='w-40 h-32'>
                <img src={photo1} className='w-full h-full object-contain rounded-xl object-cover'  />
            </div>

            <div className='w-40 h-32'>
                <img src={photo2} className='w-full h-full object-contain rounded-xl object-cover'/>
            </div>

            <div className='w-40 h-32'>
                <img src={photo3} className='w-full h-full object-contain rounded-xl object-cover'/>
            </div>

            <div className='w-40 h-32'>
                <img src={photo4} className='w-full h-full object-contain rounded-xl object-cover'/>
            </div>

            <div className='w-40 h-32'>
                <img src={photo5} className='w-full h-full object-contain rounded-xl object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default ProfilePhotos