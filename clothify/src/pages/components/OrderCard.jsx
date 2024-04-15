import React from 'react'
import im from '../../assets/im.png'

const OrderCard = () => {
    return (
        <section className=' px-20 py-5 flex font-mulish'>
            <img src={im} alt='image of product' className='w-[15%]' />
            <div className=' w-[100%]'>
                <div className='flex justify-between'>
                    <h2 className='font-bold tracking-wider text-lg px-5 dark:text-white'>Project Pepper T</h2>
                    <h1 className='font-bold tracking-wide dark:text-white'>Rs 6700,00</h1>
                </div>
                <div className='flex justify-between pt-2'>
                    <h4 className='tracking-wide px-5 text-sm dark:text-white'>XS/BLACK</h4>
                    <h5 className='tracking-wide font-light text-sm dark:text-white'>12</h5>
                </div>
            </div>
        </section>
    )
}

export default OrderCard
