import "./BtnMore.css";
interface BtnMorePropsType{
    btnText:string;
}
function BtnMore(props:BtnMorePropsType){
    const {btnText}=props;
    return(<>
    <a href="#section-tours" className="BtnMore">{btnText} &rarr;</a>
    {/* a Sesacvlelia LInkiT konkretulze ro gadavides */}
    </>)
}
export default BtnMore;