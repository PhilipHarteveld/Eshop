import { ShoppingCart } from "lucide-react";
import React from "react";

export default function SmallCard({ data }) {
  const { title, sales, icon: Icon } = data;
  return (
    <div className="rounded-lg shadow-lg bg-grayBackground p-4">
      <div className="flex space-x-4">
        <div className="w-12 h-12 text-textColor bg-buttonBackground p-2 rounded-full items-center flex justify-center">
          <Icon />
        </div>

        <div className="">
          <p>{title}</p>
          <h3>{sales}</h3>
        </div>
      </div>
    </div>
  );
}
