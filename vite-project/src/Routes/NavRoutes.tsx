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
import CardDetail from "../Components/CardDetail/CardDetail.tsx";

function NavRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="papier" element={<Benefit/>}/>
                <Route path="Stationery" element={<Benefit/>} />
                <Route path="Notebooks&Diaries" element={<Home/>} />
                <Route path="Notebooks&Diaries/:id" element={<CardDetail/>}/>
                <Route path="giftcards" element={<Stories/>}/>
                <Route path="Art_Supplies" element={<Book/>}/>
                <Route path="books" element={<About/>}/>
                <Route path="journals" element={<Contact/>}/>
                <Route path="printing" element={<Contact/>}/>
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