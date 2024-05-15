import CustomTable from "@/app/components/back-office/CustomTable";
import DashboardsCharts from "@/app/components/back-office/DashboardsCharts";
import Heading from "@/app/components/back-office/Heading";
import LargeCards from "@/app/components/back-office/LargeCards";
import SmallCards from "@/app/components/back-office/smallCards";
import React from "react";

export default function page() {
  return (
    <div>
      <Heading title="Dashboard Overview" />
      <LargeCards />
      <SmallCards />
      <DashboardsCharts />
      <CustomTable />
    </div>
  );
}
