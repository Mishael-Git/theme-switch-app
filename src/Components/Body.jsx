import React from 'react';
import Middle_info from '../Pages/Middle_info';
import Topleft_info from '../Pages/Topleft_info';
import Topright_info from '../Pages/Topright_info';

function Body() {
  return (
    <div className='grid  grid-cols-2 relative justify-between'>
   
      <Topleft_info/>
      <Topright_info/>
      <Middle_info/>
</div>
  )
}

export default Body