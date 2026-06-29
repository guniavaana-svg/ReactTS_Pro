import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface CartStateType{
    CartItemsIdList:PayloadActionType[];
}
type PayloadActionType={
    id:number;
    quantity:number;
    price:number;
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
        addItemToCart:(state,action:PayloadAction<PayloadActionType>)=>{
            const {id, quantity, price}=action.payload;
            if(state.CartItemsIdList.some(item=>item.id===id)===false){
                state.CartItemsIdList.push({id, quantity, price});
                localStorage.setItem("CartItemsId",JSON.stringify(state.CartItemsIdList))
            }
        },
        removeItemFromCart:(state, action:PayloadAction<PayloadActionType>)=>{
            const {id, quantity}=action.payload;
            if(state.CartItemsIdList.some(item=>item.id==id)===true && state.CartItemsIdList.findIndex(item=>item.id==id)!=-1){
                const deleteIdIndex:number=state.CartItemsIdList.findIndex(item=>item.id)
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
export const{addItemToCart, removeItemFromCart, clearAllCartItems}=cartSlice.actions;
export default cartSlice.reducer;