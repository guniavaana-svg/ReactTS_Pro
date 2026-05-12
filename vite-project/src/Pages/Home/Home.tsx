import "./Home.css";
import { API_URL } from "../../../config";
import { useEffect, useState } from "react";
import TwoCol from "../../Components/TwoColLayout/TwoColLayout";
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
function Home(){
     const [articleData, setArticleData]=useState<articleDataType[]>([]);
       useEffect(()=>{
            async function getarticleData() {
           const response=await fetch(`${API_URL}/articles`)
           const Data:articleDataType[]=await response.json()
           setArticleData(Data);
           console.log(articleData)
       }
       getarticleData()
       },[])
    return(<>
        <h2>this is home page</h2>
       <div className="flex flex-row justify-center items-center gap-8">
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