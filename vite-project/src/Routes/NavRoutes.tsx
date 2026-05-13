import { Routes, Route } from "react-router-dom";
import About from "../Pages/About/About.tsx";
import Benefit from "../Pages/Benefit/Benefit.tsx";
import Book from "../Pages/Book/Book.tsx";
import Contact from "../Pages/Contact/Contact.tsx";
import Home from "../Pages/Home/Home.tsx";
import Stories from "../Pages/Stories/Stories.tsx";
import Tours from "../Pages/Tours/Tours.tsx";
import Layout from "../layouts/Layout/Layout.tsx";

function NavRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="benefits" element={<Benefit/>}/>
                <Route path="tours" element={<Tours/>}/>
                <Route path="stories" element={<Stories/>}/>
                <Route path="book" element={<Book/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="contact" element={<Contact/>}/>
            </Route>
            <Route path="*" element={<h1>404error</h1>}/>
        </Routes>
    )
}
export default NavRoutes;