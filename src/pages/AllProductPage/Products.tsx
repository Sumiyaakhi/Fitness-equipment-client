import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import ProductCard from "@/components/ProductComponent/ProductCard";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { TProduct } from "@/types/ProductTypes";

const Products = () => {
  const { data, isLoading } = useGetProductsQuery({});
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // '' for no sorting, 'asc' for ascending, 'desc' for descending

  if (isLoading) {
    return (
      <>
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </>
    );
  }

  const { data: products } = data;

  const filteredProducts = products?.filter((product: TProduct) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = filteredProducts
    ?.slice()
    .sort((a: TProduct, b: TProduct) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else if (sortOrder === "desc") {
        return b.price - a.price;
      } else {
        return 0;
      }
    });

  const clearFilters = () => {
    setSearchQuery("");
    setSortOrder("");
  };

  return (
    <div className="md:pt-24 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-primary py-4 md:py-10 hover:underline">
          Enhance our all products
        </h1>
        <div className="flex space-x-4 items-center">
          <div className="relative">
            <input
              type="search"
              placeholder="Search by product name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border py-2 rounded pl-10 w-auto pr-20"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">Sort by price</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
          <button
            onClick={clearFilters}
            className="border p-2 rounded bg-gray-200 hover:border-primary hover:bg-white font-semibold"
          >
            Clear Filters
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {sortedProducts?.length ? (
          sortedProducts.map((product: TProduct, index: number) => (
            <ProductCard key={index} product={product} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default Products;
