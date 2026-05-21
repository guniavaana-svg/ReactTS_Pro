import "./LogIn.css";
import { NavLink } from "react-router";
import { useSearchParams , useParams} from "react-router";
import { API_URL } from "../../../config";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
function LogIn(){
    let navigate = useNavigate();
    function handleLogin(e:React.SyntheticEvent<HTMLFormElement>){
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const currentData = Object.fromEntries(formData.entries());
        console.log(currentData);
        async function getUser(){
            const res=await fetch(`${API_URL}/users?email=${currentData.email}&password=${currentData.password}`)
            const user=await res.json();
            if(user.length>0){
                localStorage.setItem("isUser", "yes");
            }else{
                localStorage.setItem("isUser", "no");
            }
            console.log(user)
        }
        getUser()
        let isUser=localStorage.getItem("isUser")
        if(isUser==="yes"){
            navigate("/dashboard/user")
            localStorage.removeItem("isUser");
            navigate("/dashboard/user")
        }
    } 
    return(
        <form onSubmit={handleLogin} className="flex flex-col">
            <legend>log in</legend>
            <label>email</label>
            <input type="text" placeholder="enter your email" name="email"/>
            <label>password</label>
            <input type="text" placeholder="enter your password" name="password"/>
            <button>enter</button>
        </form>
    )
}
export default LogIn;