import { TProduct } from "@/types/ProductTypes";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cartSlice";

const ProductCard = ({ product }: { product: TProduct }) => {
  const dispatch = useDispatch();
  const { productName, image, description, _id, category, price } = product;
  // console.log(_id);

  const handleAddToCart = (product: TProduct) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="">
      <Card className="h-full w-full hover:border-2 font-primary">
        <CardHeader>
          <img src={image} alt="" />
          <CardTitle>{productName}</CardTitle>
          <p>
            {" "}
            <span className="font-bold">Category : </span>
            {category}
          </p>
          <CardDescription>{description}</CardDescription>
          <p className="text-xl">
            {" "}
            <span className="font-bold text-noraml">Price: </span>${price}
          </p>
        </CardHeader>
        <CardContent className=" ">
          <div className="grid grid-cols-2 gap-4 ">
            <button
              onClick={() => handleAddToCart(product)}
              disabled={product.stockQuantity <= 0}
              className="font-bold my-auto bg-white text-primary border-2 w-full rounded-lg hover:bg-primary hover:text-white py-3"
            >
              {product.stockQuantity <= 0 ? "Out of Stock" : "Add to Cart"}
            </button>
            <Link to={`/product/${_id}`}>
              <button className="font-bold my-auto bg-white text-primary border-2 w-full rounded-lg hover:bg-primary hover:text-white py-3">
                Details
              </button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
