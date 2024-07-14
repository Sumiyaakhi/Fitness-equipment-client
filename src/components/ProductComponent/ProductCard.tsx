import { TProduct } from "@/types/ProductTypes";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const ProductCard = ({ product }: { product: TProduct }) => {
  const { productName, image, description, _id, category, price } = product;
  // console.log(_id);
  return (
    <div className="">
      <Card className="h-full w-full hover:border-2">
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
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <button className="font-bold my-auto bg-white text-primary border-2 w-full rounded-lg hover:bg-primary hover:text-white py-3">
              Add to Cart
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
