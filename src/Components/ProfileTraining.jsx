import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { profile4, profile3, profile2, profile5, Profile6, profile7, profile8, profile9, profile10, profile11 } from "../Assets/images/Images";
import 'swiper/css';
function ProfileTraining() {
  return (

    <div className="space-y-12">
      <div className="flex flex-row justify-between space-x-4 items-center ">
        <h1 class="text-5xl font-extrabold">Trainings</h1>
        <p class="text-slate-500 hover:text-slate-900 ease-out duration-300 cursor-pointer">
          Show all
        </p>
      </div>
      
      <Swiper
    spaceBetween={50}
    slidesPerView={4}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide>
      <div className="flex flex-row  items-center space-x-4 justify-center ">
        <div className="w-32 h-28">
          <img
            src={profile4}
            className="w-full h-full rounded-xl object-contain object-cover"
          />
        </div>
        <div>
          <p className="font-semibold">WARRIOR-1-POSE</p>
          <p className="text-slate-500">2 days ago</p>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-row  items-center space-x-4 justify-center ">
        <div className="w-32 h-28">
          <img
            src={profile3}
            className="w-full h-full rounded-xl object-contain object-cover"
          />
        </div>
        <div>
          <p class="font-semibold">LOTUS-POSE</p>
          <p class="text-slate-500">4 days ago</p>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-row  items-center space-x-4 justify-center ">
        <div className="w-32 h-28">
          <img
            src={profile2}
            className="w-full h-full rounded-xl object-contain object-cover"
          />
        </div>
        <div>
          <p class="font-semibold">TREE-POSE</p>
          <p class="text-slate-500">6 days ago</p>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row  items-center space-x-4 justify-center ">
        <div className="w-32 h-28">
          <img
            src={profile5}
            className="w-full h-full rounded-xl object-contain object-cover"
          />
        </div>
        <div>
          <p class="font-semibold">LOTUS-HAND-OVER-HEAD</p>
          <p class="text-slate-500">a week ago</p>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row  items-center space-x-4 justify-center ">
        <div className="w-32 h-28">
          <img
            src={Profile6}
            className="w-full h-full rounded-xl object-contain object-cover"
          />
        </div>
        <div>
          <p class="font-semibold">LOTUS</p>
          <p class="text-slate-500">2 week ago</p>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row  items-center space-x-4 justify-center ">
        <div className="w-32 h-28">
          <img
            src={profile7}
            className="w-full h-full rounded-xl object-contain object-cover"
          />
        </div>
        <div>
          <p class="font-semibold">LOTUS</p>
          <p class="text-slate-500">3 week ago</p>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row  items-center space-x-4 justify-center ">
        <div className="w-32 h-28">
          <img
            src={profile8}
            className="w-full h-full rounded-xl object-contain object-cover"
          />
        </div>
        <div>
          <p class="font-semibold">BOAT</p>
          <p class="text-slate-500">a month ago</p>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row  items-center space-x-4 justify-center ">
        <div className="w-32 h-28">
          <img
            src={profile9}
            className="w-full h-full rounded-xl object-contain object-cover"
          />
        </div>
        <div>
          <p class="font-semibold">EXTENDED-SIDE-ANGLE</p>
          <p class="text-slate-500">a month & 1week ago</p>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row  items-center space-x-4 justify-center ">
        <div className="w-32 h-28">
          <img
            src={profile10}
            className="w-full h-full rounded-xl object-contain object-cover"
          />
        </div>
        <div>
          <p class="font-semibold">LOTUS</p>
          <p class="text-slate-500">a month & 2 week ago</p>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row items-cente space-x-4 justify-cente r">
        <div className="w-32 h-28">
          <img
            src={profile11}
            className="w-full h-full rounded-xl object-contain object-cover"
          />
        </div>
        <div>
          <p class="font-semibold">WARRIOR-1-POSE</p>
          <p class="text-slate-500">a month &3 week ago</p>
        </div>
        </div>
        </SwiperSlide>
        </Swiper>

    </div>
  );
}

export default ProfileTraining;
