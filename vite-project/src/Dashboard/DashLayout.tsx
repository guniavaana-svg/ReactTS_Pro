import { Navigate, Outlet } from "react-router";
import Footer from "../layouts/Footer/Footer";
import LogIn from "../Pages/LogIn/LogIn";

function DashLayout (){
    let isUser=localStorage.getItem("isUser")
    return(
        <>
          
            <main className="bg-red-600">
               <h2>you are in the dashboard</h2>
               {(isUser==="yes")? <Outlet/>:<Navigate to="/login"/>}
               
            </main>
            <Footer/>
        </>
        
    )
}
export default DashLayout;