import React, { useEffect, useState } from 'react';
import api from "../../api/apiAxios";
import Loading from '../../Uti&Hooks/Loading';
import Product from './Product';
const Products = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const res = await api.get("/product")
                setProducts(res.data);
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [])


    return (
        <>
            {isLoading ? <Loading /> : null}
            <div className={isLoading ? "hidden" : null}>
                <h2 className='py-2 px-4'>These Are the Products</h2>
                <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3' >
                    {products.map(product => (<Product key={product._id} product={product} />))}

                </div>
            </div>
        </>
    );
};

export default Products;