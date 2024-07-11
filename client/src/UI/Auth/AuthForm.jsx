import React, { useState } from 'react'
import * as Unicons from '@iconscout/react-unicons';
import InputField from '../../components/InputField';

export default function AuthForm() {

    let registerForm = true;
    const [inputType, setInputType] = useState("registerFormFiels");


    const updateInputType = () => {
        if (inputType === "registerFormFiels") {
            setInputType("loginFormFields")
        } else {
            setInputType("registerFormFiels")
        }
    }

    const registerFormFiels = [
        {
            type: "text",
            name: "username",
            placeholder: "Username",
            required: true,
        },
        {
            type: "email",
            name: "email",
            placeholder: "Email",
            required: true,
        },
        {
            type: "password",
            name: "password",
            placeholder: "Password",
            required: true,
        },
        {
            type: "password",
            name: "confirmPassword",
            placeholder: "Confirm Password",
            required: true,
        },
        {
            type: "button",
            name: "Register"
        }
    ]
    const loginFormFields = [

        {
            type: "email",
            name: "email",
            placeholder: "Email",
            required: true,
        },
        {
            type: "password",
            name: "password",
            placeholder: "Password",
            required: true,
        },
        {
            type: "button",
            name: "Login"
        }
    ]


    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(event.target);
        if(inputType === "registerFormFiels"){
            console.log(formData,"Register Form");
        }
        else{
            console.log(formData,"Login Form");
        }
    }

    console.log(registerForm);
    return (
        <div className=' h-screen w-full flex'>
            <div className='bg-teal-600 h-full w-2/6 flex  justify-center items-center'>
                <Unicons.UilCommentChartLine width={27} height={27} className="h-28 w-28 text-teal-500 mr-2" />
                <h2 className='text-3xl text-white text-center font-semibold'>Chat.io</h2>
            </div>

            <div className='w-4/6 h-full flex flex-col justify-center items-center'>

                <h2 className='text-4xl font-bold my-2 text-teal-600'>
                    {inputType === "registerFormFiels" ? "Welcome" : "Welcome Back"}
                </h2>
                <h2 className='font-bol text-teal-500 font-bold'>
                    {inputType === "registerFormFiels" ? "REGISTER" : "LOGIN"}
                </h2>
                <form className='flex flex-col justify-center items-center w-2/5 my-5' onSubmit={handleSubmit}>
                    <InputField props={inputType === "registerFormFiels" ? registerFormFiels : loginFormFields} buttonText="Register" />
                    <h2 className='my-2'>
                        Already Have an Account?
                        <button className='text-teal-600 font-bold mx-1' type='button' onClick={() => {
                            updateInputType();
                        }}>
                            {inputType === "registerFormFiels" ? "Login" : "Register Now"}
                        </button>
                    </h2>
                </form>

            </div>
        </div>
    )
}
