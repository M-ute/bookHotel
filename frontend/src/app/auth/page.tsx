"use client"

import { AiFillApple,  AiFillGoogleCircle } from "react-icons/ai";
import { useState, type ChangeEvent, FormEvent } from "react";

const defaultFormData = {
    name: "",
    email: "",
    password: ""
}

const Auth = () => {

    {/*Login details retrieval*/}
    const [formData, setFormData] = useState(defaultFormData);

    {/*The "inputStyles" is referenced down below in the forms*/}
    const inputStyles = "border border-gray-300 sm:text-sm text-black dark:text-white rounded:lg block w-full p-3 focus:outline-none"

    
    {/*Login Input event handler */}
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData({ ...formData, [name]: value})
    };

    {/*Submit button handler */}
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            console.log(formData);
        } catch (error) {
            console.log(error);
        }finally {
            setFormData(defaultFormData);
        }
    };


  return (
    <section className="container mx-auto">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
            <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
                <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                    Create an account
                </h1>
                <p>OR</p>
                <span className="inline-flex items-center">
                    <AiFillGoogleCircle className="mr-3 text-4xl cursor-pointer text-black dark:text-white" />
                    |
                    <AiFillApple className="ml-3 text-4xl cursor-pointer text-black dark:text-white" />
                </span>
            </div>

            {/*Form for Account Login*/}
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                 <input 
                type="text"
                name="name"
                placeholder="John Doe"
                required
                className={inputStyles}
                value={formData.name}
                onChange={handleInputChange}
                 />

                <input 
                type="email"
                name="email"
                placeholder="name@company.com"
                required
                className={inputStyles}
                value={formData.email}
                onChange={handleInputChange}
                 />

                 <input 
                type="password"
                name="password"
                placeholder="password"
                required
                minLength={6}
                className={inputStyles}
                value={formData.password}
                onChange={handleInputChange}
                 />

                 <button 
                 type='submit'
                 className="w-full bg-tertiary-dark focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Sign Up
                 </button>
                
            </form>

            <button className="text-blue-700 underline">Login</button>

        </div>

    </section>
  )
}

export default Auth;
