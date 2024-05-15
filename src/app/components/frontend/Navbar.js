import React from "react";
import Link from "next/link";
import { ShoppingCart, UserRound } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex w-full shadow-md h-14 items-center ">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-6">
          <h2 className="font-bold ml-4">Mini Mart</h2>
          <div className="flex gap-4">
            <Link href="#">Home</Link>
            <Link href="#">Home</Link>
            <Link href="#">Home</Link>
            <Link href="#">Home</Link>
          </div>
        </div>
        <div className="flex gap-4 justify-end items-center mr-10">
          <ShoppingCart />
          <UserRound />
        </div>
      </div>
    </div>
  );
}
