import React from "react";

import Navbar from "../components/frontend/Navbar";
import Home from "./Components/home";
import Categories from "./Components/categories";
import TrendingProducts from "./Components/trendingProducts";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Home />
      <Categories />
      <TrendingProducts />
    </div>
  );
}
