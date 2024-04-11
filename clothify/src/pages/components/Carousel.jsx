import { transform } from 'framer-motion';
import React, { useEffect } from 'react'
import { useState } from 'react'

const Carousel = ({ children: slides,autoSlide=false, autoSlideInterval=3000 }) => {
    const[curr,setCurr]=useState(0);
    function prev(){
        setCurr(current=>current===0?slides.length-1:current-1)
    }
    function next(){
        setCurr(current=>current===slides.length-1?0:current+1)
    }

    useEffect(()=>{
        if(!autoSlide) return
        const slideInterval = setInterval(next,autoSlideInterval);
        return ()=> clearInterval(slideInterval)
    },[])

    return (
        <div className='overflow-hidden relative rounded-lg'>
            <div className='flex transition-transform ease-out duration-500'style={{transform:`translateX(-${curr*100}%)`}}>{slides}</div>
            <div className='absolute inset-0 flex items-center justify-between p-4'>
            <button className='bg-white'onClick={prev}>Prev</button>
            <button className='bg-white'onClick={next}>Next</button>
            </div>
        </div>
    )
}

export default Carousel
