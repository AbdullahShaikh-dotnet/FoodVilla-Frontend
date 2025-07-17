import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      const data = action.payload;
      const id = data.card.info.id;
      const existingItem = state.items.find((item) => item.card.info.id === id);
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        state.items.push({ ...data, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.card.info.id !== id);
    },

    clearCart: (state) => {
      state.items.length = 0;
    },

    incrementQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.card.info.id === id);
      if (item) {
        item.quantity = (Number(item.quantity) || 1) + 1;
      }
    },

    decrementQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.card.info.id === id);
      if (!item) return;
      if ((Number(item.quantity) || 1) <= 1) {
        // Remove item if quantity drops to 0 or 1
        state.items = state.items.filter((item) => item.card.info.id !== id);
      } else {
        item.quantity -= 1;
      }
    },

    updateItemQuantity: (state, action) => {
      const [itemID, cartQuantity] = action.payload;
      const storeItem = state.items.find(i => i.card.info.id === itemID);
      if (!storeItem) return;
      storeItem.quantity = Number(cartQuantity);
    }


  },
});

export const {
  addItems,
  removeItem,
  clearCart,
  incrementQuantity,
  decrementQuantity,
  updateItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
