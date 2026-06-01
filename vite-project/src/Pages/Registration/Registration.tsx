
import "./Registration.css";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
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
    const regExp={
        alphaBet: /^[a-zA-Z]+$/,
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    }
    const validate=Yup.object().shape({
        firstname:Yup.string()
            .matches(regExp.alphaBet,"ანბანის გარდა სხვა სიმბოლოებს ვერ გამოიყენებ")
            .min(2, "შეიყვანე ორზე მეტი სიმბოლო")
            .max(30, "30-ზე მეტ სიმბოლოს ვერ შეიყვან"),
        lastname:Yup.string()
            .matches(regExp.alphaBet,"ანბანის გარდა სხვა სიმბოლოებს ვერ გამოიყენებ")
            .min(2, "შეიყვანე ორზე მეტი სიმბოლო")
            .max(30, "30-ზე მეტ სიმბოლოს ვერ შეიყვან"),
    })
   async function handleSubmmit(e:React.SyntheticEvent<HTMLFormElement>){
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const currentData = Object.fromEntries(formData.entries());
        //  console.log(currentData)
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
        const res=await fetch(`${API_URL}/users?email=${currentData.email}`)
        const isUser=await res.json();
        // console.log(isUser)
        if(isUser.length==0){
             const rec=await fetch(`${API_URL}/users/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(currentData)
            })
            const data=await rec.json()
            console.log(data)
        }else{
            console.log("user is registered and this is registered user:", isUser)
        }
       
        e.target.reset();
        
    }
    return(
        <Formik>
            <form onSubmit={handleSubmmit}>
                <div>
                    <label htmlFor="">სახელი</label>
                    <Field name="firstname"/>
                </div>
                <div>
                    <label htmlFor="">გვარი</label>
                    <Field name="lastname"/>
                </div>
                <div>
                    <label htmlFor="">მეილი</label>
                    <Field name="email"/>
                </div>
                <div>
                    <label htmlFor="">ტელეფონი</label>
                    <Field name="phone"/>
                </div>
                <div>
                    <label htmlFor="">პაროლი</label>
                    <Field name="password"/>
                </div>
                <div>
                    <label htmlFor="">გაიმეორე პაროლი</label>
                    <Field name="confirmPassword"/>
                </div>
                <button type="submit">რეგისტრაცია</button>
            </form>
        </Formik>
    )
}

export default Registration;