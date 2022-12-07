import {createSlice, current} from '@reduxjs/toolkit'

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
        removeItem : (state, action) => {
            console.log(current(state))
            state.pizzaList = state.pizzaList.filter((curr) => {
                return curr.title !== action.payload.title;
            });
            console.log(current(state))

            console.log(action.payload)
            state.quantity -= 1;
            state.totalPrice -= action.payload.price*action.payload.quantity;
        }
    }
})

export const {addToCart, removeItem} = cartSlice.actions;
export default cartSlice.reducer;