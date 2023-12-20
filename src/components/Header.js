import Image from "next/image";
import React from "react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
function Header() {
  return (
    <header>
      {/* Top nav */}
      <div className="flex items-center bg-amazon_blue p-2 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Link href="https://nextjs.org">
            <Image
              className="cursor-pointer "
              src="https://links.papareact.com/f90"
              width={130}
              height={40}
             
              alt=""
            />
          </Link>
        </div>
        {/* search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-500 hover:bg-yellow-400 outline-none">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md outline-none  focus:ring-0"
            type="text"
          />
          <SearchIcon className="h-12 p-3" />
        </div>
        {/* Right */}
        <div className="flex text-white items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello AjiTech</p>
            <p className="font-extrabold md:text-sm">Account & List</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm"> & Orders</p>
          </div>
          <div className="link relative flex items-center">
            <span className="absolute top-0 right-0 md:right-10 bg-yellow-400 h-4 w-4 text-center text-black rounded-full font-bold">
              0
            </span>

            <ShoppingCartIcon className="h-10" />
            <p className=" hidden md:inline-block font-extrabold md:text-sm mt-4">
              Cart
            </p>
          </div>
        </div>
      </div>
      {/* Bottom nav */}
      <div className="flex bg-amazon_blue-light  items-center text-sm text-white space-x-3 p-2 pl-6">
        <p className=" link item-center flex font-bold">
          <MenuIcon className="h-6 text-white" />
          All
        </p>
        <p className="link  hidden md:inline-flex">Last Minutes Deals</p>
        <p className="link hidden lg:inline-flex">Medical Care</p>
        <p className="link hidden lg:inline-flex">Today&apos;s Deals</p>
        <p className="link hidden md:inline-flex">Amazon Basic </p>
        <p className="link hidden md:inline-flex">Gift Cards</p>
        <p className="link hidden md:inline-flex"> Coupons</p>
        <p className="link hidden md:inline-flex">Pet Supplies</p>
        <p className="link hidden lg:inline-flex">Handmade</p>
        <p className="link hidden lg:inline-flex">Shop By Internet</p>

        <p className="link hidden md:inline-flex">Last minute gifts</p>
      </div>
    </header>
  );
}

export default Header;
