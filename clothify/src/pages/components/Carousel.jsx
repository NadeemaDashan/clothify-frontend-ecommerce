import { useEffect } from 'react'
import { useState } from 'react'

const Carousel = ({ children: slides,autoSlide=false, autoSlideInterval=3000 }) => {
    const[curr,setCurr]=useState(0);
    function prev(){
        setCurr(current=>current===0?slides.length-1:current-1)
    }
    function next(){
        setCurr(current=>current===slides.length-1?0:current+1)
    }
x
    useEffect(()=>{
        if(!autoSlide) return
        const slideInterval = setInterval(next,autoSlideInterval);
        return ()=> clearInterval(slideInterval)
    },[])

    return (
        <div className='overflow-hidden relative rounded-lg'>
            <div className='flex transition-transform ease-out duration-500'style={{transform:`translateX(-${curr*100}%)`}}>{slides}</div>
            <div className='absolute inset-0 flex items-center justify-between p-4'>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" onClick={prev} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            </span>
            <span className="sr-only">Previous</span>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" onClick={next} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            </span>
            <span className="sr-only">Next</span>
            </div>
        </div>
    )
}

export default Carousel
