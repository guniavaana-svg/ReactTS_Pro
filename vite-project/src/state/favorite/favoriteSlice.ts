import { createSlice } from "@reduxjs/toolkit";
//action
//reduser
//state
interface FavoriteState{
    value:number;
}
const initialState:FavoriteState={
    value:0, //default value
}
const favoriteSlace=createSlice({
    name:"favorite",
    initialState,//state საიდანაც დაიწყება
    reducers:{

    }
})
export default favoriteSlace.reducer;