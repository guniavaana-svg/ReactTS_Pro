import "./Layout.css";
import Header from "../Header/Header.tsx";
import Footer from "../Footer/Footer.tsx";
import { Outlet, useLocation } from "react-router-dom";
import Home from "../../Pages/Home/Home.tsx";
function Layout (){
    const location = useLocation();
    console.log("Current path:", location.pathname);
    console.log("gggggggggggggggg")
    return(<>
        <Header/>
        <main>
            <Outlet/>
            <Home/>
        </main>
        <Footer/>
    </>)
}
export default Layout;