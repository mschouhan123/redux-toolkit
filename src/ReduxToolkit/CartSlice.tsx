import {createSlice} from '@reduxjs/toolkit'; 

const initialState:any[] = []; 

const cartSlice = createSlice({
    name: 'cart', 
    initialState, 
    reducers: {
        addCartItems(state, action){
          state.push(action.payload);
        },
        removeCartItem(state, action){
           return state.filter((item, index) => index !== action.payload);
        },
    },
});

export const {addCartItems, removeCartItem}= cartSlice.actions;
export default cartSlice.reducer; 