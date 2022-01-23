import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../../Uti&Hooks/useAuth';

const Nav = () => {
    const { user, logOut,userData,admin } = useAuth()
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive)
            ;
    };
    return (
        <nav className='bg-gray-slate-200 '>

            <div className='xl:max-w-6xl mx-auto px-4'>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <div className='mr-4'>
                            <Link to="/" className='flex items-center py-5 px-3'>
                                <span className='font-bold uppercase text-xl text-purple-500'>BashaNibo</span>
                            </Link>
                        </div>
                        <div className='hidden md:flex items-center space-x-3'>
                            <Link to="/" className='py-5 px-3 hover:text-gray-600'>Home</Link>
                            <Link to="/explore" className='py-5 px-3 hover:text-gray-600'>Explore</Link>
                            <Link to="/dashboard" className={user.uid?  'py-5 px-3 hover:text-gray-600' :"hidden"}>Dashboard</Link>
                        </div>
                    </div>
                    <div className='hidden md:flex items-center'>
                        <Link to="/login" className={!user?.uid ? 'py-5 px-3 text-purple-500 font-semibold' : "hidden"}>Login</Link>
                        <Link to="#" className='py-5 px-3 text-gray-600'>{user?.uid? user?.displayName || userData?.name : null}</Link>
                        <button onClick={logOut} className={user?.uid ? 'py-5 px-3 text-purple-500 hover:text-gray-600 font-semibold' : "hidden"}>Logout</button>
                        {/* Mobile Button */}
                    </div>
                    <div className='md:hidden px-4 flex items-center'>
                        <button onClick={handleToggle}>
                        <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="black"/></svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={isActive ? "hidden" : null}>
               <div className='p-2'>

                <Link to="/explore" className='block py-2 text-md '>Explore</Link> 
                <Link to="/dashboard" className='block py-2 text-md '>Dashboard</Link> 
                <Link to="/login" className={user.uid ? 'hidden' : 'block py-2 text-md '} >Login</Link>
                <button onClick={logOut} className={!user.uid ? 'hidden' : 'block py-2 text-md text-purple-500 '} >Logout</button>
                    
               </div>
            </div>
        </nav>
    );
};

export default Nav;