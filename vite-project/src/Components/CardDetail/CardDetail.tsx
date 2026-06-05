import "./CardDetail.css";
interface productPropsType{
  id?: number;
  name?: string;
  description?: string;
  category?: string;
  subcategory?: string;
  brand?: string;
  sku?: string;
  price?: number;
  currency?: string;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  availability?: string;
  returnPolicy?: string;
  minimumOrderQuantity?: number;
  weight?: string;
  tags?: string[];
  thumbnail?: string;
  images?: string[];
  specifications?: Specification[];
}
interface Specification {
  size?: string;
  pages?: number;
  cover?: string;
  ruling?: string;
  color?: string;
  paperWeight?: string;
}

function CardDetail(props:productPropsType){
    const{id, name, description, category, subcategory, brand, sku, price, currency, discountPercentage, rating, stock, availability, returnPolicy, minimumOrderQuantity, weight, tags, thumbnail, images, specifications}=props;
    return(
        <section className="sectionCardDEtail flex gap-2">
            <div className="imagebox flex-1 max-w-full">
                <img src={thumbnail} alt={thumbnail} />
            </div>
            <div className="detailbox flex-1 max-w-full"></div>
        </section>
    )
}
export default CardDetail;