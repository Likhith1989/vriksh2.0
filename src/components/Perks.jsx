import climateImage from "../assets/bg1.jpeg";
import waterImage from "../assets/bg2.jpeg";
import biodiversityImage from "../assets/bg3.jpeg";
import water from "../assets/water.svg";
import climate from "../assets/climate.svg";
import biodiversity from "../assets/bio.svg";
export const Perks = () => {
  const panels = [
    {
      title: "CLIMATE",
      icon: climate,
      image: climateImage,
      description:
        " In cities, trees can reduce ambient temperatures by up to 8° Celsius. With more than 50% of the world’s population living in cities pollution is becoming a real threat",
    },
    {
      title: "WATER",
      icon: water,
      image: waterImage,
      description:
        " A mature evergreen tree can intercept more than 15,000 litres of water every year.Trees helps in eradication of flood and helps in increasing the strength of roots",
    },
    {
      title: "BIODIVERSITY",
      icon: biodiversity,
      image: biodiversityImage,
      description:
        " A single tree is habitat for lot of animals , birds and organism . When a animal that lives on trees loses their habits, cannot migrate or relocate and tends to be extinct",
    },
  ];

  return (
    <>
      <div>
        <div className="text-center md:text-center font-jostBold6 text-2xl md:text-4xl m-10 md:m-20 ">
          <h1>Perks of planting Trees</h1>
        </div>
        <div className="relative flex flex-wrap gap-10 md:gap-4 justify-evenly mx-6">
          {panels.map((panel, index) => (
            <div key={index} className="group relative ">
              <div
                className="w-72 h-80 md:w-80 md:h-96 rounded-[70px] overflow-hidden shadow-lg bg-cover bg-center  group-hover:hidden"
                style={{ backgroundImage: `url(${panel.image})` }}
              >
                <div className="flex flex-col my-20 items-center justify-center">
                  <div>
                    <img
                      src={panel.icon}
                      alt={`${panel.title} Icon`}
                      className="w-24 h-24 "
                    />
                  </div>
                  <div className="my-2">
                    <span className="font-jostBold7 text-2xl text-white">
                      {panel.title}
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-72 h-80 md:w-80 md:h-96 rounded-[70px] bg-customGreen overflow-hidden shadow-lg hidden group-hover:block">
                <div className="absolute inset-0 bg-white/20"></div>
                <div className="flex flex-col my-10 items-center justify-center">
                  <div className="bg-customGreen">
                    <img
                      src={panel.icon}
                      alt={`${panel.title} Icon`}
                      className="w-20 h-20 md:w-24 md:h-24 bg-customGreen"
                    />
                  </div>
                  <div className="my-2">
                    <span className="font-jostBold7 text-2xl text-black">
                      {panel.title}
                    </span>
                  </div>
                  <div className="flex items-center justify-center h-full mt-4 mx-6">
                    <span className="text-center text-black font-jostNormal text-base md:text-lg">
                      {panel.description}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
