import React from 'react'
import Header from './components/Header'
import productImg from "../assets/hi.png"
import color from "../assets/black.png"
import color1 from "../assets/yellow.png"
import color2 from "../assets/red.png"
import color3 from "../assets/green.png"

const ProductSelection = () => {
    return (
        <div className='flex flex-col font-mulish'>
            <Header />
            <div className='bg-[#E5E5B6] flex justify-center items-center'>
                <div className='w-[90%] bg-[#F4F4DC] h-max flex p-10 m-10 ml-4 rounded-lg lg:pr-0 md:flex-col  md:items-center'>
                    <div className='w-[10%] justify-center flex flex-col gap-4 m-2 mr-5 lg:w-[30%] xl:w-[23%] md:hidden '>
                        <img src={productImg} className='h-30' />
                        <img src={productImg} className='h-30' />
                        <img src={productImg} className='h-30' />
                        <img src={productImg} className='h-30' />
                        <img src={productImg} className='h-30' />
                    </div>
                    <div className='w-[75%] lg:w-[100%]  flex justify-center border-red-400 border 10 md:w-[100%] md:ml-2'>
                        <img className='object-cover' src={productImg} />
                    </div>
                    <div className=' overflow-scroll border 8 border-r-emerald-500 scrollbar-thin lg:hidden xl:hidden 2xl:hidden'>
                        <div className=' justify-center flex flex-row gap-4 m-2 mr-5  md:w-[30%] '>
                            <img src={productImg} className='h-30' />
                            <img src={productImg} className='h-30' />
                            <img src={productImg} className='h-30' />
                            <img src={productImg} className='h-30' />
                            <img src={productImg} className='h-30' />
                            <img src={productImg} className='h-30' />
                            <img src={productImg} className='h-30' />
                            <img src={productImg} className='h-30' />
                            <img src={productImg} className='h-30' />
                            <img src={productImg} className='h-30' />
                            <img src={productImg} className='h-30' />
                            <img src={productImg} className='h-30' />
                            <img src={productImg} className='h-30' />
                        </div>
                    </div>

                    <div className='flex flex-col max-lg:w-[10%] border-8 border-white'>
                        <div className='flex flex-col gap-5 p-7 border 4 border-red-500 items-center '>
                            <h2 className='s  w-[100%]  ml-[10%] text-4xl font-semibold font-mulish mt-[6%] lg:text-4xl md:pl-24 md:ml-10 xl:pl-32'   >Yellow Sweat shirt  </h2>
                            <h2 className="mt-[10%] mb-9 ml-[10%] font-semibold underline  tracking-wider text-2xl lg:text-xl border 8 md mr-10 ">Product Description</h2>
                            <div className='border 4 border-green-500 lg:tracking-wider lg:h-60 lg:ml-[-1.3rem] lg:mr-[-1.4rem]'>
                                <p className="ml-[10%] font-mulish tracking-wider font-extralight text-lg mr-28 lg:text-[1.09rem] md:pl-5 md:text-[1rem]">THIS PRODUCT OFFERS LUXURIOUS, BRUSHED SURFACE SILICONE WASH AND GIVES A PLUSH, AND VELVETY HAND FEEL.ITS MADE WITH 100% FRENCH
                                </p>
                            </div>

                            <span className="text text-4xl font-bold lg:text-xl ml-[10%] pt-5 lg:pt-0 lg:ml-0">LKR 3500.00</span>
                            <span className="flex mt-[2%] font-extralight text-sm  ml-[10%]">(Shipping calculated at checkout)</span>
                        </div>
                        <div className='flex gap-5 p-3 flex-col'>
                            <span className="font-mulish font-semibold text-xl  pl-20  lg:pl-[14.5%] lg:text-m ">Size </span>
                            <div className='flex gap-2  p-3 pl-20 lg:gap-1 lg:ml-[-0.8rem]'>
                                <button type="button" className="text-gray-900 bg-white border hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-600 dark:focus:ring-gray-700 mt-6 lg:pl-[5%] lg:pr-[5%]"  >XS</button>
                                <button type="button" className="text-gray-900 bg-white border hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-600 dark:focus:ring-gray-700 mt-6 lg:pl-[5%] lg:pr-[5%]" >S</button>
                                <button type="button" className="text-gray-900 bg-white border hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-600 dark:focus:ring-gray-700 mt-6 lg:pl-[5%] lg:pr-[5%]" >M</button>
                                <button type="button" className="text-gray-900 bg-white border hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-600 dark:focus:ring-gray-700 mt-6 lg:pl-[5%] lg:pr-[5%]" >L</button>
                                <button type="button" className="text-gray-900 bg-white border hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-600 dark:focus:ring-gray-700 mt-6 lg:pl-[5%] lg:pr-[5%]" >XL</button>
                            </div>

                        </div>

                        <div className='flex gap-5 p-3 flex-col'>
                            <span className="font-mulish font-semibold text-xl  pl-20  lg:pl-[14.5%] lg:text-m ">Color </span>
                            <div className='flex gap-4 pl-20 lg:pl-[4rem] '>
                                <img src={color} alt="black" className='lg:h-[60%]' />
                                <img src={color1} alt="green" className='lg:h-[60%]' />
                                <img src={color2} alt="yellow" className='lg:h-[60%]' />
                                <img src={color3} alt="red" className='lg:h-[60%]' />
                            </div>
                        </div>
                        <div className='pl-20 lg:pl-13 flex h-14'>
                            <input type="number" name="number_cloths " className="pl-8 bg-white w-[30%] h-11" />
                            <button type="button" className="ml-[5%] px-10  text-gray-900 bg-white border hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-600 dark:focus:ring-gray-700 lg:text-xs h-11"  >ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSelection