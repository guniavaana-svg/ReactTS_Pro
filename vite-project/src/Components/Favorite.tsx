import type { RootState } from "../state/store.ts";
import { CiHeart } from "react-icons/ci";
import { useStateSelector, useStateDispatch } from "../state/hooks.ts";
import {addFavItem, removeFavItem, clearAllFavItem} from "../state/favorite/favoriteSlice.ts"
import { useEffect, useState } from "react";
import { DiVim } from "react-icons/di";
import { FaTimes } from "react-icons/fa";
import { API_URL } from "../../config.ts";
import type { StationeryDataType } from "../dataType.ts";
import ProductCard from "./ProductCard.tsx";
// import { useContext, useEffect, useState } from "react";
// import { FavoriteContext } from "../FavoriteContext";
function Favorite(){
    // const {FavId}=useContext(FavoriteContext)
    // console.log(FavListId, FavId)
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const favItemsId=useStateSelector((state: RootState)=>state.favorite.favItemIdList);
    const dispatch=useStateDispatch();
    const [favItemData,setFavItemData]=useState<StationeryDataType[]>([])
     useEffect(()=>{
        async function getProductsData(){
          const rec=await fetch(`${API_URL}/stationery?ids=${favItemsId.join(",")}`)
          const productData=await rec.json()
          console.log(productData)
          setFavItemData(productData)
        }
        getProductsData()
      },[])
    console.log(favItemsId)
    return(
    <>
        <button onClick={()=>setIsOpen(true)} className="border-none flex gab-2 justify-center items-center bg-light3 p-1 rounded-xl">
            <CiHeart className="w-[20px]  h-[20px] text-btnLight dark:text-btnDark"/>
            <span className="font-mtavruli translate-y-[2px]">რჩეულები</span>
        </button>
        {/* //////////////////////////////////////////////// */}
        {/* <button onClick={()=>dispatch(clearAllFavItem())}>clear All</button>
        <span >{favItemId}</span> */}
          {isOpen && 
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d152d] bg-opacity-50 dark:bg-opacity-80 dark:bg-darkshadow">
            <div className="relative w-11/12  max-w-[90vw] h-[90vh]  rounded-lg shadow-lg dark:shadow-darkshadow  p-8 bg-light1 dark:bg-dark2 flex items-center justify-center"> 
                <button className="xBtn"  onClick={()=>setIsOpen(false)}><FaTimes className="icon"/></button>
                <div className="favList flex flex-wrap gap-4  justify-around">
                    {favItemData.map((item)=>(
                         <div className="favItem relative max-w-[300px] rounded-xl shadow-lg dark:shadow-darkshadow dark:shadow-lg overflow-hidden" key={item.id}>
                            <ProductCard  className="" id={`${item.id}`} name={item.name} price={item.price} currency={item.currency} thumbnail={item.thumbnail}/>
                         </div>))
                    }
                    
                </div>
            </div>
        </div>
        }
    </>)
}
 
export default Favorite;