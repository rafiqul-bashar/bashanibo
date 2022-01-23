import React, { useEffect, useState } from 'react';
import apiAxios from '../../../../api/apiAxios';
import Button from '../../../../Uti&Hooks/Button';
import useAuth from '../../../../Uti&Hooks/useAuth';



export default function Order() {
    const [clientOrder, setClientOrder] = useState({})

    const { userData,user } = useAuth()
    const deleteOrder = async (email) => {
        let res = await apiAxios.delete(`/order/${email}`);
        alert("Your Order Has Been Cancelled")
    }
    useEffect(() => {
        const getClientData = async (email) => {
            try {
                const res = await apiAxios.get(`/order/${email}`);
                setClientOrder(res.data)

            } catch (error) {
                // window.location.reload();
                console.log(error);
            }
        };
        getClientData(userData.email || user.email)
    }, [])
    return (
        <div>
            <div className='px-8'>
                <h2 className='text-2xl'>Your Order </h2>
                <hr className='my-3' />
                <p className=' text-gray-800'>Amount:<span className='font-bold text-lg'> $ {clientOrder?.amount} </span> </p>
                <p className=' text-gray-800'>Phone : {clientOrder?.phone}</p>
                <p className=' text-gray-800'>Shipment Address: {clientOrder?.address}</p>
                <p className=' text-indigo-700'>Order Status: {clientOrder?.status}</p>
                <div className='flex-col items-center '>

                    <button onClick={() => { deleteOrder(userData.email || user.email) }} className='bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150'>Cancel Order</button>
                    <button onClick={() => { alert("Payment System Coming Sooon") }} className='mx-2 my-2 '><Button  text={"Pay to Confirm"} /></button>

                </div>
            </div>
        </div>
    )
}
