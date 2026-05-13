import "./Home.css";
import { API_URL } from "../../../config";
import { useEffect, useState } from "react";
import TwoCol from "../../Components/TwoColLayout/TwoColLayout";
import Loader from "../../Components/Loader/Loader";
import BtnCategory from "../../Components/BtnCategory/BtnCategory";
import { useSearchParams } from "react-router";
interface subtitlesType{
    title:string;
    text:string;
}
interface articleDataType{
    id:number;
    title:string;
    mainImage:string;
    images:string[];
    description:string;
    subtitles:subtitlesType[];
    content:string;
}
interface CategoryDataType{
    id:number;
    name:string;
    slug:string;
}
function Home(){
   
    const [loading, setLoader] = useState<boolean>(true);
    const [articleData, setArticleData]=useState<articleDataType[]>([]);
       useEffect(()=>{
            async function getArticleData() {
           const response=await fetch(`${API_URL}/articles?category_id=1`)
           const Data:articleDataType[]=await response.json()
           setArticleData(Data);
           console.log(Data);
       }
       getArticleData()
       },[])
    //    /****************category************ */
    const [catogoryData, setCatogoryData]=useState<CategoryDataType[]>([]);
       useEffect(()=>{
            async function getCatogoryData() {
           const response=await fetch(`${API_URL}/articleCategory`)
           const data:CategoryDataType[]=await response.json()
           setCatogoryData(data);
           console.log(data);
       }
       getCatogoryData()
       },[])
    return(<>
        <div className="flex gap-4 mb-5 items-center justify-center mt-5">
            {catogoryData.map(item=>(
                <BtnCategory key={item.id} id={item.id} name={item.name} slug=""/>
            ))}
        </div>
        <div className="flex justify-content-between flex-wrap relative">
        { loading &&<Loader/>}
        {articleData.map(item => (
            <TwoCol
            key={item.id}
            className="transform scale-90 transition-all duration-200 hover:scale-100 hover:shadow-[0_2.5rem_4rem_rgba(0,0,0,0.4)] hover:outline hover:outline-[0.5rem] hover:outline-[#28b485]"
            title={item.title}
            description={item.description}
            img={item.mainImage}
            />
        ))}
        </div>
    </>)
}
export default Home;