import "./CardDetail.css";
interface CardDetailPropsType{
    title?:string;
    images?:string[];
    mainImage?:string;
    description?:string;
    subtitles?:string[];
}

function CardDetail(props:CardDetailPropsType){
    const{title,images,description, subtitles}=props;
    return(
        <>
        <div className="imagebox">
            <img src="{images}" alt="image" />
        </div>
        <div className="titlebox">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
      <div className="subimage and subtitle box">
        <div className="subtitle">
            <h2>{}</h2>
            <p>{}</p>
        </div>
        <div className="images">
            <img src="" alt="" />
        </div>
      </div>
        </>
    )
}
export default CardDetail;