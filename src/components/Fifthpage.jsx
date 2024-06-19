import React from "react";
import bar3 from "../resources/largeblack.svg";
import bar2 from "../resources/blackov.svg";
import bar1 from "../resources/black.svg";

const Fifthpage = () => {
  return (
    <div className="mb-[3.2rem]">
      <h1 className="font-jost text-base mb-7 md:mt-[9rem] xl:mb-40 md:text-3xl xl:text-5xl font-semibold leading-9 py-2 text-center text-black mt-20">
        number of trees planted by vriksh
      </h1>
      <div class="text-left md:ml-[10rem] mx-[1.2rem]  xl:mt-20 xl:ml-20">
        <div class="xl:flex xl:items-center ml-5 mr-8 xl:mr-10 xl:ml-5 xl:mb-5">
          <div class="xl:mb-0">
            <h1 class="font-interBold text-xs md:text-xl xl:text-4xl text-left xl:text-center font-semibold xl:leading-9 ml-1 xl:ml-0">
              Trees in the forest
            </h1>
            <div class="relative inline-block">
              <img
                src={bar1}
                class="relative mt-4 xl:mt-10 xl:top-0 xl:left-0 z-10 w-[20rem] xl:w-auto"
              />

              <img
                src={bar2}
                class="absolute top-4 xl:top-10 left-0 z-20 w-[8.6rem] md:w-[9rem] xl:w-auto"
              />
              <div class="relative top-[-1.6rem] xl:top-[-2.5rem] md:top-[-1.9rem] left-5 text-[1.1rem] xl:text-xl font-interBold font-semibold xm:font-bold text-black z-30">
                1334567
              </div>
            </div>
          </div>
          <div class="mr-0 ml-0 xl:mt-0 xl:ml-40">
            <h1 class="font-interBold text-xs xl:text-4xl md:text-xl text-left xl:text-center font-semibold xl:leading-9 ml-1 xl:ml-0">
              Trees this month
            </h1>
            <div class="relative inline-block">
              <img
                src={bar1}
                class="relative mt-3 xl:mt-10 top-0 left-0 z-10 w-[20rem] xl:w-auto"
              />
              <img
                src={bar3}
                class="absolute top-[0.75rem] xl:top-10 left-0 z-20 md:w-[15rem] w-[14.5rem] xl:w-auto"
              />
              <div class="relative top-[-1.6rem] xl:top-[-2.5rem] md:top-[-1.9rem] left-5 text-[1.1rem] xl:text-xl font-interBold font-semibold xm:font-bold text-black z-30">
                1294338
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fifthpage;
