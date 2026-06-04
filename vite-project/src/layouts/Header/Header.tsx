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
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [mode, setMode] = useState<string>("dark");
    
useEffect(() => {
    function handleScroll(){
        setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);
localStorage.setItem("mode", mode )
useEffect(()=>{
    
    const newMode:string|null=localStorage.getItem("mode");
    if (newMode === "dark") {
    document.documentElement.classList.add("dark");
    } else {
    document.documentElement.classList.remove("dark");
    }
},[mode])
    return(<>
    <header className="sticky top-0 z-50 max-w-[1400px] mx-auto px-5 shadow-lg bg-[#d9e1f9] dark:text-[#b3c3f3] dark:bg-[#070b17]">
        <div className="flex gap-2 items-center justify-center">
            <button className="flex items-center justify-start gap-1 px-2 py-1 rounded-[10px] bg-[#c6d2f6] w-1/5 border-none">
                <FiSearch className="text-[#142044]"/>
                <span>ძიება</span>
            </button>
            <div className=" flex justify-center items-center flex-col mx-auto translate-x-[50%] w-[100px]">
                <div className="logo overflow-hidden flex justify-content-center align-items-center w-[100px]">
                    <img src="../../../public/faicon.png" alt="logo" className="w-full h-full object-contain"/>
                </div>
                <span className={`${scrolled ? "hidden" : "block"} text-[#4169E1] text-[24px] font-unicode font-medium`}>წერო</span>
            </div>
            <div className="flex items-center justify-center bg-[#3454b4] text-[#ecf0fc] px-2 py-1 rounded-[10px]">
                <button onClick={()=>setIsOpen(true)} className="font-mtavruli leading-none flex items-center px-2 py-1 h-[20px] ">
                    <FiUser className="text-[#ecf0fc] w-[20px]  h-[20px]"/>
                    <span className="translate-y-[2px]">რეგისტრაცია / შესვლა</span>
                </button>
                {isOpen && (
                    <div onClick={()=>setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d152d] bg-opacity-50">
                        <div  onClick={(e) => e.stopPropagation()} className="relative w-11/12 max-w-4xl max-h-[95vh]  rounded shadow-lg flex text-[#142044]">
                            <button className="absolute top-0 right-0 p-2 text-[#3454b4]" onClick={()=>setIsOpen(false)}><FaTimes className="w-[25px] h-[25px]"/></button>
                            <div className="w-1/2 p-8 bg-[#ecf0fc] overflow-scroll scrollbar-hide">
                                <LogIn/>
                            </div>
                            <div className="w-1/2 p-8 bg-[#d9e1f9] overflow-scroll scrollbar-hide">
                                <Registration/>
                            </div>
                        </div>   
                    </div>
                )}
            </div>
            <button onClick={()=>setMode((item)=>item==="light" ? "dark" : "light")} className="darkMode">
                <TiAdjustContrast className="text-[#3454b4] w-[35px] h-[35px] dark:rotate-180"/>
            </button>
        </div>
        <div className="headerSection2 flex gap-2 items-center justify-center max-w-[1400px] mx-auto">
            <Nav/>
        </div>
    </header>
    </>)
}
export default Header;