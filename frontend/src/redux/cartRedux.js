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
        },
        // updateQuantity : (state) => {
        //     console.log(state.pizzaList)
        //     // if (action.payload.inc === true){
        //     //     console.log(state.pizzaList)
        //     // }
        //     //     // state.pizzaList[state.pizzaList.indexOf(action.payload.pizza)].quantity += 1;
        //     // else{
        //     //     // state.pizzaList[state.pizzaList.indexOf(action.payload.pizza)].quantity -= 1;
        //     // }
        // }
    }
})

export const {addToCart, updateQuantity} = cartSlice.actions;
export default cartSlice.reducer;