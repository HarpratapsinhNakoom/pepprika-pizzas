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
        updateQuantity : (state, action) => {
            state.pizzaList = state.pizzaList.map((curr) => {
                if(curr.title === action.payload.title) {
                    curr.quantity = action.payload.inc 
                                    ? curr.quantity + 1 :
                                    curr.quantity - 1;
                }

                return curr;
            });
            console.log(action.payload);
            console.log(current(state));
            state.totalPrice = action.payload.inc ?
                                parseInt(state.totalPrice) + parseInt(action.payload.price) :
                                state.totalPrice - action.payload.price;
        },
        removeItem : (state, action) => {
            state.pizzaList = state.pizzaList.filter((curr) => {
                return curr.title !== action.payload.title;
            });
            state.quantity -= 1;
            state.totalPrice -= action.payload.price*action.payload.quantity;
            // state.totalPrice = 0;
        }
    }
})

export const {addToCart, updateQuantity, removeItem} = cartSlice.actions;
export default cartSlice.reducer;