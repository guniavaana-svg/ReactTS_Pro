import { useEffect, useState } from "react";
import { BsBasket2Fill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import type { StationeryDataType } from "../dataType";
import { API_URL } from "../../config";
import ProductCard from "./ProductCard";
function Cart(){
    const [isOpen, setIsOpen]=useState<boolean>(false)
    const [cartItemsData, setCartItemsData]=useState<StationeryDataType[]>([])
    useEffect(()=>{
        async function getCartItemsData(){
            const res=await fetch(`${API_URL}/stationery`)
            const cartItemsData=await res.json()
            setCartItemsData(cartItemsData)
            console.log(cartItemsData)
        }
        getCartItemsData()
    },[])
    return(
        <>
            <button onClick={()=>{setIsOpen(true)}} className="text-sm border-none flex gab-2 justify-center items-center bg-light3 p-1 rounded-xl gap-1">
                <BsBasket2Fill className="text-btnLight dark:text-btnDark"/>
                <span className="font-mtavruli translate-y-[2px]">კალათა</span>
            </button>
            {isOpen && <div onClick={()=>setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-end bg-dark1 bg-opacity-50 dark:bg-opacity-80 dark:bg-darkshadow">
                <div  onClick={(e) => e.stopPropagation()} className="relative max-w-[45vw] h-full shadow-lg dark:shadow-darkshadow bg-light1 dark:bg-dark2 p-2 flex flex-col justify-start">
                    <button className="absolute top-0 right-0 -translate-x-1/2 translate-y-1/2  text-btnLight dark:text-light2 text-xl"  onClick={()=>setIsOpen(false)}><FaTimes className=""/></button>
                    <div className="bg-light1 dark:bg-dark2  text-btnLight dark:text-light2 flex flex-col gap-2 pt-6">
                        <h2 className="translate-y-[px] font-mtavruli text-xl">თქვენი კალათა</h2>
                        <span className="text-sm">{`${cartItemsData.length} ერთეული`}</span>
                    </div>
                    <div className="favList overflow-y-scroll scrollbar-thin scrollbar-thumb-light2 hover:scrollbar-thumb-btnDark scrollbar-track-light1 h-[80vh] gap-2 flex flex-col items-start justify-start shrink-0 mb-3 py-3">
                        {cartItemsData.map((item)=>(
                            <div className="favItem flex-none relative max-w-[300px] rounded-xl shadow-lg dark:shadow-darkshadow dark:shadow-lg overflow-hidden" key={item.id}>
                                <ProductCard  className="" id={`${item.id}`} name={item.name} price={item.price} currency={item.currency} thumbnail={item.thumbnail}/>
                                <button className="absolute z-20 top-0 right-0 m-2 p-1 hover:bg-light2 rounded-lg hover:duration-500" ><FaTimes className="w-[20px] h-[20px] text-btnDark opacity-60 "/></button>
                            </div>))
                        } 
                    </div>
                    <button className="leading-none flex items-center p-3 h-[20px] text-btnLight bg-light2 rounded-lg ml-auto" onClick={()=>setCartItemsData([])}><span className="translate-y-[2px] font-mtavruli ">ყველას წაშლა</span></button>
                </div>
            </div>}
        </>
    ) 
}
export default Cart;