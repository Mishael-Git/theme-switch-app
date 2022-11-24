import React,{useState} from "react";

function Topleft_info() {
  const [changeColor, setChangeColor]= useState(false)
  //function for handleClick
const handleClick=()=> {
 setChangeColor(!changeColor)
}
  return (
    <div class={`flex flex-col justify-start items-start w-full ${(changeColor === true)?' font-CircularStd ': ' '}`}>
      <div class={`w-72 h-32  relative `}>
        <h1 class="font-extrabold text-xl">
          Mindfulness for Everyone,Anywhere
        </h1>
        <p>
          I'm a paragraph,Click here to add your own text and edit me. I'm a
          great place for you to tell story and let your users know a little
          more about you
        </p>
        <button
         onClick={handleClick}
        className={`p-2 bg-slate-900 rounded-full text-sm hover:text-slate-700 ease-out duration-300 text-slate-200 font-Arialn font-bold tracking-wider`}
          >
          Try for free
        </button>
      </div>
    </div>
  );
}

export default Topleft_info;
