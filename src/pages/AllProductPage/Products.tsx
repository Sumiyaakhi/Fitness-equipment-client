import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import ProductCard from "@/components/ProductComponent/ProductCard";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { TProduct } from "@/types/ProductTypes";

const Products = () => {
  const { data, isLoading } = useGetProductsQuery({});
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // '' for no sorting, 'asc' for ascending, 'desc' for descending
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]); // Adjust the price range as per your requirement
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

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

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const filteredProducts = products
    ?.filter((product: TProduct) =>
      product.productName.toLowerCase().includes(searchQuery.toLowerCase())
    )
    ?.filter((product: TProduct) =>
      selectedCategories.length
        ? selectedCategories.includes(product.category)
        : true
    )
    ?.filter(
      (product: TProduct) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
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
    setSelectedCategories([]);
    setPriceRange([0, 1000]); // Reset to default price range
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
              className="border p-2 rounded pl-10 pr-20"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">Sort by price</option>
            <option value="asc"> Low to High</option>
            <option value="desc"> High to Low</option>
          </select>
          <button
            onClick={clearFilters}
            className="border p-2 rounded bg-gray-200"
          >
            Clear Filters
          </button>
        </div>
      </div>
      <div className="my-4">
        <h2 className="text-xl font-semibold mb-2">Category Filters</h2>
        <div className="relative inline-block">
          <button
            onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
            className="border p-2 rounded bg-gray-200"
          >
            Select Categories
          </button>
          {isCategoryDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
              {products?.map((product: TProduct) => (
                <label
                  key={product.category}
                  className="flex items-center px-4 py-2"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(product.category)}
                    onChange={() => handleCategoryChange(product.category)}
                  />
                  <span className="ml-2">{product.category}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="my-4">
        <h2 className="text-xl font-semibold mb-2">Price Range</h2>
        <div className="flex space-x-4 items-center">
          <input
            type="number"
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([Number(e.target.value), priceRange[1]])
            }
            className="border p-2 rounded w-24"
          />
          <span>to</span>
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
            className="border p-2 rounded w-24"
          />
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
