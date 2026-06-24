import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface FavoriteState{
    value:number[];
}
const LocalItemId=localStorage.getItem("favList")

const initialState:FavoriteState={
    value:LocalItemId?JSON.parse(LocalItemId):[] //default value
}
//state
const favoriteSlice=createSlice({
    name:"favorite",
    initialState,//state საიდანაც დაიწყება
//reduser
    reducers:{
//action
        addFavItem:(state, action:PayloadAction<number>)=>{
            if(state.value.includes(action.payload)===false){
                state.value.push(action.payload);
                localStorage.setItem("favList",JSON.stringify(state.value))
            }
        },
        removeFavItem:(state)=>{
          
        },
        clearAllFavItem:(state)=>{
            localStorage.removeItem("favList")
            state.value=[]
        }
    }
})
export const {addFavItem, removeFavItem, clearAllFavItem}=favoriteSlice.actions;
export default favoriteSlice.reducer;