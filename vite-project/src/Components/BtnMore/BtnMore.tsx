import { NavLink } from "react-router";
import "./BtnMore.css";
interface BtnMorePropsType{
    btnText?:string;
    path?:string;
}
function BtnMore(props:BtnMorePropsType){
    const {btnText,path}=props;
    return(<>
    <NavLink to={path} className="BtnMore">{btnText} &rarr;</NavLink>
    {/* a Sesacvlelia LInkiT konkretulze ro gadavides */}
    </>)
}
export default BtnMore;