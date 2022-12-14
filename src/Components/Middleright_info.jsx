import React from "react";

function MiddlerightInfo() {
  
  return (
    <div class={`flex flex-col   items-end w-full  justify-end  `}>
      <div class='relative w-[68%]' >
      <h1 className=" font-extrabold text-xl">Meditate Together Online</h1>
      <p>Everything is Better When Shared including Meditation.</p>
      <p>
        When you mrdidate with other people online you'll get the support and
        connection you need to start practicing mindfulness and keep going. A
        group can better support an individual's inward journey and help develop
        habit.
      </p>
      <button 
      className={`p-2 bg-slate-900 rounded-full text-sm hover:text-slate-700 ease-out duration-300 text-slate-200 font-Arialn font-bold tracking-wider`}
          >
        Book Now
      </button>
      </div>
    </div>
  );
}

export default MiddlerightInfo;
