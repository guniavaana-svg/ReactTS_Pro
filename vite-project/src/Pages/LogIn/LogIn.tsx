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
        // console.log(currentData);
        async function getUser(){
            const res=await fetch(`${API_URL}/users?email=${currentData.email}&password=${currentData.password}`)
            const user=await res.json();
            console.log(user)
            if(user.length>0){
                localStorage.setItem("isUser", "yes");
                localStorage.setItem("user", JSON.stringify(user) );
                navigate("/desh")
            }else{
                localStorage.setItem("isUser", "no");
                localStorage.removeItem("user")
            }
            // console.log(user)
        }
        getUser()
        // let isUser=localStorage.getItem("isUser")
        // if(isUser==="yes"){
        //     navigate("/dashboard/user")
        //     // localStorage.removeItem("isUser");
        // }
    } 
    return(
        <form onSubmit={handleLogin} className="flex flex-col">
            <legend className="text-3xl font-mtavruli text-[#3454b4] text-center mb-5">შესვლა</legend>
            <label >მეილი</label>
            <input  className="input" type="text" placeholder="შეიყვანე მეილი" name="email"/>
            <label >პაროლი</label>
            <input  className="input" type="text" placeholder="შეიყვანე პაროლი" name="password"/>
            <button className="w-full bg-[#3454b4] hover:bg-[#2e4a9e] hover:text-[#d9e1f9] text-[#ecf0fc] font-semibold tracking-[2px] py-2 rounded-lg my-5">შესვლა</button>
        </form>
    )
}
export default LogIn;