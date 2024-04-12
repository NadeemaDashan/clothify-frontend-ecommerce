import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Tick from '../assets/tick.gif'
import TickDark from '../assets/tick-dark.gif'
import { Link, useNavigate } from 'react-router-dom'

const OrderComplete = () => {  
    const nav = useNavigate();
    setTimeout(() => {
        nav('/home')
    }, 8000);
    
    return (
        <div className='dark:bg-black w-screen font-mulish'>
            <Header />
            <div className='flex justify-center items-center mt-4 flex-col mb-24 ml-8'>
                <img src={Tick} className='dark:hidden' alt='success image'/>
                <img src={TickDark} className='dark:flex hidden w-[30%]' alt='success image'/>
                <h1 className='text-5xl mt-[-5%] font-bold tracking-wider dark:text-white dark:mt-2'>Order Success !</h1>
                <div className='flex justify-center items-center gap-1 flex-col mt-10'>
                    <p className='tracking-wide text-gray-400'>Thank you for ordering at clothify. Your order will be processed as soon as possbile.</p>
                    <p className='tracking-wide text-gray-400'>Make sure you make a note of your order, no <span className='font-bold font-sans text-lg'>123</span></p>
                    <p className='tracking-wide text-gray-400'>You will be reciving a email shortly with the invoice attached.</p>
                </div>
                    <button className='mt-10 bg-black px-5 py-4 text-white rounded-md hover:bg-gray-600 active:bg-black dark:bg-white dark:text-black dark:hover:bg-gray-200'><Link to='/home'>Continue Shopping</Link></button>
            </div>
            <Footer />
        </div>
    )
}

export default OrderComplete
