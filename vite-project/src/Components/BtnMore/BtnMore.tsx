import "./BtnMore.css";
interface BtnMorePropsType{
    btnText:string;
}
function BtnMore(props:BtnMorePropsType){
    const {btnText}=props;
    return(<>
    <a href="#section-tours" className="inline-block
        text-[#28b485] 
        no-underline
        text-[1.6rem] 
        font-semibold 
        tracking-wide 
        border-b 
        border-[#28b485] 
        p-[3px] 
        mt-auto 
        transition-all 
        duration-200
        hover:bg-[#28b485] 
        hover:text-white 
        hover:shadow-[0_1rem_2rem_rgba(0,0,0,0.15)] 
        hover:-translate-y-[2px] 
        active:shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] 
        active:translate-y-[1px]">{btnText} &rarr;</a>
    </>)
}
export default BtnMore;