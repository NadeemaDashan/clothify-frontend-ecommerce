import { createSlice } from "@reduxjs/toolkit"

const initialState={
    show:false
}

const CartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        showCart:(state)=>{
            state.show=!state.show
        }
    }
})

export const {showCart} = CartSlice.actions;
export default CartSlice.reducer;