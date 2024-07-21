"use client";
import React from "react";
import { useState } from "react";

export default function ProductPage() {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", onSale: false });

  const handleProductChange = (e) => {
    setNewProduct({ ...newProduct, name: e.target.value });
  };

  const handleToggleSale = () => {
    setNewProduct({ ...newProduct, onSale: !newProduct.onSale });
  };

  const handleAddProduct = () => {
    setProducts([...products, newProduct]);
    setNewProduct({ name: "", onSale: false });
    setShowModal(false);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setNewProduct({ ...newProduct, images: imageUrls });
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Product List</h2>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowModal(true)}
        >
          Add Product
        </button>
      </div>

      {products.map((product, index) => (
        <div key={index} className="mt-4">
          <p className="font-bold">{product.name}</p>
          <p>Description: {product.description}</p>
          <div className="flex">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={product.name}
                className="w-32 h-32 mt-2 mr-2"
              />
            ))}
          </div>
          <p>Price: ${product.price}</p>
          {product.onSale && <p>On Sale</p>}
          {product.sizes && (
            <div>
              <p>Sizes: {product.sizes.join(", ")}</p>
            </div>
          )}
        </div>
      ))}

      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto w-">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="inline-block align-bottom mt-52 bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all ">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Base Information
                    </h3>
                    <div className="border p-5 rounded-lg ">
                      <div className="mt-2">
                        <label className="block text-sm font-medium leading-5 text-gray-700">
                          Product Name
                        </label>
                        <input
                          type="text"
                          value={newProduct.name}
                          onChange={handleProductChange}
                          placeholder="Product name"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </div>
                      <label className="block text-sm font-medium leading-5 text-gray-700">
                        Description
                      </label>
                      <textarea
                        value={newProduct.description}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            description: e.target.value,
                          })
                        }
                        placeholder="Product description"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
                      />
                    </div>
                    <h4>Pictures</h4>
                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
                      />
                    </div>
                    <input
                      type="number"
                      value={newProduct.price}
                      onChange={(e) =>
                        setNewProduct({ ...newProduct, price: e.target.value })
                      }
                      placeholder="Price"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
                    />
                    <label className="mt-3 flex items-center">
                      <input
                        type="checkbox"
                        checked={newProduct.onSale}
                        onChange={handleToggleSale}
                        className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                      />
                      <span className="ml-2 text-sm leading-5 text-gray-900">
                        On Sale
                      </span>
                    </label>
                    <input
                      type="text"
                      value={newProduct.sizes}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          sizes: e.target.value.split(","),
                        })
                      }
                      placeholder="Sizes (comma separated)"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
                    />
                  </div>
                  <div>
                    <h2 className="font-semibold">Preview of card</h2>
                    <div className=" bg-slate-500 text-white p-4">
                      <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/2">
                            <img
                              src="/your-product-image.jpg"
                              alt="Loom Stars Original T-Shirt"
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                          <div className="md:w-1/2 md:ml-8 md:mt-0 mt-4">
                            <h2 className="text-3xl font-bold mb-2">
                              {newProduct.name
                                ? newProduct.name
                                : "Product Name"}
                            </h2>
                            <p className="text-lg mb-4">
                              {newProduct.price ? newProduct.price : "R100"}
                            </p>
                            <div className="mb-4">
                              <label
                                htmlFor="size"
                                className="block text-gray-400 font-bold mb-2"
                              >
                                Size
                              </label>
                              <select
                                id="size"
                                value={newProduct.size}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              >
                                <option value={null}>Select Size</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                              </select>
                            </div>
                            <div className="mb-4">
                              <label
                                htmlFor="color"
                                className="block text-gray-400 font-bold mb-2"
                              >
                                Color
                              </label>
                              <div className="flex space-x-2">
                                <input
                                  type="radio"
                                  id="black"
                                  name="color"
                                  value="black"
                                  className="hidden"
                                />
                                <label
                                  htmlFor="black"
                                  className="block w-8 h-8 rounded-full bg-black cursor-pointer"
                                ></label>
                                <input
                                  type="radio"
                                  id="white"
                                  name="color"
                                  value="white"
                                  className="hidden"
                                />
                                <label
                                  htmlFor="white"
                                  className="block w-8 h-8 rounded-full bg-white cursor-pointer border border-gray-400"
                                ></label>
                                <input
                                  type="radio"
                                  id="blue"
                                  name="color"
                                  value="blue"
                                  className="hidden"
                                />
                                <label
                                  htmlFor="blue"
                                  className="block w-8 h-8 rounded-full bg-blue-500 cursor-pointer"
                                ></label>
                                <input
                                  type="radio"
                                  id="purple"
                                  name="color"
                                  value="purple"
                                  className="hidden"
                                />
                                <label
                                  htmlFor="purple"
                                  className="block w-8 h-8 rounded-full bg-purple-500 cursor-pointer"
                                ></label>
                                <input
                                  type="radio"
                                  id="green"
                                  name="color"
                                  value="green"
                                  className="hidden"
                                />
                                <label
                                  htmlFor="green"
                                  className="block w-8 h-8 rounded-full bg-green-500 cursor-pointer"
                                ></label>
                              </div>
                            </div>
                            <button
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                              disabled={!newProduct.size || !color}
                            >
                              Add To Cart
                            </button>
                            {newProduct.description ? (
                              <p className="text-gray-400 mt-4">
                                {newProduct.description}
                              </p>
                            ) : (
                              <p>Product details</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    onClick={handleAddProduct}
                  >
                    Add Product
                  </button>
                </span>
                <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
