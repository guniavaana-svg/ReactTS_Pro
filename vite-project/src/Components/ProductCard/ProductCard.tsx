import { NavLink } from "react-router";

interface productСardPropsType{
    className?:string;
    id?:string;
    name?:string;
    price?:number;
    currency?:string;
    thumbnail?:string;
}
function ProductCard(props:productСardPropsType){
    const {className, name, price, currency, thumbnail, id}=props
    return(
    <div className={`flex flex-col${className}`}>
        <div className="h-[300px] overflow-hidden">
            <img src={thumbnail} alt={thumbnail} className="w-full h-full object-fit-contain" />
        </div> 
        <div className="flex flex-row gap-2 items-start text-[.8rem] p-6">
            <h3 className="">{name}</h3>
            <span className="font-bold p-2 border-[1px] border-light2 bg-light2 rounded-xl">{price}{currency}</span>
            <NavLink to={id}>goooo</NavLink>
        </div>
    </div>)
}
export default ProductCard