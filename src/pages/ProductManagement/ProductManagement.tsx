import { useGetProductsQuery } from "@/redux/api/baseApi";
import { TProduct } from "@/types/ProductTypes";

const ProductManagement = () => {
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
  console.log(products);
  return (
    <div className="max-w-7xl mx-auto lg:pt-32">
      <div className="md:my-5">
        <button className="px-5 py-3 rounded-full bg-primary text-white  me-5 hover:text-primary hover:bg-white border-primary border-2  font-bold">
          Add Product
        </button>
      </div>
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
                  <button className="px-5 py-3 rounded-md bg-primary text-white  me-5 hover:text-primary hover:bg-white border-primary border-2">
                    UPDATE
                  </button>
                  <button className="px-5 py-3 rounded-md bg-primary text-white  me-5 hover:text-primary hover:bg-white border-primary border-2">
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
