import React from "react";
import med4 from "../Assets/images/Meditation4.jpg";
import med2 from '../Assets/images/Meditation2.jpg';
import med3 from '../Assets/images/Meditation3.jpg';
function Middle_info() {
  return (
    <div className=" space-y-20 space-x-80 py-28 w-full items-center justify-center ">
      <div className="flex flex-col  items-center justify-center ">
        <h1 class="font-semibold text-3xl">The Breez Experience</h1>
        <p class="text-slate-500">Enjoy guided mindfulness and meditation classes online.</p>
        <p class="text-slate-500">Practice with us as much as you want on any digital device.</p>
      </div>
<div class="flex gap-20 ">
      <div class=" flex-col ">
        <img src={med4} class="w-56 h-56" />
        <h1 class="font-bold text-lg items-center">A Global Network of Teachers</h1>
        <p class='w-56 text-slate-500'>
          I'm a paragraph,Click here to add your own text and edit me. I'm a
          great place for you to tell story and let your users know a little
          more about you
        </p>
      </div>
      <div class=" flex-col">
         <img src={med2} class="w-56" />
         <h1 class="font-bold text-lg items-center">Different Styles for All Ages and Levels</h1>
         <p class='w-56 text-slate-500'>I'm a paragraph,Click here to add your
        own text and edit me. I'm a great
         place for you to tell story and let your users know a little more about you
      </p>
      </div>
      <div class=" flex-col">
       <img src={med3} class="w-56" />
       <h1 class="font-bold text-lg items-center">Livestream Classes</h1>
       <p class='w-56 text-slate-500'>I'm a paragraph,Click here to add your
        own text and edit me. I'm a great
         place for you to tell story and let your users know a little more about you
      </p>
      </div>
      </div>
    </div>
  );
}

export default Middle_info;
