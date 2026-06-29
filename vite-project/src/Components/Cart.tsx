import { useEffect, useState } from "react";
import { BsBasket2Fill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import type { StationeryDataType } from "../dataType";
import { API_URL } from "../../config";
import ProductCard from "./ProductCard";
import { useStateSelector, useStateDispatch } from "../state/hooks.ts";
import {addItemToCart, removeItemFromCart,clearAllCartItems} from "../state/StateSlices/cartSlice.ts";
import type { RootState } from "../state/store.ts";
import type { number } from "yup";

function Cart(){
    const dispatch=useStateDispatch();
    const cartItemsId=useStateSelector((state:RootState)=>state.cart.CartItemsIdList);
    const [isOpen, setIsOpen]=useState<boolean>(false);
    const [cartItemsData, setCartItemsData]=useState<StationeryDataType[]>([]);
    const queryParams:string=cartItemsId.map(item=>`id=${item.id}`).join("&");
    const sumPrice:number=cartItemsId.reduce((sum,item)=>{
        return sum+item.quantity*item.price
    },0)
    const sumQuantity:number=cartItemsId.reduce((sum,item)=>{
        return sum+item.quantity
    },0)
    console.log(sumPrice,sumQuantity)
    useEffect(()=>{
        if(cartItemsId.length==0){
            setCartItemsData([])
            return;
        }
        async function getCartItemsData(){
            const rec=await fetch(`${API_URL}/stationery?${queryParams}`)
            const cartItemsData=await rec.json()
            setCartItemsData(cartItemsData)
            console.log(cartItemsData)
        }
        getCartItemsData()
    },[cartItemsId])
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
                        <div className="flex gap-1 items-center justify-start">
                            <span className="text-sm">{`${sumQuantity} ერთეული`}</span>
                            <span className="text-sm ml-auto">{`ჯამური თანხა: ${sumPrice}`}</span>
                        </div>
                    </div>
                    <div className="favList overflow-y-scroll scrollbar-thin scrollbar-thumb-light2 hover:scrollbar-thumb-btnDark scrollbar-track-light1 h-[80vh] gap-2 flex flex-col items-start justify-start shrink-0 mb-3 py-3">
                        {cartItemsData.map((item)=>(
                            <div className="favItem flex-none relative max-w-[300px] rounded-xl shadow-lg dark:shadow-darkshadow dark:shadow-lg overflow-hidden" key={item.id}>
                                <ProductCard  className="" id={`${item.id}`} name={item.name} price={item.price} currency={item.currency} thumbnail={item.thumbnail}/>
                                <button onClick={()=>{dispatch(removeItemFromCart(Number(item.id)))}} className="absolute z-20 top-0 right-0 m-2 p-1 hover:bg-light2 rounded-lg hover:duration-500" ><FaTimes className="w-[20px] h-[20px] text-btnDark opacity-60 "/></button>
                            </div>
                            ))
                        } 
                    </div>
                    <button className="leading-none flex items-center p-3 h-[20px] text-btnLight bg-light2 rounded-lg ml-auto" onClick={()=>{dispatch(clearAllCartItems()),setCartItemsData([])}}><span className="translate-y-[2px] font-mtavruli ">ყველას წაშლა</span></button>
                </div>
            </div>
            }
        </>
    ) 
}
export default Cart;