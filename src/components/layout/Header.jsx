import React from 'react';
import Image from "next/image";
import {categories} from "@/utility/db";

const Header = () => {
  return (
    <>
      <header className="w-full h-20 border-solid border-2 border-black-900 flex justify-center items-center ">
        <div className="w-11/12 h-full flex justify-between items-center m-auto ">
          <div className="w-1/3 h-20 rounded-full flex justify-between items-center">
            <Image className="w-auto h-16 rounded-full" src="/logo_nike_principal.jpg" width={100} height={100}
                   alt="Your Image"/>
          </div>
          <div className="w-1/3 h-1/2 flex justify-center items-center">
            <ul className="flex">
              {categories.map((category) => (
                <li className="ml-5" key={category.id}>{category.label}</li>
              ))}
            </ul>
          </div>
          <div className="w-1/3 h-1/2">
            <div className="flex justify-end items-center h-full">
              <form>
                <label htmlFor="search"
                       className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                  </div>
                  <input type="search" id="search"
                         className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-silver-500 focus:border-silver-500 dark:bg-silver-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-silver-500 dark:focus:border-silver-500"
                         placeholder="Search" required/>

                </div>
              </form>
              <ul className="flex">
                <li className="">
                  <Image className="w-auto h-12 " src="/heart.webp" width={100} height={100} alt="/heart.webp"/>
                </li>
                <li className="">
                  <Image className="w-auto h-12 " src="/bags.png" width={100} height={100} alt="/bags.png"/>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

    </>
  );
};

export default Header;