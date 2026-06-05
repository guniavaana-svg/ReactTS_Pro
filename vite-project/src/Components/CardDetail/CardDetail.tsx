import "./CardDetail.css";
import { IoCartOutline } from "react-icons/io5";;
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
                <div>
                    <img src={thumbnail} alt={thumbnail} />
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
                <h2>{name}</h2>
                <span>{brand}</span>
                <span>{stock}</span>
               <div>
                <input type="number" name="quantity" />
               </div>
               <button>
                <IoCartOutline/>
                <span>კალათაში დამატება</span>
               </button>
               <div>
                <h3>აღწერილობა</h3>
                <p>{description}</p>
                <h3>ზომები</h3>
                <p>{specifications}</p>
                <h3>მიწოდების პირობები და ვადები</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id deserunt voluptates fuga explicabo, magnam illum recusandae rem beatae deleniti, laudantium labore, minima vel enim! Veniam, ea voluptatibus. Sequi, error perferendis.</p>
               </div>
            </div>
        </section>
    )
}
export default CardDetail;