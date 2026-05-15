import "./CardDetail.css";
interface SubttilesType{
    title?:string;
    text?:string;
}
interface CardDetailPropsType{
    title?:string;
    images?:string[];
    mainImage?:string;
    description?:string;
    subtitles?:SubttilesType[];
}

function CardDetail(props:CardDetailPropsType){
    const{title,description,images, subtitles,mainImage}=props;
    return(
        <>
        <div className="imagebox">
            <img src={mainImage} alt="image" />
        </div>
        <div className="titlebox">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
      <div className="subimage and subtitle box">
        <div className="subtitle">
            
        </div>
        <div className="images">
            {images?.map((item,index)=>(
                <img key={index} src={item} alt={`image${index}`} />
            ))}
            <img src="" alt="" />
        </div>
        <div className="subheading">
             {subtitles?.map((item, index) => (
            <div key={index}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
        </>
    )
}
export default CardDetail;