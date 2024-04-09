import React from 'react'
import ProductCard from './components/ProductCard'
import Header from './components/Header'
import SummerCollectionImage from '../assets/summerCollection.png'
import Footer from './components/Footer'


const ProductView = () => {
    return (
        <div className="block">
        <section className='flex flex-col bg-[#fbfcf0] h-max w-screen items-center font-mulish overflow-x-hidden overflow-auto scrollbar-hidden dark:bg-black scroll'>
            <Header />
            <div className='mt-0 h-72 relative'>
                <img src={SummerCollectionImage} className='h-[90%] w-screen object-cover' alt='summer image' />
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl tracking-widest font-bold text-center">
                    <h1>SUMMER COLLECTION</h1>
                </div>
            </div>
            <div class="grid grid-cols-2 max-lg:grid-cols-3 max-md:grid-cols-2 lg:grid-cols-4 gap-0 pl-10 mt-20 w-[80%] max-lg:w-[90%] max-sm:grid-cols-1">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </section>
        <Footer/>
        </div>
    )
}

export default ProductView
