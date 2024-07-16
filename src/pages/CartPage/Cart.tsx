import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { removeFromCart, updateQuantity } from "@/redux/features/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (productId: string) => {
    if (
      window.confirm(
        "Are you sure you want to remove this product from the cart?"
      )
    ) {
      dispatch(removeFromCart(productId));
    }
  };

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    dispatch(updateQuantity({ productId, quantity: newQuantity }));
  };

  const handleCheckout = () => {
    // Check if any product in the cart is out of stock
    const outOfStock = cartItems.some(
      (item) => item.quantity > item.stockQuantity
    );
    if (!outOfStock) {
      // Proceed to checkout page
      navigate("/checkout");
    } else {
      alert(
        "Some products in your cart are out of stock. Please adjust quantities."
      );
    }
  };

  return (
    <div className="pt-32 max-w-7xl mx-auto font-primary">
      <div className="breadcrumbs text-sm py-5">
        <ul className=" font-primary ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      <h2 className="text-3xl font-primary font-bold mb-4 ">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-xl md:text-3xl font-bold text-center py-4 md:py-8">
          Your cart is empty.
        </p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr className="text-xl">
                  <th>No</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>
                      <img
                        className="w-36"
                        src={item.image}
                        alt={item.productName}
                      />
                    </td>
                    <td>
                      {" "}
                      <h3>{item.productName}</h3>
                    </td>
                    <td>
                      <p> $ {item.price}</p>
                    </td>
                    <td>
                      <div className="flex items-center justify-center gap-3">
                        <button
                          onClick={() =>
                            handleQuantityChange(item._id, item.quantity - 1)
                          }
                          disabled={item.quantity === 1}
                          className="w-8 border-2 rounded-full h-8 hover:bg-gray-200  flex items-center justify-center"
                        >
                          <FaMinus className="" />
                        </button>
                        {item.quantity}
                        <button
                          onClick={() =>
                            handleQuantityChange(item._id, item.quantity + 1)
                          }
                          disabled={item.quantity === item.stockQuantity}
                          className="w-8 border-2 rounded-full h-8 hover:bg-gray-200  flex items-center justify-center"
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </td>
                    <td>
                      <button
                        className="bg-primary btn text-white hover:text-primary hover:bg-white font-bold hover:border-primary rounded-lg"
                        onClick={() => handleRemove(item._id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="divider"></div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-xl ms-auto ">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-center hover:underline">
                Pricing Details
              </h3>
              <div className=" mx-auto">
                {cartItems.length > 0 && (
                  <div>
                    <p className="md:text-xl lg:text-2xl">
                      Total Items :{" "}
                      {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                    </p>
                    <p className="md:text-xl lg:text-2xl">
                      Total Price: $
                      {cartItems
                        .reduce(
                          (acc, item) => acc + item.quantity * item.price,
                          0
                        )
                        .toFixed(2)}
                    </p>
                    <div className="flex justify-end">
                      <button
                        className="bg-primary btn text-white hover:text-primary hover:bg-white font-bold hover:border-primary rounded-lg"
                        onClick={handleCheckout}
                        disabled={cartItems.some(
                          (item) => item.quantity > item.stockQuantity
                        )}
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
