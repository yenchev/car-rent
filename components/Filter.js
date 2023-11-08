import React from "react";

const Filter = () => {
  return (
    <div class="container mx-auto justify-center items-center p-2 md:p-0">
      <div class=" mx-auto max-width 2xl:w-[100%] xl:w-[1100px] lg:w-[880px] lg:bg-blue-600  lg:dark:bg-gray-900  lg:dark:shadow-gray-800 lg:shadow-custom p-4 sm:p-2 xl:p-4  grid grid-cols-1 gap-6 rounded-xl">
        <div class="flex justify-around flex-col lg:flex-row w-full mx-auto">
          <div className="lg:pt-0 lg:pl-6 2xl:pr-6">
            <div>
              <input
                type="text"
                placeholder="Make..."
                class="focus:outline-none flex rounded 2xl:w-[250px] xl:w-[220px] lg:w-[170px]  items-center py-2 px-4  bg-blue-500 dark:bg-blue-800 w-full mx-auto"
              />
            </div>
          </div>
          <div className="pt-3 lg:pt-0 lg:pl-6 2xl:pr-6">
            <div>
              <input
                type="text"
                placeholder="Model..."
                class="focus:outline-none flex rounded 2xl:w-[250px] xl:w-[220px] lg:w-[170px]  items-center py-2 px-4   bg-blue-500 dark:bg-blue-800 w-full mx-auto"
              />
            </div>
          </div>
          <div class="pt-3 lg:pt-0 lg:pl-6 2xl:pr-6">
            <select class="2xl:w-[250px] xl:w-[220px] lg:w-[170px] py-2 px-4 rounded  bg-blue-500 dark:bg-blue-800 w-full mx-auto">
              <option>diesel</option>
              <option>patrol</option>
              <option>electric</option>
            </select>
          </div>
          <div class="pt-3 lg:pt-0 lg:pl-6 2xl:pr-4">
            <select class="2xl:w-[250px] xl:w-[220px] lg:w-[170px]  py-2 px-4 rounded  bg-blue-500 dark:bg-blue-800 w-full mx-auto">
              <option>manual</option>
              <option>automatic</option>
            </select>
          </div>
          <div class="flex justify-center pt-3 lg:pt-0 lg:px-6 2xl:pr-6">
            <button class="lg:w-10 lg:h-10 lg:p-2 w-28 h-8 px-11 rounded-full  bg-blue-500 dark:bg-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#616161"
                  d="M34.6 28.1H38.6V45.1H34.6z"
                  transform="rotate(-45.001 36.586 36.587)"
                ></path>
                <path
                  fill="#616161"
                  d="M20 4A16 16 0 1 0 20 36A16 16 0 1 0 20 4Z"
                ></path>
                <path
                  fill="#37474F"
                  d="M36.2 32.1H40.2V44.400000000000006H36.2z"
                  transform="rotate(-45.001 38.24 38.24)"
                ></path>
                <path
                  fill="#64B5F6"
                  d="M20 7A13 13 0 1 0 20 33A13 13 0 1 0 20 7Z"
                ></path>
                <path
                  fill="#BBDEFB"
                  d="M26.9,14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2,1.2-6.9,3.2c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1C16,13.9,17.9,13,20,13s4,0.9,5.4,2.5c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2C27.2,15.3,27.2,14.6,26.9,14.2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;