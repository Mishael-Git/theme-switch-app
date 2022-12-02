import React from 'react';
import ProfilePhotos from './ProfilePhotos'
import ProfileMiddle from './ProfileStatistic'
import ProfileTop from './ProfileTop'
import ProfileTraining from './ProfileTraining'
import Wrapper from './Wrapper';

function Profile() {
  return (
    <Wrapper>
      <div className='space-y-11 pt-20'>
      <div className='px-56'>
       <div className='w-full'>
        <ProfileTop/>
        </div>
       </div>
       <div className='px-56'>
        <div className='w-full'>
        <ProfileMiddle/>
        </div>
       </div>
       <div className='px-56'>
        <div className='w-full '>
            <ProfileTraining/>
        </div>
       </div>
       <div className='px-56'>
        <div className='w-full'>
        <ProfilePhotos/>
        </div>
       </div>
       </div>
    </Wrapper>
  )
}

export default Profile