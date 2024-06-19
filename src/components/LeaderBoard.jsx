import { Rows } from "./Rows";

import { TopTh } from "./TopTh";
export const LeaderBoard = () => {
  const userdata = [
    {
      rank: 1,
      username: "EcoWarrior123",
      treesPlantedThisMonth: 150,
      totalTreesPlanted: 1200,
    },
  ];
  const leaderboardData = [
    {
      rank: 1,
      username: "EcoWarrior123",
      treesPlantedThisMonth: 150,
      totalTreesPlanted: 1200,
    },
    {
      rank: 2,
      username: "GreenThumbs",
      treesPlantedThisMonth: 130,
      totalTreesPlanted: 1100,
    },
    {
      rank: 3,
      username: "TreeHugger",
      treesPlantedThisMonth: 120,
      totalTreesPlanted: 1050,
    },
    {
      rank: 4,
      username: "NatureLover",
      treesPlantedThisMonth: 110,
      totalTreesPlanted: 1000,
    },
    {
      rank: 5,
      username: "PlantLife",
      treesPlantedThisMonth: 100,
      totalTreesPlanted: 950,
    },
  ];

  return (
    <>
      <h1 className="font-jostBold7 text-3xl text-center sm:text-5xl md:text-6xl lg:text-7xl md:text-center my-14 md:mt-10 md:mb-20">
        THE <span className="text-customGreen">VRIKSH</span> LEADERBOARD
      </h1>
      <div>
        <TopTh />
      </div>

      <div className="my-10 mx-4 md:mx-20">
        <h1 className="font-jostBold6 text-xl md:text-3xl mx-10 mb-[-20px]">
          Your Rank
        </h1>
        <table className="w-full md:w-full mt-10 text-center rounded-2xl overflow-hidden">
          <thead className="text-sm md:text-xl font-jostBold6  bg-customGreen bg-opacity-80 text-white rounded-t-lg">
            <tr className="rounded-2xl ">
              <th scope="col" className="px-3 py-2 md:px-6 md:py-4 ">
                Rank
              </th>
              <th scope="col" className="px-3 py-2 md:px-6 md:py-4 ">
                Username
              </th>
              <th scope="col" className="px-3 py-2 md:px-6 md:py-4 ">
                Trees Planted This Month
              </th>
              <th scope="col" className="px-3 py-2 md:px-6 md:py-4 ">
                Total Trees Planted
              </th>
            </tr>
          </thead>
          <tbody>
            {userdata.map((data) => (
              <Rows key={data.username} {...data} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="my-10 mx-2 md:mx-20 flex justify-between">
        <h1 className="font-jostBold6 text-xl md:text-3xl mx-10">
          Global Ranking
        </h1>
        <input
          className="bg-customGreen bg-opacity-50 font-jostNormal text-black placeholder-black border-none rounded-full mx-10 md:w-[369px] h-[45px] md:h-[54px]"
          type="text"
          placeholder="Search by username"
        ></input>
      </div>

      <div className="relative mx-4 md:mx-20 mb-32 overflow-x-auto">
        <table className="w-full rounded-2xl overflow-hidden">
          <thead className="text-sm md:text-xl font-jostBold6 bg-customGreen bg-opacity-80 text-white">
            <tr>
              <th scope="col" className="px-3 py-2 md:px-6 md:py-4">
                Rank
              </th>
              <th scope="col" className="px-3 py-2 md:px-6 md:py-4">
                Username
              </th>
              <th scope="col" className="px-3 py-2 md:px-6 md:py-4">
                Trees Planted This Month
              </th>
              <th scope="col" className="px-3 py-2 md:px-6 md:py-4">
                Total Trees Planted
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {leaderboardData.map((data, index) => (
              <Rows key={data.username} {...data} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
