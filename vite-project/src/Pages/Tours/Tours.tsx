import "./Tours.css";
import { API_URL } from "../../../config";
import { useEffect, useState } from "react";
import TwoCol from "../../Components/TwoColLayout/TwoColLayout";
import Loader from "../../Components/Loader/Loader";
import BtnCategory from "../../Components/BtnCategory/BtnCategory";
import { useSearchParams , useParams} from "react-router";
import SearchForm from "../../Components/SearchForm/SearchForm";
import type  { ArticleDataType, CategoryDataType } from "./dataType";

function Tours() {
  const [loading, setLoader] = useState<boolean>(true);
  const [articlesData, setArticlesData] = useState<ArticleDataType[]>([]);
  const [categoryData, setCatogoryData] = useState<CategoryDataType[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();  // search params
  const categoryId = searchParams.get("category_id");  // category id URL-დან
  /**************** articles ****************/
  useEffect(() => {
    async function getArticlesData() {
      setLoader(true);
      // თუ category არ არის -> ყველა article
      const url = categoryId
        ? `${API_URL}/articles?category_id=${categoryId}`
        : `${API_URL}/articles`;
      const response = await fetch(url);
      const data: ArticleDataType[] = await response.json();
      setTimeout(() => {
        setArticlesData(data);
        setLoader(false);
      }, 1000);
    }
    getArticlesData();
  }, [categoryId]);
  /**************** category ****************/
  useEffect(() => {
    async function getCatogoryData() {
      const response = await fetch(`${API_URL}/articleCategory`);
      const data: CategoryDataType[] = await response.json();
      setCatogoryData(data);
    }
    getCatogoryData();
  }, []);
//   კატეგორიაზე დაკლილებისას:
  function handleCategoryFilter(id: number) {
    setSearchParams({
      category_id: id.toString(),
    });
  }
  // ყველა სტატია
  function handleAllArticles() {
    setSearchParams({});
  }
  return (
    <>
      <div className="flex gap-4 mb-5 items-center justify-center mt-5 flex-wrap">
        <div
          onClick={handleAllArticles}
        >
          <BtnCategory
            id={0}
            name="All"
            slug=""
          />
        </div>
        {/* categories */}
        {categoryData.map((item) => (
          <div
            key={item.id}
            onClick={() => handleCategoryFilter(item.id)}
          >
            <BtnCategory
              id={item.id}
              name={item.name}
              slug={item.slug}
            />
          </div>
        ))}
        <SearchForm/>
      </div>
      <div className="flex justify-content-between flex-wrap relative min-h-[30vh]">
        {loading && <Loader />}
        {!loading &&
          articlesData.map((item) => (
            <TwoCol
                key={item.id}
                id={`${item.id}`}
                className="transform scale-90 transition-all duration-200 hover:scale-100 hover:shadow-[0_2.5rem_4rem_rgba(0,0,0,0.4)] hover:outline hover:outline-[0.5rem] hover:outline-[#28b485]"
                title={item.title}
                description={item.description}
                img={item.mainImage}
            />
          ))}
      </div>
    </>
  );
}

export default Tours;