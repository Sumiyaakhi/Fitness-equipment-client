import { Link, useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "@/redux/api/baseApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cartSlice";
import { TProduct } from "@/types/ProductTypes";

const ProductDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const dispatch = useDispatch();
  const { data, isLoading } = useGetProductByIdQuery(id as string);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const product = data?.data;
  const { productName, category, image, stockQuantity, price, description } =
    product;
  // console.log(product);

  const handleAddToCart = (product: TProduct) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="max-w-7xl mx-auto md:pt-20 p-4">
      <div className="breadcrumbs text-sm">
        <ul className=" font-primary ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">All Products</Link>
          </li>
          <li>
            <Link to="/product-details">Product Details</Link>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:mt-12">
        <div>
          <img className="w-full" src={image} alt="" />
        </div>
        <div className="flex justify-center items-center">
          <div>
            <h1 className="text-3xl font-bold font-primary ">{productName}</h1>

            <p className="font-primary py-3">{description}</p>
            <p className="border-red-500 border-2 w-2/3 font-primary font-bold text-red-600 text-center">
              Upto 10% discount is on over this price
            </p>
            <p className="text-xl font-bold font-primary pt-4">
              Category: {category}
            </p>
            <p className="text-xl font-bold font-primary pt-4">
              {" "}
              Price: ${price}
            </p>
            <p className="text-xl font-bold font-primary pt-4">
              Stock: {stockQuantity}
            </p>
            <div className="my-6">
              <button
                onClick={() => handleAddToCart(product)}
                disabled={stockQuantity <= 0}
                className="font-bold my-auto bg-white text-primary border-2 w-full rounded-lg hover:bg-primary hover:text-white py-3"
              >
                {product.stockQuantity <= 0 ? "Out of Stock" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
