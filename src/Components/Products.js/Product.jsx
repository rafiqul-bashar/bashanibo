import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Uti&Hooks/Button';


export default function Product({ product }) {
    const { category, type, address, price, img, _id, desc } = product

    const navigate = useNavigate()

    const seeDetails = (_id) => {
        const uri = `/details/${_id}`;
        navigate(uri);
    }
    return (<>
        <div className='shadow rounded-sm'>
            <img src={img} alt="prod_pic" className='max-h-52 w-full' />
            <div className='p-3 text-left'>
                <div className='flex items-center justify-between'>
                    <span className='font-md flex items-center'><div className='mr-2 my-2 h-4 w-4 bg-green-500'></div>{category}</span>
                    <span className=' p-1 text-gray-600'>{type}</span>
                </div>
                <p className='font-bold text-xl'> $ {price} </p>
                <p className='font-semi bold text-lg'> {desc} </p>
                <span className='text-lg'>{address}</span>
                <div className='flex my-1 items-center justify-between'>
                    {/* <button onClick={() => { seeDetails(_id) }} className='bg-emerald-500 text-white  active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none my-1 mr-1 mb-1 ease-linear transition-all duration-150'>See More Details</button> */}
                  <button onClick={() => { seeDetails(_id) }} >
                    <Button  text={"See More Details"}/>
                  </button>
                </div>
            </div>
        </div>
    </>
    )
}
