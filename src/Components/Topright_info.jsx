import React from "react";
import { Med5 } from "../Assets/images/Images";

function Topright_info() {
  return (
    <div className="bg-[url('./images/Cloud.jpg')] bg-no-repeat bg-[100%] bg-cover h-[400px] flex justify-center items-center">
      <div className="w-56 h-52 ">
        <img src={Med5} class="max-w-full w-full h-full" />
      </div>
    </div>
  );
}

export default Topright_info;
