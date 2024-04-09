import React from 'react'
import ProductImg from '../../assets/product.png'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
    return (
        <div className="w-225 flex gap-3 flex-col justify-center tracking-wider font-mulish mb-20">
        <Link to='/'>
        <img src={ProductImg} className='w-[80%]' alt='product-image'/>
        <h3 className='text-[#4E4E4E] text-lg px-2 dark:text-white py-4'>Yellow Sweatshirt</h3>
        <h1 className='text-xl px-2 font-bold dark:text-white'>LKR 3250.00</h1>
        <p className='px-2 dark:text-white'>Teen</p>
        </Link>
        </div>
    )
}

export default ProductCard