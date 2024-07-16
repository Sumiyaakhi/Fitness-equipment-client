import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "@/redux/store";
import { useForm } from "react-hook-form";
import { TUser } from "@/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { clearCart } from "@/redux/features/cartSlice";
import { useUpdateProductMutation } from "@/redux/api/baseApi";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const [updateProduct] = useUpdateProductMutation();
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TUser>();

  const onSubmit = async (data: TUser) => {
    console.log(data);
    reset();
  };

  const handlePlaceOrder = async () => {
    try {
      for (const item of cartItems) {
        await updateProduct({
          id: item._id,
          stockQuantity: item.stockQuantity - item.quantity,
        });
      }
      dispatch(clearCart());
      toast.success("Order placed successfully");
      navigate("/success");
    } catch (error) {
      toast.error("Failed to place order");
    }
  };

  return (
    <div className="md:pt-32 max-w-7xl mx-auto font-primary">
      <h1 className="text-xl md:text-3xl my-2 md:my-5">Checkout</h1>
      {/* User Info form  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-7 ">
        <div className="bg-white p-6 rounded-lg shadow-md w-4/5">
          <h3 className=" text-xl md:text-2xl font-semibold mb-4">
            Your Delivery Details
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                id="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Write your name"
              />
              {errors.name && <p className="text-red-500">Name is required</p>}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your Email
              </label>

              <input
                {...register("email", { required: true })}
                type="email"
                id="email"
                name="email"
                placeholder="Write your email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.email && (
                <p className="text-red-500">email is required</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Your Phone Number
              </label>

              <input
                {...register("phoneNumber", { required: true })}
                type="number"
                id="phone"
                placeholder="Write your Phone number"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.phoneNumber && (
                <p className="text-red-500">Phone number is required</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Delivery Address
              </label>
              <textarea
                {...register("address", { required: true })}
                id="address"
                rows={4}
                placeholder="Write your address"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
              {errors.email && (
                <p className="text-red-500">email is required</p>
              )}
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-block bg-primary text-white py-2 px-4 rounded-md hover:bg-white hover:border-primary hover:border-2 hover:text-primary font-bold transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md w-4/5">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="Add promo code" />
            <Button
              className="inline-block bg-primary text-white py-2 px-4 rounded-md hover:bg-white hover:border-primary hover:border-2 hover:text-primary font-bold transition duration-300 "
              type="submit"
            >
              Add
            </Button>
          </div>

          <div>
            <button
              className={`border-2 w-full py-3 text-center my-3 md:my-7 rounded-lg hover:bg-primary hover:text-white  ${
                paymentMethod == "cod" ? "bg-primary text-white " : ""
              }`}
              onClick={() => setPaymentMethod("cod")}
            >
              Cash On Delivery
            </button>
            <button
              className={`border-2 w-full py-3 text-center my-3 md:mb-7 rounded-lg hover:bg-primary hover:text-white  ${
                paymentMethod == "bank" ? "bg-primary text-white " : ""
              }`}
              onClick={() => setPaymentMethod("bank")}
            >
              Bank account
            </button>
            <button
              className={`border-2 w-full py-3 text-center my-3 md:mb-7 rounded-lg hover:bg-primary hover:text-white  ${
                paymentMethod == "card" ? "bg-primary text-white " : ""
              }`}
              onClick={() => setPaymentMethod("card")}
            >
              Card payment
            </button>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-block bg-primary text-white py-2 px-4 rounded-md hover:bg-white hover:border-primary hover:border-2 hover:text-primary font-bold transition duration-300"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
