import "./Registration.css";
import { API_URL } from "../../../config";
import React from "react";
interface FormDataType{
    firstame:string;
    lastname:string;
    gender:string;
    mail:string
    phone:string
    password:string
}
function Registration(){
   async function handleSubmmit(e:React.SyntheticEvent<HTMLFormElement>){
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const currentData = Object.fromEntries(formData.entries());
        // ზედას ჩაშლილად ინებ ასთე:
        // const formData:FormDataType={
        //     firstame:e.currentTarget.firstame.value,
        //     lastname:e.currentTarget.lastname.value,
        //     gender:e.currentTarget.gender.value,
        //     mail:e.currentTarget.mail.value,
        //     phone:e.currentTarget.phone.value,
        //     password:e.currentTarget.password.value,
        // }
        // console.log(formData);
        const rec=await fetch(`${API_URL}/users/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(currentData)
            })
        const data=await rec.json()
        console.log(data)
        e.target.reset();
    }
    return(
        <form onSubmit={handleSubmmit} className="flex flex-col gap-4 border-2 border-[green] p-5 rounded-3">
            <legend >Registration Form</legend>
            <div className="flex gap-4">
                <label>firstname</label>
                <input type="text" placeholder="your firstame" name="firstame" className="w-full"/>
            </div>
            <div className="flex gap-4">
                <label>lastname</label>
                <input type="text" placeholder="your lastname"  name="lastname" className="w-full" />
            </div>
            <div className="flex gap-4">
                <label>gender</label>
                <select name="gender" className="flex gap-4">
                    <option value="default">default</option>
                    <option value="famale">famale</option>
                    <option value="male">male</option>
                </select>
            </div>
            
            <div className="flex gap-4" >
                <label>mail</label>
                <input type="email" placeholder="your mail" name="mail" className="w-full"/>
            </div>
            <div className="flex gap-4">
                <label>phone</label>
                <input type="number" placeholder="your phone"  name="phone" className="w-full"/>
            </div>
            <div className="flex gap-4">
                <label>password</label>
                <input type="text" placeholder="enter your password" name="password" className="w-full" />
            </div>
            
            <button>registration</button>
        </form>
    )
}
export default Registration;