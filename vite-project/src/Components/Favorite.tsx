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
    const queryParams:string = favItemsId.map(id =>`id=${id}`).join("&");
     useEffect(()=>{
        if (favItemsId.length==0){
            return()=>{
                setFavItemData([])
            }
        }
        async function getProductsData(){
          const rec=await fetch(`${API_URL}/stationery?${queryParams}`)
          const productData=await rec.json()
          setFavItemData(productData)
        }
        getProductsData()
      },[favItemsId])
    console.log(favItemsId)
    return(
    <>
        <button onClick={()=>setIsOpen(true)} className="border-none flex gab-2 justify-center items-center bg-light3 p-1 rounded-xl ">
            <CiHeart className="w-[20px]  h-[20px] text-btnLight dark:text-btnDark"/>
            <span className="font-mtavruli translate-y-[2px]">რჩეულები</span>
        </button>
          {isOpen && 
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-dark1 bg-opacity-50 dark:bg-opacity-80 dark:bg-darkshadow">
            <div className="w-11/12  max-w-[40vw] h-full shadow-lg dark:shadow-darkshadow bg-light1 dark:bg-dark2 p-2">
                <div className="bg-light1 dark:bg-dark2  text-btnLight dark:text-light2 py-4 px-8 flex items-center justify-start">
                    <h2 className="translate-y-[2px] font-mtavruli text-xl ">თქვენი რჩეული პროდუქტები</h2>
                    <button className="ml-auto"  onClick={()=>setIsOpen(false)}><FaTimes className="w-[25px] h-[25px]"/></button>
                </div>
                <div className="favList overflow-y-scroll scrollbar-thin scrollbar-thumb-light2 hover:scrollbar-thumb-btnDark scrollbar-track-light1 h-[90vh] gap-2 flex flex-wrap items-start justify-start mb-4 py-3">
                    {favItemData.map((item)=>(
                         <div className="favItem relative max-w-[300px] rounded-xl shadow-lg dark:shadow-darkshadow dark:shadow-lg overflow-hidden h-[400px]" key={item.id}>
                            <ProductCard  className="" id={`${item.id}`} name={item.name} price={item.price} currency={item.currency} thumbnail={item.thumbnail}/>
                            <button className="absolute z-20 top-0 right-0 m-2 p-1 hover:bg-light2 rounded-lg hover:duration-500" onClick={()=>dispatch(removeFavItem(item.id||0))} ><FaTimes className="w-[20px] h-[20px] text-btnDark opacity-60 "/></button>
                         </div>))
                    } 
                </div>
                <button className="leading-none flex items-center p-3 h-[20px] text-btnLight bg-light2 rounded-lg ml-auto" onClick={()=>{dispatch(clearAllFavItem()); setFavItemData([])}}><span className="translate-y-[2px] font-mtavruli ">ყველას წაშლა</span></button>
            </div>
        </div>
        }
    </>)
}
 
export default Favorite;