import { Layers } from "lucide-react";
import React from "react";

export default function LargeCard({ data }) {
  return (
    <div className=" rounded-md bg-grayBackground text-textColor gap-2 flex flex-col p-8 items-center shadow-lg">
      <Layers />
      <h4>{data.title}</h4>
      <h2>{data.sales}</h2>
    </div>
  );
}
