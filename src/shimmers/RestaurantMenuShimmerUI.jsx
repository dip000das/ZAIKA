import React from "react";
const RestaurantMenuShimmerUI = () => {
  return (
    <>
      <div className="w-9/12 pt-16 mt-10 md:w-2/3">
        <div className="h-2 bg-gray-400 rounded-lg  animate-pulse md:w-44 w-28"></div>
      </div>
      <div className="flex flex-col items-center w-9/12 min-h-screen mt-8 md:w-2/3">
        <div className="flex items-center justify-between w-full p-2 bg-white animate-pulse h-36 rounded-xl">
          <div className="flex flex-col gap-1 ">
            <div className="w-40 h-6 bg-gray-600 rounded-lg md:w-72 "></div>
            <div className="h-5 mt-1 bg-gray-500 rounded-lg md:w-52 w-28"></div>
            <div className="h-5 bg-gray-400 rounded-lg md:w-52 w-28"></div>
            <div className="h-4 mt-2 bg-gray-400 rounded-lg md:w-64 w-36"></div>
          </div>
          <div className="flex flex-col gap-1 mr-4">
            <div className="w-16 h-8 bg-gray-300 rounded-lg"></div>
            <div className="w-16 h-8 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between w-full h-32 p-2 px-3 py-2 mt-1 bg-white animate-pulse rounded-xl ">
          <div className="flex w-full gap-5 p-2 md:ml-6">
            <div className="h-6 bg-gray-600 rounded-lg w-28 "></div>
            <div className="h-6 bg-gray-600 rounded-lg w-28 "></div>
          </div>
          <div className="flex gap-2 overflow-hidden">
            <div className="h-12 bg-gray-300 rounded-lg w-28 md:w-36 lg:w-40"></div>
            <div className="h-12 bg-gray-300 rounded-lg w-28 md:w-36 lg:w-40"></div>
            <div className="hidden h-12 bg-gray-300 rounded-lg md:flex w-28 md:w-36 lg:w-40"></div>
            <div className="hidden h-12 bg-gray-300 rounded-lg lg:flex w-28 md:w-36 lg:w-40"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenuShimmerUI;
