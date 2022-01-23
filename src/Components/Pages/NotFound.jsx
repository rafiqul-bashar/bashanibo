import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className='text-center p-28 sm:p-64 text-gray-800'>
            <h2 className=' my-2 text-3xl'>404</h2>
            <h2 className=' my-5 text-3xl'>Page Not Found</h2>
            <Link to ="/" className='rounded-full p-3 bg-gray-300 '>Back to Home</Link>
        </div>
    )
}
