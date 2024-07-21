import React from "react";

const TrendingProducts = () => {
  // Your code for the trending products section goes here

  return (
    <div>
      <div className="w-3/4 mx-auto shadow-2xl bg-slate-200">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">
            Products on sale
          </h2>
          <div className="flex justify-around">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">Product 1</h3>
              <p className="text-gray-500">Price</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">Product 2</h3>
              <p className="text-gray-500">Price</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">Product 3</h3>
              <p className="text-gray-500">Price</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
