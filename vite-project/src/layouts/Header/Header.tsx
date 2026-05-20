import  "./Header.css";
import Nav from "../../Components/Nav/Nav.tsx";
import { TiAdjustContrast } from "react-icons/ti";
import { NavLink} from "react-router-dom";
function Header(){
    return(<>
    <header className="flex gap-2 items-center justify-center max-w-[1400px] mx-auto">
        <div className="logo overflow-hidden flex justify-content-center align-items-center w-[50px] mr-auto">
        <img src="../../../public/favicon.png" alt="logo" className="w-full h-full object-contain"/>
        </div>
        <Nav/>
        {/* registration/login */}
        <div className="ml-auto flex gap-2 uppercase">
          <NavLink to="registration" end >registration</NavLink>
          <NavLink to="login" end>login</NavLink>
        </div>
        <div className="darkMode ">
            <TiAdjustContrast className="text-[#28b485] w-[35px] h-[35px]"/>
        </div>
    </header>
    </>)
}
export default Header;