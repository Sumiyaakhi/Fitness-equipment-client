import { useGetProductsQuery } from "@/redux/api/baseApi";
import ProductCard from "../ProductComponent/ProductCard";
import { TProduct } from "@/types/ProductTypes";
import { Link } from "react-router-dom";

const FeaturedProduct = () => {
  const { data, isLoading } = useGetProductsQuery({});

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
  //   console.log(products);
  return (
    <div className="md:my-8 max-w-7xl mx-auto ">
      <h1 className="text-3xl font-primary py-4 md:py-8 text-center hover:underline">
        Exclusive Featured On
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products?.slice(0, 4).map((product: TProduct, index: number) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <div className="text-center my-8">
        <Link to="/products">
          <button className="px-5 py-3 rounded-full bg-primary text-white  me-5 hover:text-primary hover:bg-white border-primary border-2  font-bold">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProduct;
