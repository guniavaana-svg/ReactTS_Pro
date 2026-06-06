import type {StationeryDataType} from "../../dataType.ts"
import { IoCartOutline } from "react-icons/io5"
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { API_URL } from "../../../config.ts";
function StationeryCardDetail(){
    const [stationeryData, setStationeryData] = useState<StationeryDataType>();
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
            <div className="imagebox flex-1 max-w-full">
                <div>
                    <img src={stationeryData?.thumbnail} alt={stationeryData?.thumbnail} />
                </div>
                <div>
                    {/* {images.map((item)=>(
                        <div>
                            <img src={item} alt={item} />
                        </div>
                    ))} */}
                </div>
            </div>
            <div className="detailbox flex-1 max-w-full">
                <h2>{}</h2>
                <span>{}</span>
                <span>{}</span>
               <div>
                <input type="number" name="quantity" />
               </div>
               <button>
                <IoCartOutline/>
                <span>კალათაში დამატება</span>
               </button>
               <div>
                <h3>აღწერილობა</h3>
                <p>{}</p>
                <h3>ზომები</h3>
                <p>{}</p>
                <h3>მიწოდების პირობები და ვადები</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id deserunt voluptates fuga explicabo, magnam illum recusandae rem beatae deleniti, laudantium labore, minima vel enim! Veniam, ea voluptatibus. Sequi, error perferendis.</p>
               </div>
            </div>
        </section>
    )
}
export default StationeryCardDetail;