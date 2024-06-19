export const Rows = (data) => {
  return (
    <>
      <tr className=" border-b-2 font-jostBold6 text-sm md:text-xl bg-customGreen bg-opacity-50 text-black">
        <td
          scope="row"
          className="px-3 py-2 md:px-6 md:py-4 font-medium text-center whitespace-nowrap "
        >
          {data.rank}
        </td>
        <td className="px-3 py-2 md:px-6 md:py-4 font-medium text-center">
          {data.username}
        </td>
        <td className="px-3 py-2 md:px-6 md:py-4 font-medium text-center">
          {data.treesPlantedThisMonth}
        </td>
        <td className="ppx-3 py-2 md:px-6 md:py-4 font-medium text-center">
          {data.totalTreesPlanted}
        </td>
      </tr>
    </>
  );
};
