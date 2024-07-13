import { TProduct } from "@/types/ProductTypes";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProductCard = ({ product }: { product: TProduct }) => {
  const {
    productName,
    image,
    description,
    id,
    category,
    price,
    stockQuantity,
  } = product;
  console.log(product);
  return (
    <div className="">
      <Card className="h-full w-full hover:border-2">
        <CardHeader>
          <img src={image} alt="" />
          <CardTitle>{productName}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <p className="text-xl">
            {" "}
            {/* <span className="font-bold">Price:</span>  */}${price}
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <button className="font-bold my-auto bg-white text-primary border-2 w-full rounded-full hover:bg-primary hover:text-white py-3">
              Add to Cart
            </button>
            <button className="font-bold my-auto bg-white text-primary border-2 w-full rounded-full hover:bg-primary hover:text-white py-3">
              Details
            </button>
          </div>
        </CardContent>
        <CardFooter>{/* <p>Card Footer</p> */}</CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
