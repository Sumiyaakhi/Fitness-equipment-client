import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store"; // Adjust the path based on your actual store file location

interface CartItem {
  id: string;
  quantity: number;
  // Add more fields if needed
}

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const { id, quantity } = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.push(action.payload);
      }
    },
    // Add more reducers as needed
  },
});

export const { addToCart } = cartSlice.actions;

// Selectors
export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
