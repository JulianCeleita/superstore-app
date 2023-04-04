import { createSlice } from "@reduxjs/toolkit";

const initialState: BasketState = {
    items: [],
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {},
        removeFromBasket: (state, action) => {},
    }
})

export const { addToBasket, removeFromBasket } = basketSlice.actions;

//TODO selectors - this is how we pull information from the Global store slice
export const selectItems = (state:{basket:BasketState}) => state.basket.items;

export default basketSlice.reducer;