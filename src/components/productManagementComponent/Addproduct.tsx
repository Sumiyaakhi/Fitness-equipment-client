import {
  useAddAProductMutation,
  useGetProductsQuery,
} from "@/redux/api/baseApi";
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

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TProduct>();
  const [addAProduct, { isLoading }] = useAddAProductMutation();
  const { refetch } = useGetProductsQuery({});

  const onSubmit = async (data: TProduct) => {
    try {
      await addAProduct(data).unwrap();
      reset();
      refetch();
    } catch (error) {
      console.error("Failed to add product: ", error);
    }
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>
          <h1 className="text-xl font-primary text-center">Add A Product</h1>
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
        <DialogFooter className="">
          <div className="flex">
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-primary text-white me-5 hover:text-primary hover:bg-white border-primary border-2"
              disabled={isLoading}
            >
              {isLoading ? "Adding..." : "Add"}
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

export default AddProduct;
