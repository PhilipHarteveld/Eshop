import React from "react";
import SmallCard from "./smallCard";
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from "lucide-react";

export default function SmallCards() {
  const orderStatus = [
    {
      title: "Total orders",
      sales: 110,
      icon: ShoppingCart,
    },
    {
      title: "Orders Pending",
      sales: "R10000",
      icon: Loader2,
    },
    {
      title: "Orders Processing",
      sales: 11,
      icon: RefreshCcw,
    },
    {
      title: "Orders Delivered",
      sales: 300,
      icon: CheckCheck,
    },
  ];
  return (
    <div className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {orderStatus.map((data, i) => {
        return <SmallCard key={i} data={data} />;
      })}
    </div>
  );
}
