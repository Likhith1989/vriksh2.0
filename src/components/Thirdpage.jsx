import React from "react";
import backgroundImage from "../resources/img2.svg";

const Thirdpage = () => {
  return (
    <div className="text-center">
      <h2 className="font-jostNormal text-base sm:text-5xl mb-2 sm:mb-16 font-semibold leading-[3rem] pt-2 text-black pb-3">
        Our Objective
      </h2>
      <div className="relative">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full sm:h-auto sm:mb-[6rem] object-cover rounded-xl sm:rounded-none"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col pt-[17%] items-center">
          <h3 className="font-jostNormal text-[1.7rem]  sm:text-[5.86rem] font-semibold text-black m-0 text-shadow-lg sm:mr-4">
            ONE MILLION <span className="font-bold text-white">TREES</span>{" "}
            <span className="font-semibold text-black sm:pr-5">BY</span> 2030
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Thirdpage;
