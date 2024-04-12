import React from 'react'
import ProductCard from './components/ProductCard'
import Header from './components/Header'
import Footer from './components/Footer'
import summer from '../assets/summerCollection.png'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import Img from '../assets/im.png'
import Im from '../assets/imb.png'


const Men = () => {
    const [products, setProducts] = useState([]);
    const nav = useNavigate();
    useEffect(()=>{
        const url="http://localhost:8080/product/get/category/mens";
        Axios.get(url).then((res)=>{
            setProducts(res.data)
        })
    },[])
    return (
        <div className="block scroll-custom h-max">
            <section className='flex flex-col bg-[#fbfcf0] h-max w-screen items-center font-mulish overflow-x-hidden overflow-auto scrollbar-hidden dark:bg-black scroll justify-center'>
                <Header />
                <div className='mt-0 h-72 relative'>
                    <img src={summer} className='h-[90%] w-screen object-cover' alt='summer image' />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl tracking-widest font-bold text-center">
                        <h1>MENS</h1>
                    </div>
                </div>
                <div className="grid grid-cols-2 max-lg:grid-cols-3 max-md:grid-cols-2 lg:grid-cols-4 gap-0 pl-10 mt-20 w-[80%] max-lg:w-[90%] max-sm:grid-cols-1 ml-2">  
                {products.map((element)=>{
                    return(
                        <div>
                        <ProductCard product={element} image={Img}/>
                        </div>
                    )
                })}
                
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Men