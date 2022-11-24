import React, {useState} from 'react'

function Tool() {
    const [changeColor, setChangeColor]= useState(false)
     //function for handleClick
  const handleClick=()=> {
    setChangeColor(!changeColor)
  }
  return (
    <div className={`${(changeColor === true)?'bg-amber-600 ': 'bg-slate-900'}`}>
        <button onClick={handleClick}
         className={`rounded-full tracking-wider font-bold font-Arialn text-sm `}>CLICK ME</button>
    </div>
  )
}

export default Tool