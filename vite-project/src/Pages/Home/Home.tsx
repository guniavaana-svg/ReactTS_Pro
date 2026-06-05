import { useEffect, useState } from "react";
import { API_URL } from "../../../config";
import ProductCard from "../../Components/ProductCard/ProductCard.tsx"
interface productDataType{
  id?: number;
  name?: string;
  description?: string;
  category?: string;
  subcategory?: string;
  brand?: string;
  sku?: string;
  price?: number;
  currency?: string;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  availability?: string;
  returnPolicy?: string;
  minimumOrderQuantity?: number;
  weight?: string;
  tags?: string[];
  thumbnail?: string;
  images?: string[];
  specifications?: Specification[];
}
interface Specification {
  size?: string;
  pages?: number;
  cover?: string;
  ruling?: string;
  color?: string;
  paperWeight?: string;
}
function home(){
  const[productData,setProductData]=useState<productDataType[]>([])
  useEffect(()=>{
    async function getProductsData(){
      const rec=await fetch(`${API_URL}/products`)
      const productData=await rec.json()
      setProductData(productData)
    }
    getProductsData()
  },[])
  return(
    <div className="productSection">
      <div className="heading"></div>
      <div className="products flex flex-wrap gap-4  justify-between ">
        {productData.map((item)=>(
          <div className="max-w-[300px] border rounded-xl shadow-lg overflow-hidden " key={item.id}>
            <ProductCard  className="" id={`${item.id}`} name={item.name} price={item.price} currency={item.currency} thumbnail={item.thumbnail}/>
          </div>
        ))}
      </div>
    </div>
  )
}
export default home;
