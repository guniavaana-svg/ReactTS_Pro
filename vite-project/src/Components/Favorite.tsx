import type { RootState } from "../state/store.ts";
import { CiHeart } from "react-icons/ci";
import { useStateSelector, useStateDispatch } from "../state/hooks.ts";
import {addFavItem, removeFavItem, clearAllFavItem} from "../state/favorite/favoriteSlice.ts"
// import { useContext, useEffect, useState } from "react";
// import { FavoriteContext } from "../FavoriteContext";
function Favorite(){
    // const {FavId}=useContext(FavoriteContext)
    // console.log(FavListId, FavId)
    const favItemId=useStateSelector((state: RootState)=>state.favorite.value);
   const dispatch=useStateDispatch();
    console.log(favItemId)
    return(
    <>
        <button className="border-none flex gab-2 justify-center items-center bg-light3 p-1 rounded-xl">
            <CiHeart className="w-[20px]  h-[20px] text-btnLight dark:text-btnDark"/>
            <span className="font-mtavruli translate-y-[2px]">რჩეულები</span>
        </button>
        <button onClick={()=>dispatch(clearAllFavItem())}>clear All</button>
        <span >{favItemId}</span>
    </>)
}
 
export default Favorite;