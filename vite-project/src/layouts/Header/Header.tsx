import  "./Header.css";
import Nav from "../../Components/Nav/Nav.tsx";
import LogIn from "../../Pages/LogIn/LogIn.tsx";
import Registration from "../../Pages/Registration/Registration.tsx";
import { TiAdjustContrast} from "react-icons/ti";
import { FiUser } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { NavLink} from "react-router-dom";
import { useState, useEffect } from "react";
import type { boolean } from "yup";
function Header(){
    const newMode:string|null=localStorage.getItem("mode");//ჯერ მომაქ ლოკალ სთორიჯიდან იმფო
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<number>(0);
    const [mode, setMode] = useState<string>(newMode||"dark");// თუ არსებობს newMode ჩამიწერე, თუარადა "dark"
useEffect(() => {
    function handleScroll(){
         setScrolled(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);
// ///////////////////////////mode///////////////////////
useEffect(()=>{
    localStorage.setItem("mode", mode )//mode თუ შეიცვალა. ლოცალსტორიჯში ჩამიწერე და html-ში ჩამიწერე
    if (mode === "dark") {
    document.documentElement.classList.add("dark");
    } else {
    document.documentElement.classList.remove("dark");
    }
},[mode])
    return(<>
    <header className="fixed  top-0 z-50  px-5 shadow-lg bg-[#d9e1f9] dark:text-[#b3c3f3] dark:bg-[#070b17] right-0 left-0">
        <div className="container max-w-[1400px] mx-auto">
             <div className="flex gap-2 items-center justify-center">
            <button className="flex items-center justify-start gap-1 px-2 py-1 rounded-[10px] bg-[#c6d2f6] w-1/5 border-none">
                <FiSearch className="text-[#142044]"/>
                <span className="text-[#0D152D]">ძიება</span>
            </button>
            <div className=" flex justify-center items-center flex-col mx-auto translate-x-[50%] w-[100px]">
                <div className="logo overflow-hidden flex justify-content-center align-items-center w-[100px]">
                    <img src="../../../public/faicon.png" alt="logo" className="w-full h-full object-contain"/>
                </div>
                <span className={`${ (scrolled > 50 ) ? "hidden" : "block "} text-[#4169E1] text-[24px] font-unicode font-medium`}>წერო</span>
            </div>
            <div className="flex items-center justify-center bg-[#3454b4] text-[#ecf0fc] dark:bg-[#033AA8] px-2 py-1 rounded-[10px]">
                <button onClick={()=>setIsOpen(true)} className="font-mtavruli leading-none flex items-center p-1 h-[20px] gap-2 ">
                    <FiUser className="text-[#ecf0fc] w-[20px]  h-[20px]"/>
                    <span className="translate-y-[2px]">ავტორიზაცია</span>
                </button>
                {isOpen && (
                    <div onClick={()=>setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d152d] bg-opacity-50 dark:bg-opacity-80 dark:bg-darkshadow">
                        <div  onClick={(e) => e.stopPropagation()} className="relative w-11/12 max-w-4xl max-h-[95vh]  rounded shadow-lg flex text-light2">
                            <button className="absolute top-0 right-0 p-2 text-btnLight dark:text-light2"  onClick={()=>setIsOpen(false)}><FaTimes className="w-[25px] h-[25px]"/></button>
                            <div className="w-1/2 p-8 bg-light1 dark:bg-dark1 overflow-scroll scrollbar-hide">
                                <LogIn/>
                            </div>
                            <div className="w-1/2 p-8 bg-light2 dark:bg-dark2 overflow-scroll scrollbar-hide">
                                <Registration/>
                            </div>
                        </div>   
                    </div>
                )}
            </div>
            <button onClick={()=>setMode((pre)=>pre==="light" ? "dark" : "light")} className="darkMode">
                <TiAdjustContrast className="text-btnLight dark:text-btnDark w-[35px] h-[35px] dark:rotate-180"/>
            </button>
            </div>
            <div className="headerSection2 flex gap-2 items-center justify-center max-w-[1400px] mx-auto">
            <Nav/>
            </div>
        </div>
       
    </header>
    </>)
}
export default Header;