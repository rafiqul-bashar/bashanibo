import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { default as api, default as apiAxios } from '../../api/apiAxios';
import Button from '../../Uti&Hooks/Button';
import Loading from '../../Uti&Hooks/Loading';
import useAuth from '../../Uti&Hooks/useAuth';

export default function PlaceOrder() {
  const { id } = useParams();
  const { user, userData } = useAuth();
  const [details, setDetails] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { category, type, address, price, img, desc, garage, built } = details
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const res = await apiAxios.get(`/product/${id}`)
        setDetails(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])
  const onSubmit = async (data) => {
    const { name, email, phone, address } = data
    try {
      
      const clientOrder = {
        "userId": userData._id,
        "email":email,
        "productId":id,
        "amount":price,
        "name":name,
        "phone":phone,
        "address": address,
         
      }
      console.log(clientOrder);
      const res = await api.post('/order', clientOrder);
      console.log(res.data);
      alert("Your Order Hasbeen Placed")

    } catch (err) {
      console.log(err);
    } finally {
      setShowModal(false)
      navigate("/dashboard")
    }
    // const { name, email, password } = data
    // reset()
  };
  return (
    <>

      <div>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Fill Up these Information to proceed Order
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col '>
                      <label className='py-1'><span className='text-gray-800 text-md '>Your Name</span></label>
                      <input type="text " className='p-1 border my-2' placeholder='*required' defaultValue={userData?.name || user?.name}  {...register("name", { required: true })} />
                      <label className='py-1'><span className='text-gray-800 text-md '>Your Email</span></label>
                      <input type="email" className='p-1 border my-2' placeholder='*required' defaultValue={userData?.email || user?.email} {...register("email", { required: true })} />
                      <label className='py-1'><span className='text-gray-800 text-md'>Your Phone Number</span></label>
                      <input type="tel" className='p-1 border my-2' placeholder='*required' defaultValue={userData?.phone} {...register("phone", { required: true })} ></input>
                      <label className='py-1'><span className='text-gray-800 text-md'>Your Address</span></label>
                      <input type="text" className='p-1 border my-2' placeholder='*required' defaultValue={userData?.address} {...register("address", { required: true })} >
                      </input>
                      <Button
                        text={"Proceed To Confirm"}
                        type="submit"
                      />
                        
                    </form>

                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Discard
                    </button>

                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
      {/* //Order JSX */}
      {isLoading ? <Loading /> : null}
      <div div className={isLoading ? "hidden" : null}>
        <div className='py-3 sm:w-2/5 sm:h-2/4 sm:mx-auto shadow'>
          <img src={img} alt="prod_pic" className='h-4/5  w-full' />
          <div className='px-3 text-left'>
            <div className='flex items-center justify-between'>
              <span className='font-md flex items-center'><div className='mr-2 my-2 h-4 w-4 bg-green-500'></div>{category}</span>
              <span className=' p-1 text-gray-600'>{type}</span>
            </div>
            <p className='font-bold text-xl'>Price : $ {price} </p>
            <p className='font-semibold text-lg'> {desc} </p>
            <div className='flex'>
              <p className=' px-2 font-semibold text-base'>Garage: {garage} </p>
            </div>
            <p className='mt-2 text-lg'>Built In Year :{built}</p>
            <p className='mt-2 text-lg'>{address}</p>
            <div className='flex items-center justify-between'>
              <button type="button" onClick={() => { setShowModal(true) }} className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150' >Confirm Order</button>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
