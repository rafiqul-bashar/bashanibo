import React, { useEffect, useState } from 'react';
import apiAxios from '../../../../api/apiAxios';

export default function AllOrders() {
    const [clientOrders,setclientOrders]=useState([])
    useEffect(() => {
        const fetchAccount = async()=>{
            const res = await apiAxios.get("/order")
            setclientOrders(res.data)
        }
        fetchAccount()
      }, []);
    return (
        <div>
          <div className='-mx-6 px-8 py-2 bg-gray-800 font-semibold text-white text-3xl'>
            Client Orders
        </div>
        {clientOrders.map((order) => (

<div className="p-3 border-2 border-gray-600" key={order._id} >
    <h2>PAYMENT: $ {order.amount}</h2>
    <h2>CUSTOMER: {order.email}</h2>
    <h2>STATUS: <span className='text-emerald-500'>{order.status}</span></h2>
    
</div>

))}

        </div>
    )
}
