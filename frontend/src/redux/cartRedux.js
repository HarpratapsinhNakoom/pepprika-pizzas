import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState : {
        pizzaList : [],
        quantity : 0,
        totalPrice : 0
    },
    reducers : {
        addToCart : (state, action) => {
            state.pizzaList.push(action.payload);
            state.quantity += 1;
            state.totalPrice += action.payload.quantity * action.payload.price;
        }
    }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;