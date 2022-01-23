import React from 'react';
import { useForm } from "react-hook-form";
import { Link, Navigate } from 'react-router-dom';
import useAuth from './../../../Uti&Hooks/useAuth';


const Register = () => {
    const {createAccount,user } = useAuth()
    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const { name, email, password } = data
        createAccount(name, email, password)
        reset()
    };
    return (
        <div>
            {user.uid? <Navigate to="/explore"/> : null}
            <h2 className='text-center  text-2xl my-4 text-indigo-600'>Register Account</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col px-16 sm:px-96'>
                    <label className='py-1'><span className='text-gray-800 text-md '>Enter Your Name</span></label>
                    <input type="text " className='p-1 border my-2' placeholder='*required'  {...register("name", { required: true })} />
                    <label className='py-1'><span className='text-gray-800 text-md '>Enter Your Email</span></label>
                    <input type="email" className='p-1 border my-2' placeholder='*required' {...register("email", { required: true })} />
                    <label className='py-1'><span className='text-gray-800 text-md'>Enter Password</span></label>
                    <input type="password" className='p-1 border my-2' placeholder='*required' {...register("password", { required: true })} ></input>

                    {errors.exampleRequired && <span>This field is required</span>}

                    <button type="submit" className='mt-2 p-1 text-white bg-indigo-600 text-lg'>Sign Up</button>
                    <button className=' flex items-center justify-center p-1 bg-yellow-300 mt-2 text-lg'><img src="https://img.icons8.com/glyph-neue/64/000000/google-logo.png " className='h-8 px-2' alt='sas' />Continue With Google</button>
                </form>
                <hr className='my-4' />
                <h2 className='text-gray-600 text-center my-8 text-lg  font-medium'>
                    Already Registered?
                    <Link to="/login" className='pl-2 text-indigo-600 text-xl'>
                        Login Here
                    </Link></h2>
            </div>
        </div>
    );
};

export default Register;