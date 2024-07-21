import React from "react";

function Home() {
  return (
    <div>
      <div className=" bg-slate-600 w-4/5 h-64 rounded-xl mt-12 m-auto">
        hello
      </div>
      <div className="w-1/2 m-auto mt-10 flex">
        <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search something.."
          />
        </div>
        <button className=" bg-green-300 p-4 px-10 rounded-full text-white">
          Seacrh
        </button>
      </div>
    </div>
  );
}

export default Home;
