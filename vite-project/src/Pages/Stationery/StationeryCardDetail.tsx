import "./Stationery.css"
import type {StationeryDataType} from "../../dataType.ts"
import { IoCartOutline } from "react-icons/io5"
import { FaTimes } from "react-icons/fa";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import { API_URL } from "../../../config.ts";
import { DiVim } from "react-icons/di";
function StationeryCardDetail(){
    const [stationeryData, setStationeryData] = useState<StationeryDataType>();
    const [imgSrc, setimgSrc] = useState<string>("");
    const [imgSrcIndex, setimgSrcIndex] = useState<number>(0);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const length: number=stationeryData?.images?.length ?? 0;
    const{id}=useParams();
    useEffect(() => {
        async function getStationeryData() {
            const response = await fetch(`${API_URL}/stationery/${id}`);
            const data:StationeryDataType = await response.json();
            setStationeryData(data);
        }
    getStationeryData();
  }, []);
    return(
        <section className="sectionCardDEtail flex gap-2">
            <div className="w-2/5 px-5 overflow-hidden">
                <div onClick={()=>setIsOpen(true)} className="h-[50dvh] rounded-xl shadow-lg dark:shadow-darkshadow dark:shadow-lg overflow-hidden cursor-pointer">
                    <img className="w-full h-full object-cover" src={imgSrc ||stationeryData?.thumbnail} alt={stationeryData?.name} />
                </div>  
                <div className="flex gap-2 justify-center pt-5">
                    {stationeryData?.images?.map((item,index)=>(
                         <div key={index} onClick={()=>{setimgSrc(item); setimgSrcIndex(index)}} className="max-w-[70px] max-h-[70px] overflow-hidden rounded-xl shadow-lg dark:shadow-darkshadow dark:shadow-lg">
                            <img className="w-full h-full object-cover" src={item} alt={item} />
                        </div>
                    ))}
                </div>
            </div>
            {isOpen && 
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d152d] bg-opacity-50 dark:bg-opacity-80 dark:bg-darkshadow">
                <div className="relative w-11/12  max-w-[90vw] h-[90vh]  rounded-lg shadow-lg dark:shadow-darkshadow  p-8 bg-light1 dark:bg-dark2 flex items-center justify-center">
                    <button onClick={()=>{setimgSrcIndex(prev=>prev>0?prev-1:length-1)}} className="leftBtn -translate-x-1/2 left-0">
                        <AiOutlineLeft className="icon"/>
                    </button>
                    <button onClick={()=>{setimgSrcIndex(prev=>prev<length-1?prev+1:0)}} className="RightBtn translate-x-1/2 right-0">
                        <AiOutlineRight className="icon"/>
                    </button>
                    <button className="xBtn"  onClick={()=>setIsOpen(false)}><FaTimes className="icon"/></button>
                    <div className="w-[85vw] h-[85vh] rounded-lg overflow-hidden">
                        <img className="w-full h-full object-contain" src={stationeryData?.images?.[imgSrcIndex ?? 0] ||stationeryData?.thumbnail} alt={stationeryData?.name} />
                    </div>
                </div>
            </div>}
            <div className="detailbox w-3/5 px-5">
                <h2 className="text-xl pb-3">{stationeryData?.name}</h2>
                <span className="uppercase">{stationeryData?.brand}</span>
                <span className="">{stationeryData?.price}{stationeryData?.currency}</span>
               <d iv>
                <input type="number" name="quantity" />
               </div>
               <button>
                <IoCartOutline/>
                <span>კალათაში დამატება</span>
               </button>
               <div>
                <h3>აღწერილობა</h3>
                <p>{stationeryData?.description}</p>
                <h3>ზომები</h3>
                {stationeryData?.specifications.map((item, index)=>(
                    <ul key={index}>
                        <li>ზომა: {item.size}</li>
                        <li>ფურცელი: {item.pages}</li>
                        <li>ყდა: {item.cover}</li>
                        <li>{item.ruling}</li>
                        <li>ფერი: {item.color}</li>
                        <li>წონა:{item.paperWeight}</li>
                    </ul>
                ))}
                <h3>მიწოდების პირობები და ვადები</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id deserunt voluptates fuga explicabo, magnam illum recusandae rem beatae deleniti, laudantium labore, minima vel enim! Veniam, ea voluptatibus. Sequi, error perferendis.</p>
               </div>
            </div>
        </section>
    )
}
export default StationeryCardDetail;