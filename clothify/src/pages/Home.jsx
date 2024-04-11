import React from 'react'
import Header from './components/Header'
import Carousel from './components/Carousel'
import Formal from '../assets/formal.png'
import Im from '../assets/im.png'
import Ima from '../assets/imb.png'
import { Form } from 'react-router-dom'
import Footer from './components/Footer'

const Home = () => {
    const slides=[Formal,Formal]
    return (
    <div className="h-max bg-[#fbfcf0] dark:bg-black">
        <Header/>
        <div className='flex justify-center items-center mt-0 flex-col font-mulish'>
        <div className='w-[98%] justify-center flex '>
            <Carousel autoSlide={true}>
                {slides.map(img=>(<img src={img} className='object-cover w-[100%]'/>))}
            </Carousel>
        </div>
        <h1 className='mt-16 text-5xl tracking-[6px] ml-4'>NEW COLLECTION</h1>
        <p className='text-[#8C8C8C] mt-16 tracking-[5px] flex flex-col justify-center items-center leading-9 text-sm'>Our latest collection,where classic and contemparary style converge in<span> perfect harmony</span></p>
        <Footer/>
    </div>
    </div>
    )
}

export default Home
