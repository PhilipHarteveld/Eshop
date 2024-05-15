import React from "react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="bg-slate-800 space-y-6 w-52 h-screen text-slate-50 shadow-md ">
      <Link
        href="#"
        className="mb-6 text-textColor font-extrabold text-lg m-8 "
      >
        Mini Mart
      </Link>
      <h4 className="text-center">store Name</h4>
      <div className="flex flex-col space-y-3  p-3 text-textColor   ">
        <Link href="#">Dashboard</Link>
        <Link href="#">Catalogue</Link>
        <Link href="#">Customers</Link>
        <Link href="#">Markets</Link>
      </div>
      <div className="flex justify-center">
        <button className="flex items-end bg-buttonBackground text-grayBackground py-1 px-10 rounded-full  ">
          Log Out
        </button>
      </div>
    </div>
  );
}
