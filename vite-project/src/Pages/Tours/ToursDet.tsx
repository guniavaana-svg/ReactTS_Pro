import "./Tours.css";
import { API_URL } from "../../../config";
import { useEffect, useState } from "react";
import { useParams} from "react-router";
import type  { ArticleDataType} from "./dataType";
import TwoCol from "../../Components/TwoColLayout/TwoColLayout";

function ToursDet() {
  const [articleData, setArticleData] = useState<ArticleDataType | null>(null);
  /**************** articles ****************/
const{id}=useParams();
  useEffect(() => {
    async function getArticleData() {
      const response = await fetch(`${API_URL}/articles/${id}`);
      const data:ArticleDataType = await response.json();
       setArticleData(data);
    }
    getArticleData();

  }, []);
 
  return (
    <>
    <TwoCol title={articleData?.title} description={articleData?.description} img={articleData?.mainImage}/>
    </>
  );
}

export default ToursDet;