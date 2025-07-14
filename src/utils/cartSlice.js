import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      let data = action.payload;
      state.items.push(data);
    },

    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.card.info.id !== id);
    },

    clearCart: (state) => {
      state.items.length = 0;
    },

    // Increment Item Quantity
    incrementQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.card.info.id === id);
      if (item) {
        item.quantity = (item.quantity || 1) + 1;
      }
    },

    // Decrement Item Quantity
    decrementQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.card.info.id === id);
      if (!item) return;

      if (item.quantity === 1) {
        state.items = state.items.filter(
          (i) => i.card.info.id !== item.card.info.id
        );
      } else {
        item.quantity = item.quantity - 1;
      }
    },
  },
});

export const {
  addItems,
  removeItem,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
