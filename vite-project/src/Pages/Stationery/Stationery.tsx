import "./Stationery.css"
import { useEffect, useState } from "react";
import { API_URL } from "../../../config";
import ProductCard from "../../Components/ProductCard.tsx"
import type {StationeryDataType} from "../../dataType.ts"
import { CiHeart } from "react-icons/ci";
// import  { FavoriteContext, useFavorite } from "../../FavoriteContext.tsx";
import { useParams } from "react-router";
import type { RootState } from "../../state/store.ts";
import { useStateSelector, useStateDispatch } from "../../state/hooks.ts";
import {addFavItem, removeFavItem} from "../../state/favorite/favoriteSlice.ts";


function Stationery(){
  // const favItemId=useStateSelector((state: RootState)=>state.favorite.value);
  const dispatch=useStateDispatch();
  const[productData,setProductData]=useState<StationeryDataType[]>([])
  useEffect(()=>{
    async function getProductsData(){
      const rec=await fetch(`${API_URL}/stationery`)
      const productData=await rec.json()
      setProductData(productData)
    }
    getProductsData()
  },[])
  return(
    <div className="productSection">
      <div className="heading"></div>
      <div className="products flex flex-wrap gap-4  justify-around ">
        {productData.map((item)=>(
          <div className="productItem relative max-w-[300px] rounded-xl shadow-lg dark:shadow-darkshadow dark:shadow-lg overflow-hidden " key={item.id}>
            <ProductCard  className="" id={`${item.id}`} name={item.name} price={item.price} currency={item.currency} thumbnail={item.thumbnail}/>
             <button onClick={()=>dispatch(addFavItem(item.id||0))} className="favIcon absolute z-20 ">
                <CiHeart className="icon text-btnLight"/>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Stationery;
