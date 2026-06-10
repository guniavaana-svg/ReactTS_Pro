import "./Layout.css";
import Header from "../Header/Header.tsx";
import Footer from "../Footer/Footer.tsx";
import { Outlet, useLocation } from "react-router-dom";
import { AppContext } from "../../AppContect.tsx";
function Layout (){
    // const location = useLocation();
    // console.log("Current path:", location.pathname);
    return(<>
        <AppContext.Provider value={{}}>
            <Header/>
            <main className="bg-[#ecf0fc] dark:bg-[#0D152D] dark:text-[#D9E1F9]">
                <div className="max-w-[1400px] mx-auto py-[170px] ">
                  <Outlet/>  
                </div>
            </main>
            <Footer/>
        </AppContext.Provider>
    </>)
}
export default Layout;