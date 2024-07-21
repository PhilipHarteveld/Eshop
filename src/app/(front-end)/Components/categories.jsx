import React from "react";

const Categories = () => {
  // Define your categories here
  const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Clothing" },
    { id: 3, name: "Home & Kitchen" },
    { id: 4, name: "Home & Kitchen" },
    { id: 5, name: "Home & Kitchen" },
    { id: 6, name: "Home & Kitchen" },
    { id: 7, name: "Home & Kitchen" },
  ];

  return (
    <div className="mt-4 p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Categories</h2>
      <ul className="list-disc pl-4 flex justify-around">
        {categories.map((category) => (
          <div
            key={category.id}
            className=" bg-slate-500  p-10 m-4 flex rounded-2xl just"
          >
            <li className="text-lg">{category.name}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
