import React from "react";
import leftEnd from "../resources/Ellipse2.svg";
import rightEnd from "../resources/Ellipse3.svg";

const Secondpage = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center mb-5">
      <div className="flex-1 xl:ml-28 md:mt-[3.4rem] lg:mt-[2rem]">
        <h2 className="font-jost text-3xl mr-10 ml-7 md:text-4xl xl:text-6xl font-semibold leading-[2.76rem] xl:leading-[4.76rem] text-center xl:text-left">
          The future can't wait, Plant a{" "}
          <span className="text-custom-green2">Vriksh</span> today
        </h2>
        <p className="font-jost ml-4 mr-2 xl:ml-8 text-center sm:text-2xl text-base xl:text-2xl mt-5 xl:mt-10 leading-[2rem] font-medium xl:text-left">
          Trees absorb carbon dioxide, which is a greenhouse gas that
          contributes to climate change and releases oxygen which we need to
          live
        </p>
        <button className="flex items-center justify-center mt-6 mx-auto  px-8 py-2 xl:px-13 xl:py-3 pl-16 pr-16 xl:pl-20 xl:pr-20 font-jost font-semibold relative z-10 bg-custom-green2 text-white text-xl xl:text-3xl rounded-xl cursor-pointer">
          <span className="text-black font-semibold text-xl md:text-2xl xl:text-5xl">
            Plant Now
          </span>
        </button>
      </div>
      <div className="mt-8 xl:mt-0 xl:ml-30">
        <div className="relative w-fit h-fit md:w-[35rem] md:h-[39rem] py-4 md:px-4 my-4 md:my-8 mx-6 md:mx-20 bg-white rounded-[0.8rem] xl:rounded-lg shadow-2xl shadow-black lg:block">
          <h1 className="text-3xl md:text-5xl text-customGreen text-center font-jost text-custom-green2 font-bold mb-2 md:mb-4">
            Why Us
          </h1>
          <div className="text-xl md:text-3xl font-jost font-semibold m-16 md:m-20">
            <ul className="list-disc md:pl-6">
              <li className="mb-6 md:mb-10">Community Engagement</li>
              <li className="mb-6 md:mb-10">Eco-conscious Mission</li>
              <li className="mb-6 md:mb-10 whitespace-nowrap">
                Expertise and Experience
              </li>
              <li className="mb-6 md:mb-10">Transparency and Accountability</li>
            </ul>
          </div>

          <img
            src={rightEnd}
            alt="right-end"
            className="absolute bottom-0 left-0 mb-[-9px] w-24 h-24 md:w-32 md:h-32"
          />
          <img
            src={leftEnd}
            alt="left-end"
            className="absolute bottom-0 right-0 mb-[-5.7px] w-32 h-32 md:w-48 md:h-48"
          />
        </div>
      </div>
    </div>
  );
};

export default Secondpage;
