import { NavLink } from "react-router-dom";
interface CategoryPorpsType{
        id:number;
        slug?:string;
        name:string;
    }
function BtnCategory(props:CategoryPorpsType){
    const {slug, name, id}=props;
    return(
        <div className="border-2 border-[#28b485] p-2 rounded-3xl">
            <NavLink to={`?category_id=${id}`}>{name}</NavLink>
        </div>
    )
}
export default BtnCategory;