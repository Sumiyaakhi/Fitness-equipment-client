// cartSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "@/types/ProductTypes";
import { toast } from "sonner";

interface CartItem extends TProduct {
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")!)
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TProduct>) => {
      const product = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item._id === product._id
      );
      if (existingItem) {
        if (existingItem.quantity < product.stockQuantity) {
          existingItem.quantity += 1;
          toast.success(`${product.productName} quantity increased`);
        } else {
          toast.error(
            `${product.productName} has reached maximum stock quantity`
          );
        }
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
        toast.success(`${product.productName} added to the cart`);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const removedProductName =
        state.cartItems.find((item) => item._id === action.payload)
          ?.productName || "Product";
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
      toast.success(`${removedProductName} removed from the cart`);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ productId: string; quantity: number }>
    ) => {
      const { productId, quantity } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item._id === productId
      );
      if (existingItem) {
        existingItem.quantity = quantity;
        toast.success(
          `${existingItem.productName} quantity updated to ${quantity}`
        );
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cartItems");
      toast.success("Cart cleared");
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
