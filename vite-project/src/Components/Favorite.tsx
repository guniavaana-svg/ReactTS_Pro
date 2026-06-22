import { useContext, useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FavoriteContext } from "../FavoriteContext";
function Favorite(){
    const {FavId}=useContext(FavoriteContext)
    // console.log(FavListId, FavId)
    return(
    <>
        <button className="border-none flex gab-2 justify-center items-center bg-light3 p-1 rounded-xl">
            <CiHeart className="w-[20px]  h-[20px] text-btnLight dark:text-btnDark"/>
            <span className="font-mtavruli translate-y-[2px]">რჩეულები</span>
        </button>
        <span>{FavId}</span>
    </>)
}
 
export default Favorite;