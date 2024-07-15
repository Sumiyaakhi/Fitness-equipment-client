import Addproduct from "@/components/productManagementComponent/Addproduct";
import UpdateProduct from "@/components/productManagementComponent/UpdateProduct";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "@/redux/api/baseApi";
import { TProduct } from "@/types/ProductTypes";

const ProductManagement = () => {
  const { data, isLoading } = useGetProductsQuery({
    pollingInterval: 2000,
  });
  const [deleteProduct] = useDeleteProductMutation();

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
  // console.log(products);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(id);
        // handle success (e.g., show notification)
      } catch (error) {
        // handle error
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto lg:pt-32 font-primary">
      <Dialog>
        <DialogTrigger asChild>
          <button className="px-5 py-3 rounded-md font-bold my-5  bg-primary text-white  me-5 hover:text-primary hover:bg-white border-primary border-2">
            Add Product
          </button>
        </DialogTrigger>
        <DialogContent className="w-full">
          <Addproduct />
        </DialogContent>
      </Dialog>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-[15px]">
              <th>No</th>
              <th>Image & Name</th>
              <th>Stock Quantity</th>
              <th>Price</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product: TProduct, index: number) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={product.image} alt={product.productName} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product.productName}</div>
                    </div>
                  </div>
                </td>
                <td className="font-semibold">{product.stockQuantity}</td>
                <td className="font-semibold">{product.price}</td>
                <td className="font-semibold">{product.category}</td>
                <th className="">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="px-5 py-3 rounded-md bg-primary text-white  me-5 hover:text-primary hover:bg-white border-primary border-2">
                        UPDATE
                      </button>
                    </DialogTrigger>
                    <DialogContent className="w-full">
                      <UpdateProduct product={product} />
                    </DialogContent>
                  </Dialog>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="px-5 py-3 rounded-md bg-primary text-white  me-5 hover:text-primary hover:bg-white border-primary border-2"
                  >
                    DELETE
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
