import  "./Header.css";
import Nav from "../../Components/Nav/Nav.tsx";
import { TiAdjustContrast} from "react-icons/ti";
import { FiUser } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { NavLink} from "react-router-dom";
function Header(){
    return(<>
    <header className="max-w-[1400px] mx-auto bg-[#ecf0fc] px-5">
        <div className="flex gap-2 items-center justify-center">
            <button className="flex items-center justify-start gap-1 px-2 py-1 rounded-[10px] bg-[#c6d2f6] w-1/5 border-none">
                <FiSearch className="text-[#142044]"/>
                <span>ძიება</span>
            </button>
            <div className=" flex justify-center items-center flex-col mx-auto translate-x-[50%] w-[100px]">
                <div className="logo overflow-hidden flex justify-content-center align-items-center w-[100px]">
                    <img src="../../../public/faicon.png" alt="logo" className="w-full h-full object-contain"/>
                </div>
                <span className="text-[#4169E1] text-[24px] font-unicode font-medium">წერო</span>
            </div>
            <div className="flex items-center justify-center bg-[#4169E1] text-[#ecf0fc] px-2 py-1 rounded-[10px]">
                <button className="font-mtavruli leading-none flex items-center px-2 py-1 h-[20px] ">
                    <FiUser className="text-[#ecf0fc] w-[20px]  h-[20px]"/>
                    <span className="translate-y-[2px]">რეგისტრაცია / შესვლა</span>
                </button>
            </div>
            <div className="darkMode ">
                <TiAdjustContrast className="text-[#4169E1] w-[35px] h-[35px]"/>
            </div>
        </div>
        <div className="headerSection2 flex gap-2 items-center justify-center max-w-[1400px] mx-auto">
            <Nav/>
        </div>
    </header>
    </>)
}
export default Header;