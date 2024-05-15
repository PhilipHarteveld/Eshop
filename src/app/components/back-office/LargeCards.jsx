import React from "react";
import LargeCard from "./LargeCard";
import { title } from "process";

export default function LargeCards() {
  const orderStats = [
    {
      title: "Today orders",
      sales: 110,
    },
    {
      title: "Monthly Sales",
      sales: "R10000",
    },
    {
      title: "All time sales",
      sales: 110000,
    },
    {
      title: "Orders Currently",
      sales: 0,
    },
  ];

  return (
    <div className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {orderStats.map((item, i) => {
        return <LargeCard key={i} data={item} />;
      })}
    </div>
  );
}
