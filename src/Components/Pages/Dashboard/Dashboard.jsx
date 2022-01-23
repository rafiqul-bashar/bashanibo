import React, { useState } from 'react';
import useAuth from '../../../Uti&Hooks/useAuth';
import AllAccounts from './AdminPages/AllAccounts';
import AllOrders from './AdminPages/AllOrders';
import AllProducts from './AdminPages/AllProducts';
import Order from './ClientPages/Order';
import Pay from './ClientPages/Pay';
import Review from './ClientPages/Review';

const Dashboard = () => {
    const { user, userData, admin } = useAuth()
    const [menuStateProduct,setMenuStateProduct]=useState(false)
    const [menuStateOrders,setMenuStateOrders]=useState(true)
    const [menuStateAccounts,setMenuStateAccounts]=useState(false)
    const [menuStateClientOrder,setMenuStateClientOrder]=useState(true)
    const [menuStateClientReview,setMenuStateClientReview]=useState(false)
    const [menuStatePayment,setMenuStatePayment]=useState(false)
    const changeMenu = (event) => {

        if (event === "products") {
            setMenuStateOrders(false)
            setMenuStateAccounts(false)
            setMenuStateProduct(true)
        }
        if (event === "accounts") {
            setMenuStateOrders(false)
            setMenuStateProduct(false)
            setMenuStateAccounts(true)
            
        }
        if (event=== "orders") {
            setMenuStateAccounts(false)
            setMenuStateProduct(false)
            setMenuStateOrders(true)
            
        }
        if (event=== "clientOrder") {
            setMenuStateClientReview(false)
            setMenuStatePayment(false)
            setMenuStateClientOrder(true)
            
        }
        if (event=== "clientReview") {
            setMenuStateClientOrder(false)
            setMenuStatePayment(false)
            setMenuStateClientReview(true)
            
        }
        if (event=== "payment") {
            setMenuStateClientOrder(false)
            setMenuStateClientReview(false)
            setMenuStatePayment(true)
            
        }
    }
    return (
        <div>
                {admin && <div>
                    <h1>Hello MR {userData.name}</h1>
                    <div className='flex'>

                        <div
                            className="
                        flex flex-col
                        w-64
                        h-3/4
                        px-4
                        py-8
                        bg-white
                        border-r
                        dark:bg-gray-800 dark:border-gray-600
                        "
                        >
                            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
                                Admin  Panel </h2>


                            <div className="flex flex-col justify-between flex-1 mt-6">
                                <nav>
                                    <p 
                                        className="
                                        disabled
          flex
          items-center
          px-4
          py-2
          text-gray-700
          bg-gray-200
          rounded-md
          dark:bg-gray-700 dark:text-gray-200
        "
                                        href="#"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>

                                        <span className="mx-4 font-medium">Dashboard</span>
                                    </p>

                                    <button onClick={() => { changeMenu("accounts") }}
                                        className="
                                    flex
          items-center
          px-4
          py-2
          mt-5
          text-gray-600
          transition-colors
          duration-200
          transform
          rounded-md
          dark:text-gray-400
          hover:bg-gray-200
          dark:hover:bg-gray-700 dark:hover:text-gray-200
          hover:text-gray-700
          "
                                        href="#"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>

                                        <span className="mx-4 font-medium">Accounts</span>
                                    </button>
                                    <button onClick={() => { changeMenu("orders") }}
                                        className="
          flex
          items-center
          px-4
          py-2
          mt-5
          text-gray-600
          transition-colors
          duration-200
          transform
          rounded-md
          dark:text-gray-400
          hover:bg-gray-200
          dark:hover:bg-gray-700 dark:hover:text-gray-200
          hover:text-gray-700
        "
                                        href="#"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>

                                        <span className="mx-4 font-medium">Orders</span>
                                    </button>

                                    <button onClick={() => { changeMenu("products") }}
                                        className="
                                    flex
                                    items-center
          px-4
          py-2
          mt-5
          text-gray-600
          transition-colors
          duration-200
          transform
          rounded-md
          dark:text-gray-400
          hover:bg-gray-200
          dark:hover:bg-gray-700 dark:hover:text-gray-200
          hover:text-gray-700
          "
                                        href="#"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>

                                        <span className="mx-4 font-medium">Products</span>
                                    </button>

                               
                                    <hr className="my-6 dark:border-gray-600" />
                                </nav>

                                <div className="flex items-center px-4 -mx-2">
                                    <img
                                        className="object-cover mx-2 rounded-full h-9 w-9"
                                        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                                        alt="avatar"
                                    />
                                    <h4
                                        className="
          mx-2
          font-medium
          text-gray-800
          dark:text-gray-200
          hover:underline
          "
                                    >
                                        {userData.name}
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='w-3/4'>
                            
               
                            {menuStateAccounts && <AllAccounts/>}
                            {menuStateOrders && <AllOrders/>}
                            {menuStateProduct && <AllProducts/>}
                            
                        </div>
                    </div>
                </div>}
            

            {!admin &&
                <div>
                    
                    <div className='flex'>

                        <div
                            className="
                        flex flex-col
                        w-64
                        h-3/4
                        px-4
                        py-8
                        bg-white
                        border-r
                        dark:bg-gray-800 dark:border-gray-600
                        "
                        >
                           
                            <div className="flex items-center px-4 -mx-2">
                                    <img
                                        className="object-cover mx-2 rounded-full h-9 w-9"
                                        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                                        alt="avatar"
                                    />
                                    <h4
                                        className="
          mx-2
          
          font-medium
          text-gray-800
          dark:text-gray-200
          hover:underline
          "
                                    >
                                        {userData.name||user.displayName}
                                    </h4>
                                </div>
                             
                                <hr className="my-6 dark:border-gray-600" />

                            <div className="flex flex-col justify-between flex-1 mt-6">
                                <nav>
                                    <p 
                                        className="
                                        disabled
          flex
          items-center
          px-4
          py-2
          text-gray-700
          bg-gray-200
          rounded-md
          dark:bg-gray-700 dark:text-gray-200
        "
                                        href="#"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>

                                        <span className="mx-4  font-medium">Dashboard</span>
                                    </p>

                                    <button onClick={() => { changeMenu("clientOrder") }}
                                        className="
                                    flex
          items-center
          px-4
          py-2
          mt-5
          text-gray-600
          transition-colors
          duration-200
          transform
          rounded-md
          dark:text-gray-400
          hover:bg-gray-200
          dark:hover:bg-gray-700 dark:hover:text-gray-200
          hover:text-gray-700
          "
                                        href="#"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>

                                        <span className="mx-4 font-medium">My Order</span>
                                    </button>
                                    <button onClick={() => { changeMenu("clientReview") }}
                                        className="
          flex
          items-center
          px-4
          py-2
          mt-5
          text-gray-600
          transition-colors
          duration-200
          transform
          rounded-md
          dark:text-gray-400
          hover:bg-gray-200
          dark:hover:bg-gray-700 dark:hover:text-gray-200
          hover:text-gray-700
        "
                                        href="#"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>

                                        <span className="mx-4 font-medium">Review</span>
                                    </button>

                                    <button onClick={() => { changeMenu("payment") }}
                                        className="
                                    flex
                                    items-center
          px-4
          py-2
          mt-5
          text-gray-600
          transition-colors
          duration-200
          transform
          rounded-md
          dark:text-gray-400
          hover:bg-gray-200
          dark:hover:bg-gray-700 dark:hover:text-gray-200
          hover:text-gray-700
          "
                                        href="#"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>

                                        <span className="mx-4 font-medium">Payment</span>
                                    </button>

                               
                                    
                                </nav>

                                
                            </div>
                        </div>
                        <div className='w-3/4'>
                            
               
                            {menuStateClientOrder && <Order/>}
                            {menuStateClientReview && <Review/>}
                            {menuStatePayment && <Pay/>}
                            
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Dashboard;