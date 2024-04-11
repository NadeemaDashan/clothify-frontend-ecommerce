import React from 'react'
import Header from './components/Header'
import Carousel from './components/Carousel'
import Formal from '../assets/formal.png'
import Im from '../assets/im.png'
import Ima from '../assets/imb.png'
import { Form } from 'react-router-dom'

const Home = () => {
    const slides=[Formal,Formal]
    return (
    <div>
        <Header/>
        <div className='flex justify-center items-center mt-10'>
        <div className='w-[88%] justify-center flex'>
            <Carousel autoSlide={true}>
                {slides.map(img=>(<img src={img} className='object-cover'/>))}
            </Carousel>
        </div>
    </div>
    </div>
    )
}

export default Home
