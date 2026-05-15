import "./Layout.css";
import Header from "../Header/Header.tsx";
import Footer from "../Footer/Footer.tsx";
import { Outlet, useLocation } from "react-router-dom";
function Layout (){
    // const location = useLocation();
    // console.log("Current path:", location.pathname);
    return(<>
        <Header/>
        <main className="max-w-[1400px] mx-auto">
            <Outlet/>
        </main>
        <Footer/>
    </>)
}
export default Layout;