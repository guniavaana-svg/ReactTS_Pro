import { Routes, Route } from "react-router-dom";
import About from "../Pages/About/About.tsx";
import Benefit from "../Pages/Benefit/Benefit.tsx";
import Book from "../Pages/Book/Book.tsx";
import Contact from "../Pages/Contact/Contact.tsx";
import Home from "../Pages/Home/Home.tsx";
import Stories from "../Pages/Stories/Stories.tsx";
import Tours from "../Pages/Tours/Tours.tsx";
import Layout from "../layouts/Layout/Layout.tsx";
import ToursDet from "../Pages/Tours/ToursDet.tsx";
import Registration from "../Pages/Registration/Registration.tsx"
import LogIn from "../Pages/LogIn/LogIn.tsx";
import UserPage from "../Dashboard/pages/UserPage/UserPage.tsx";
import DashLayout from "../Dashboard/DashLayout.tsx";
import Dashboard from "../Dashboard/Dashbard.tsx";
import PassChange from "../Dashboard/PassChange.tsx";

function NavRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="benefits" element={<Benefit/>}/>
                <Route path="tours" element={<Tours/>} />
                <Route path="tours/:id" element={<ToursDet/>}/>
                <Route path="stories" element={<Stories/>}/>
                <Route path="book" element={<Book/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="registration" element={<Registration/>}/>
                <Route path="login" element={<LogIn/>}/>
            </Route>
            <Route path="/desh" element={<DashLayout />} >
                <Route index element={<Dashboard/>}/>
                <Route path="user" index element={<UserPage/>}/>
                <Route path="pass" index element={<PassChange/>}/>
            </Route>
            <Route path="*" element={<h1>404error</h1>}/>
        </Routes>
    )
}
export default NavRoutes;