import { createSlice } from "@reduxjs/toolkit";

const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as its not in the basket`
        );
      }
      state.items=newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

//TODO selectors - this is how we pull information from the Global store slice
export const selectItems = (state: { basket: BasketState }) =>
  state.basket.items;

export default basketSlice.reducer;
