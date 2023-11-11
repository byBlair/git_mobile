import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name : 'cart',
  initialState : {
    cartProductIds : []
  },
  reducers : {
    addTocart(state,action){
      state.cartProductIds = [action.payload,...state.cartProductIds]
    },
    removeFromCart(state,action){
      const indexOfId = state.cartProductIds.indexOf(action.payload)
      state.cartProductIds.splice(indexOfId,1);
    },
    clearAllItems(state){
      state.cartProductIds = []
    }
  }
})
export let {addTocart,clearAllItems,removeFromCart} = cartSlice.actions
export default cartSlice;