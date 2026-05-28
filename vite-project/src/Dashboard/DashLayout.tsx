import { Navigate, Outlet } from "react-router";
import Footer from "../layouts/Footer/Footer";
import LogIn from "../Pages/LogIn/LogIn";
import { createContext } from 'react';
import DashHeader from "./DashHeader";

function DashLayout (){
    const isAuth=createContext("")
    let isUser=localStorage.getItem("isUser")
    const user=JSON.parse(localStorage.getItem("user")|| "null")
    console.log(user)
    return(
        <>
            <DashHeader/>
            <main className="bg-red-600">
               {(isUser==="yes")? <Outlet/>:<Navigate to="/login"/>}
            </main>
            <Footer/>
        </>
        
    )
}
export default DashLayout;