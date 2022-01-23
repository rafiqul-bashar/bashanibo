import React from 'react';
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Uti&Hooks/useAuth';


const Login = () => {
    const { user, loginWithEmailAndPassword,signInUsingGoogle } = useAuth()
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const navigate = useNavigate();



    const onSubmit = data => {
        const { email, password } = data
        loginWithEmailAndPassword(email, password,location)
        reset()
    };
    // console.log(user);
    return (
        <>
        {user.uid? <Navigate to="/explore"/> : null}
        <div >
            <h2 className='text-center text-2xl  sm:text-4xl my-4 text-purple-600'>Login</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col px-16 sm:px-96'>



                    <label className='py-2'><span className='text-gray-800 text-md '>Enter Your Email</span></label>
                    <input type="email" className='p-1 border my-2' {...register("email", { required: true })} />
                    <label className='py-2'><span className='text-gray-800 text-md'>Enter Password</span></label>
                    <input type="password" className='p-1 border my-2' {...register("password", { required: true })} />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <button type="submit" className='mt-2 p-1 text-white bg-blue-600 text-lg'>Login</button>
                    <button onClick={()=>{signInUsingGoogle(location,navigate)}} className=' flex items-center justify-center p-1 bg-yellow-300 mt-2 text-lg'><img src="https://img.icons8.com/glyph-neue/64/000000/google-logo.png " className='h-8 px-2' alt='sas' />Continue With Google</button>
                </form>
                <hr className='my-4' />
                <h2 className='text-gray-600 text-center text-lg  font-medium my-8'>
                    New Here?
                    <Link to="/register" className='pl-2 text-red-400 text-xl '>
                        Create An Account
                    </Link></h2>
            </div>


        </div>
        </>
    );
};

export default Login;