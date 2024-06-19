import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import elli from "../assets/Ellipse.jpg";

export const TopTh = () => {
  const data = [
    { name: "John Doe", treesPlanted: 1799, rank: 1 },
    { name: "Doe sdfkldcsv sdfDfads", treesPlanted: 1234, rank: 2 },
    { name: "Sivani", treesPlanted: 534, rank: 3 },
  ];
  return (
    <>
      <div className="flex gap-4 flex-wrap flex-row md:justify-evenly justify-center items-center md:items-center">
        <div className="w-fit h-fit mx-20 mm:mx-32 md:mx-48 cs:mx-0 px-2">
          <div className="w-auto h-auto">
            <div>
              <h1 className="font-jostBold6 text-lg mx-2 md:text-2xl md:mx-5">
                First
              </h1>
            </div>
            <div className="bg-customGreen bg-opacity-50 rounded-xl p-2 xs:p-4">
              <div className="flex items-center mm:mb-2 w-auto h-auto">
                <div className="mr-2 xs:mr-5 mm:mr-10">
                  <img
                    className="w-10 h-10 xs:w-16 xs:h-16 mm:w-fit mm:h-fit rounded-full"
                    src={elli}
                    alt="pfp"
                  ></img>
                </div>
                <div>
                  <div className="flex items-center mt-4 mb-[-10px]">
                    <div className="w-[83px] h-[30px] mm:mr-4 text-xl xs:text-2xl whitespace-nowrap md:text-3xl font-jostBold6 ">
                      John Doe
                    </div>
                    <div>
                      <img
                        className="w-6 h-8 ml-4 mr-2 mm:w-8 mm:h-12 mm:ml-8 mm:mr-4"
                        src={one}
                        alt="First place"
                      />
                    </div>
                  </div>
                  <hr className="border-t-2 border-white mt-5 mm:mt-10 ml-[-20px] mr-[-80px]" />
                </div>
              </div>

              <div className="w-auto h-auto ">
                <h1 className=" font-jostBold6 text-center mt-5 mm:mt-10 text-xl xs:text-2xl  md:text-3xl whitespace-nowrap">
                  Trees Planted: 1799
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="w-fit h-fit">
          <div className="w-auto h-auto">
            <div>
              <h1 className="font-jostBold6 text-lg mx-2 md:text-2xl md:mx-5">
                Second
              </h1>
            </div>
            <div className="bg-customGreen bg-opacity-50 rounded-xl p-2 xs:p-4">
              <div className="flex items-center mm:mb-2 w-auto h-auto">
                <div className="mr-2 xs:mr-5 mm:mr-10">
                  <img
                    className="w-10 h-10 xs:w-16 xs:h-16 mm:w-fit mm:h-fit rounded-full"
                    src={elli}
                    alt="pfp"
                  ></img>
                </div>
                <div>
                  <div className="flex items-center mt-2 mb-[-10px]">
                    <div className="w-[83px] h-[30px] mm:mr-4 text-lg xs:text-2xl whitespace-nowrap md:text-3xl font-jostBold6 ">
                      Doe John
                    </div>
                    <div>
                      <img
                        className="w-6 h-8 ml-2 mr-2 mm:w-8 mm:h-12 mm:ml-8 mm:mr-4"
                        src={two}
                        alt="Second place"
                      />
                    </div>
                  </div>
                  <hr className="border-t-2 border-white mt-5 mm:mt-10 ml-[-20px] mr-[-80px]" />
                </div>
              </div>

              <div className="w-auto h-auto ">
                <h1 className=" font-jostBold6 text-center mt-3 mm:mt-10 text-lg xs:text-2xl  md:text-3xl whitespace-nowrap">
                  Trees Planted: 2001
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-fit h-fit">
          <div className="w-auto h-auto">
            <div>
              <h1 className="font-jostBold6 text-lg mx-2 md:text-2xl md:mx-5">
                Third
              </h1>
            </div>
            <div className="bg-customGreen bg-opacity-50 rounded-xl p-2 xs:p-4">
              <div className="flex items-center mm:mb-2 w-auto h-auto">
                <div className="mr-3 mm:mr-10">
                  <img
                    className="w-10 h-10 xs:w-16 xs:h-16 mm:w-fit mm:h-fit rounded-full"
                    src={elli}
                    alt="pfp"
                  ></img>
                </div>
                <div>
                  <div className="flex items-center mt-2 mb-[-10px]">
                    <div className="w-[83px] h-[30px] mm:mr-4 text-lg xs:text-2xl whitespace-nowrap md:text-3xl font-jostBold6 ">
                      Sivani
                    </div>
                    <div>
                      <img
                        className="w-6 h-8  mr-2 mm:w-8 mm:h-12 mm:ml-8 mm:mr-4"
                        src={three}
                        alt="Second place"
                      />
                    </div>
                  </div>
                  <hr className="border-t-2 border-white mt-5 mm:mt-10 ml-[-20px] mr-[-80px]" />
                </div>
              </div>

              <div className="w-auto h-auto ">
                <h1 className=" font-jostBold6 text-center mt-3 mm:mt-10 text-lg xs:text-2xl  md:text-3xl whitespace-nowrap">
                  Trees Planted: 989
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
