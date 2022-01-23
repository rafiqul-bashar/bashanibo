import React, { useEffect, useState } from 'react';
import apiAxios from '../../../../api/apiAxios';

export default function AllProducts() {
    const [allProducts,setallProducts]=useState([])
    useEffect(() => {
        const fetchProducts = async()=>{
            const res = await apiAxios.get("/product")
            setallProducts(res.data)
        }
        fetchProducts()
      }, []);
      const handleDelete=async(id)=>{
        try{
          await apiAxios.delete(`/product/${id}`)
          alert("The Product Has Been Deleted From The WebSite")
        } catch (err){

        }
      }
    return (
        <div>
          <div className='-mx-6 px-8 py-2 bg-gray-800 font-semibold text-white text-3xl'>
           All Poducts
        </div>
        {allProducts.map((product) => (

<div className="p-3" key={product._id} >
  <img src={product?.img} alt="productPic"/>
    <h2> Price: $ {product.price}</h2>
    <h2>Prop: {product.desc}</h2>
    <button onClick={()=>{handleDelete(product._id)}} className='text-red-500 background-transparent font-bold uppercase px-5 py-1 my-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border-red-500 border-2'>Delete </button>
</div>

))}
       
        </div>
    )
}
