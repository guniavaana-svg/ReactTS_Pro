import "./LogIn.css";
import React from "react";
function LogIn(){
    function handleLogin(e:React.SyntheticEvent<HTMLFormElement>){
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const currentData = Object.fromEntries(formData.entries());
        console.log(currentData);
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