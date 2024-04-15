import React from 'react'
import Header from './components/Header'
import Carousel from './components/Carousel'
import Formal from '../assets/formal.png'
import Footer from './components/Footer'
import Mens from '../assets/mens.png'
import Womens from "../assets/womens.png"
import Teens from "../assets/teens.png"
import Kids from "../assets/kids.png"
import { Link } from 'react-router-dom'
import Store from '../assets/store.png'


const Home = () => {
    const slides = [Formal, Formal]
    return (
        <div className="h-max bg-[#fbfcf0] dark:bg-black font-mulish">
            <Header />
            <div className='flex justify-center items-center mt-0 flex-col'>
                <div className='w-[98%] justify-center flex '>
                    <Carousel autoSlide={true}>
                        {slides.map(img => (<img src={img} className='object-cover' />))}
                    </Carousel>
                </div>
                <h1 className='mt-16 text-5xl tracking-[6px] ml-4'>NEW COLLECTION</h1>
                <p className='text-[#8C8C8C] mt-16 tracking-[5px] flex flex-col justify-center items-center leading-9 text-sm'>Our latest collection,where classic and contemparary style converge in<span> perfect harmony</span></p>
                <div>

                </div>
                <div className='w-[80%] flex gap-0 justify-center items-center mt-10 ml-10 p-0 mb-40'>
                    <Link to="/men">
                        <div className='relative flex flex-col justify-center items-center'>
                            <img src={Mens} className='w-[80%]'></img>
                            <p className='absolute text-3xl tracking-widest text-white'>MEN</p>
                        </div>
                    </Link>
                    <Link to='/women'>
                        <div className='relative flex flex-col justify-center items-center'>
                            <img src={Womens} className='w-[80%]'></img>
                            <p className='absolute text-3xl tracking-widest text-white'>WOMEN</p>
                        </div>
                    </Link>
                    <Link to='/teen'>
                        <div className='relative flex flex-col justify-center items-center'><img src={Teens} className='w-[80%]'></img>
                            <p className='absolute text-3xl tracking-widest text-white'>TEEN</p>
                        </div>
                    </Link>
                    <Link to='/kids'>
                        <div className='relative flex flex-col justify-center items-center'><img src={Kids} className='w-[80%]'></img>
                            <p className='absolute text-3xl tracking-widest text-white'>KIDS</p>
                        </div>
                    </Link>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <h1 className='mt-16 text-5xl tracking-[7px] ml-4'>COME HERE !</h1>
                    <h3 className='mt-7 text-2xl tracking-wider font-thin'>Our Experience Store</h3>
                    <img src={Store} className='w-[60%] mt-20 rounded-md' alt='store front'/>
                    <p className='mt-7 text-3xl tracking-wider font-medium'>No 123, bauddhaloka mawatha colombo 4</p>
                    <p className='font-thin text-2xl tracking-wide mt-5 pb-24'>Open from 10AM to 8PM</p>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Home
