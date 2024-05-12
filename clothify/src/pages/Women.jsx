import Image from '../assets/womensBanner.png'
import Img from '../assets/im.png'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Axios from 'axios'

const Women = () => {
    const [products, setProducts] = useState([]);
    const nav = useNavigate();
    useEffect(()=>{
        const url="http://localhost:8080/product/get/category/womens";
        Axios.get(url).then((res)=>{
            setProducts(res.data)
        })
    },[])
  
  return (
    <div className="block scroll-custom h-max font-mulish">
    <Header />
    <section className='flex flex-col bg-[#fbfcf0] h-max w-screen items-center font-mulish overflow-x-hidden overflow-auto scrollbar-hidden dark:bg-black scroll justify-center'>
      <div className='mt-0 h-72 relative'>
        <img src={Image} className='h-[100%] w-screen object-cover' alt='Mens image' />
      </div>
      <div className="grid grid-cols-2 max-lg:grid-cols-3 max-md:grid-cols-2 lg:grid-cols-4 gap-0 pl-10 mt-20 w-[80%] max-lg:w-[90%] max-sm:grid-cols-1 ml-2">
        {products.map((element) => {
          return (
            <div>
              <ProductCard product={element} image={Img} />
            </div>
          )
        })}

      </div>
    </section>
    <Footer />
  </div>
  )
}

export default Women
