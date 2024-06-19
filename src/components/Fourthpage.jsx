import React from "react";
import leftEnd from "../resources/ver-line.svg";
import rightEnd from "../resources/hor-line.svg";
import bar1 from "../resources/bar1.svg";
import bar2 from "../resources/bar2.svg";

const Fourthpage = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center mb-7 xl:mb-10">
      <div className="flex-1 mr-9 ml-8 mt-10 xl:mr-[8rem] xl:ml-24">
        <p className="font-jost text-xl xl:text-4xl md:text-2xl font-normal xl:leading-[3rem] text-center xl:text-left">
          3.5 billion to 7 billion trees are being cut each year. We at vriksh
          plan to plant a million trees by 2030. Vriksh will be focuses on
          receiving donations as a non profit organisation by being accessible
          and transparent. The donations to the planet will be secure and
          transparent to you. Keep in mind, there is no PLANet B
        </p>
      </div>
      <div className="relative md:ml-[2.5rem] xl:w-[35rem] h-48 xl:h-[39rem] opacity-100 xl:mr-10 mt-10 xl:mt-0">
        <h3 className="font-jost text-xl xl:text-4xl md:text-2xl font-semibold leading-10 text-center xl:text-none ">
          Number of trees cut down vs planted every month
        </h3>
        <img
          src={bar1}
          className="absolute ml-[9rem] mt-[1.2rem] md:mt-[2.15rem] w-[1.3rem] md:w-[1.8rem] xl:w-[3.7rem] xl:ml-32 xl:mt-16"
        />
        <img
          src={bar2}
          className="absolute ml-[13rem] md:ml-[15rem] mt-[5rem] md:mt-[8rem] w-[1.4rem] md:w-[1.8rem] xl:w-[3.6rem]  xl:ml-80 xl:mt-64"
        />
        <img
          src={leftEnd}
          alt="left-end"
          className="absolute md:top-[3.6rem] ml-5 xl:top-[8rem] left-[4.9rem] 
        xl:right-[34rem] md:right-[22.5rem] xl:left-1 md:left-[4.2rem] w-6  xl:w-3 h-[10rem] md:h-[13rem] xl:h-[26rem]"
        />

        <img
          src={rightEnd}
          alt="right-end"
          className="absolute ml-5 xl:top-[33rem] md:top-[13.1rem] top-[14.6rem]  md:left-[5rem] left-[5.52rem] right-[7rem] xl:left-[0.3rem] xl:right-[2rem] md:w-[16rem] w-[12rem] xl:w-[30rem] h-3 md:h-[6.7rem] xl:h-9"
        />

        <div className="flex flex-row ml-[2.6rem] md:ml-[1.2rem] xl:ml-7   items-center mt-[10rem] md:mt-[15rem]  xl:mt-[30rem]">
          <span className="font-jost text-xl md:text-[1.4rem] text-[0.9rem] xl:text-2xl ml-[5.2rem] font-semibold leading-9 xl:ml-20">
            Cut Down
          </span>
          <span className="font-jost text-xl xl:text-2xl text-[0.9rem] md:text-[1.4rem] font-semibold leading-9 ml-[1rem] xl:ml-24">
            Planted
          </span>
        </div>
      </div>
    </div>
  );
};

export default Fourthpage;
