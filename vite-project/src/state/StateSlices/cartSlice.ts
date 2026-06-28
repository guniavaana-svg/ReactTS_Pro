import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface CartStateType{
    CartItemsIdList:number[]
}
const CartItemsId=localStorage.getItem("CartItemsId")
//default value
const initialState:CartStateType={
    CartItemsIdList:CartItemsId?JSON.parse(CartItemsId):[]
}
//state
const cartSlice=createSlice({
    name:"cart",
    initialState,
//reduser
    reducers:{
//action
        addItemToCart:(state,action:PayloadAction<number>)=>{
            if(state.CartItemsIdList.includes(action.payload)===false){
                state.CartItemsIdList.push(action.payload);
                localStorage.setItem("CartItemsId",JSON.stringify(state.CartItemsIdList))
                console.log(localStorage.getItem("CartItemsId"))
            }
        },
        removeItemFromCart:(state, action:PayloadAction<number>)=>{
            if(state.CartItemsIdList.includes(action.payload)===true && state.CartItemsIdList.indexOf(action.payload)!=-1){
                const deleteIdIndex:number=state.CartItemsIdList.indexOf(action.payload)
                state.CartItemsIdList.splice(deleteIdIndex,1)
                localStorage.setItem("CartItemsId",JSON.stringify(state.CartItemsIdList))
            }
        },
        clearAllCartItems:(state)=>{
            localStorage.removeItem("CartItemsId");
            state.CartItemsIdList=[];
        }
    }
})
export const{addItemToCart, removeItemFromCart,clearAllCartItems}=cartSlice.actions;
export default cartSlice.reducer;