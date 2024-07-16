import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { toast } from "sonner";

const useCartRefreshWarning = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (cartItems.length > 0) {
        toast.warning("You have unsaved data on cart");
        window.confirm("Are you sure you want to delete this product?");
        event.preventDefault();
        event.returnValue = "";
        return "You have items in your cart. Are you sure you want to leave?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cartItems]);
};

export default useCartRefreshWarning;
