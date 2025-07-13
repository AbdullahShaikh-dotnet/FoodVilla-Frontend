import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.card.info.id !== id);
    },

    clearCart: (state, action) => {
      state.items.length = 0;
    },

    // Increment Item Quantity

    // Decrement Item Quantity
  },
});

export const { addItems, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
