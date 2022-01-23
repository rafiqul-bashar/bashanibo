import React, { useEffect, useState } from 'react';
import apiAxios from '../../../../api/apiAxios';
import useAuth from '../../../../Uti&Hooks/useAuth';

export default function AllAccounts() {
    const {user}=useAuth()
    const [clientAccounts,setclientAccounts]=useState([])
    useEffect(() => {
        const fetchAccount = async()=>{
            const res = await apiAxios.get("/users")
            setclientAccounts(res.data)
        }
        fetchAccount()
      }, [user.email]);
     
    
    return (
            <div className=''>
        <div className='-mx-6 px-8 py-2 bg-gray-800 font-semibold text-white text-3xl'>
            Client Accounts
        </div>
        {clientAccounts.map((user) => (

<div className="p-3" key={user._id} >
    <h2>{user.name}</h2>
    
</div>

))}
       
            </div>
    )
}
