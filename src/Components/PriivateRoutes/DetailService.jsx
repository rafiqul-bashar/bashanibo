import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../api/apiAxios';
import Loading from '../../Uti&Hooks/Loading';
import useAuth from '../../Uti&Hooks/useAuth';


const Test1 = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
   
    const { category, type, address, price, img, _id, desc, pool, garage, persqrft, built } = details
    const { user} = useAuth()

    const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async () => {

            try {
                setIsLoading(true)
                const res = await api.get(`/product/${id}`)
                setDetails(res.data);
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [])


   
    // console.log(details);
    const placeOrder = (_id) => {
        if (user.uid) {
            const uri = `/order/${_id}`;
            navigate(uri);
        } else {
            navigate("/login");
        }
    }
    return (
        <>
            {isLoading ? <Loading/> : null}

            <div className={isLoading ? "hidden" : 'py-3 sm:w-2/5 sm:h-2/4 sm:mx-auto shadow'}>
                <img src={img} alt="prod_pic" className='h-4/5  w-full' />
                <div className='px-3 text-left'>
                    <div className='flex items-center justify-between'>
                        <span className='font-md flex items-center'><div className='mr-2 my-2 h-4 w-4 bg-green-500'></div>{category}</span>
                        <span className=' p-1 text-gray-600'>{type}</span>
                    </div>
                    <p className='font-bold text-xl'>Estimated Price : $ {price} </p>
                    <p className='font-semibold text-lg'>Per Square feet Price: $ {persqrft} </p>
                    <p className='font-semibold text-lg'> {desc} </p>
                    <div className='flex'>
                        <p className='font-semibold text-base'>Pool Facilites: {pool} </p>,
                        <p className=' px-2 font-semibold text-base'>Garage: {garage} </p>
                    </div>
                    <p className='mt-2 text-lg'>Built In Year :{built}</p>
                    <p className='mt-2 text-lg'>{address}</p>
                    <div className='flex items-center justify-between'>
                        <button onClick={() => { placeOrder(_id) }} className=' bg-emerald-500  active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none my-1 mr-1 mb-1 ease-linear transition-all duration-150 text-white'>Place A Order</button>
                        <button className='bg-purple-500 text-white  active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none my-1 mr-1 mb-1 ease-linear transition-all duration-150'>Contact Our Agent</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Test1;