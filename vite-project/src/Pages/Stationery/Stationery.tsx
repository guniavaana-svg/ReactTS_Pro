import "./Stationery.css"
import { useEffect, useState } from "react";
import { API_URL } from "../../../config";
import ProductCard from "../../Components/ProductCard.tsx"
import type {StationeryDataType} from "../../dataType.ts"
function Stationery(){
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
          <div className="max-w-[300px] rounded-xl shadow-lg dark:shadow-darkshadow dark:shadow-lg overflow-hidden " key={item.id}>
            <ProductCard  className="" id={`${item.id}`} name={item.name} price={item.price} currency={item.currency} thumbnail={item.thumbnail}/>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Stationery;
