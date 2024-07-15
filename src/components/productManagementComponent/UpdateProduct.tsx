import { useUpdateProductMutation } from "@/redux/api/baseApi";
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { TProduct } from "@/types/ProductTypes";
import { Input } from "../ui/input";

const UpdateProduct = ({ product }: { product: TProduct }) => {
  const {
    productName,
    image,
    description,
    _id,
    category,
    price,
    stockQuantity,
  } = product;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TProduct>({
    defaultValues: {
      productName: productName,
      price: price,
      description: description,
      stockQuantity: stockQuantity,
      category: category,
      image: image,
      _id: _id,
    },
  });

  const [updateProduct, { isLoading }] = useUpdateProductMutation({});
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
  const onSubmit = async (data: TProduct) => {
    try {
      await updateProduct({ id: product._id, updateProduct: data }).unwrap(); // Ensure to include id in updateProduct call
      console.log("Product updated successfully:", data);
    } catch (error) {
      console.error("Failed to update product: ", error);
    }
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>
          <h1 className="text-xl font-primary text-center">Update Product</h1>
        </DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogDescription>
          <div className="my-5">
            <div className="grid w-full items-center gap-1.5">
              <p className="py-2">Product Name</p>
              <Input
                {...register("productName", { required: true })}
                type="text"
                id="productName"
                placeholder="Write Product name"
              />
              {errors.productName && (
                <p className="text-red-500">Product name is required</p>
              )}
            </div>
            <div className="grid w-full items-center gap-1.5">
              <p className="py-2">Product price</p>
              <Input
                {...register("price", { required: true })}
                type="number"
                id="price"
                placeholder="Write price"
              />
              {errors.price && (
                <p className="text-red-500">Price is required</p>
              )}
            </div>
            <div className="grid w-full items-center gap-1.5">
              <p className="py-2">Stock Quantity</p>
              <Input
                {...register("stockQuantity", { required: true })}
                type="number"
                id="stockQuantity"
                placeholder="Write the number of quantity"
              />
              {errors.stockQuantity && (
                <p className="text-red-500">Stock quantity is required</p>
              )}
            </div>
            <div className="grid w-full items-center gap-1.5">
              <p className="py-2">Product Description</p>
              <Input
                {...register("description", { required: true })}
                type="text"
                id="description"
                className="h-20"
                placeholder="Write description of product"
              />
              {errors.description && (
                <p className="text-red-500">Description is required</p>
              )}
            </div>
            <div className="grid w-full items-center gap-1.5">
              <p className="py-2">Product Image</p>
              <Input
                {...register("image", { required: true })}
                type="text"
                id="image"
                placeholder="Give image link"
              />
              {errors.image && (
                <p className="text-red-500">Image link is required</p>
              )}
            </div>
            <div className="grid w-full items-center gap-1.5">
              <p className="py-2">Product Category</p>
              <Input
                {...register("category", { required: true })}
                type="text"
                id="category"
                placeholder="Write product category"
              />
              {errors.category && (
                <p className="text-red-500">Category is required</p>
              )}
            </div>
          </div>
        </DialogDescription>
        <DialogFooter>
          <div className="flex">
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-primary text-white me-5 hover:text-primary hover:bg-white border-primary border-2"
            >
              Update
            </button>
            <DialogClose asChild>
              <button className="px-4 py-2 rounded-lg bg-primary text-white me-5 hover:text-primary hover:bg-white border-primary border-2">
                Close
              </button>
            </DialogClose>
          </div>
        </DialogFooter>
      </form>
    </>
  );
};

export default UpdateProduct;
