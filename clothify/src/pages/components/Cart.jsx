import cartImg from '../../assets/product.png'

const Cart = () => {
    return(
        <div className='  overflow-auto ssm:overflow-x-hidden'>
            <div className='fixed ml-[60%] bg-[#FFFFF5] w-[33%] mt-8 h-20 border-t-2 border-l-2 border-r-2 rounded-t-3xl 2xl:w-[600px]  xl:w-[600px] xl:ml-[48%] lg:w-[500px] lg:ml-[45%] md:w-[600px]  md:ml-[20%] md:mt-[10%] sm:ml-[10%] sm:w-[512px] ssm:w-[260px] ssm:ml-[10%] ssm:mt-[20%] '  >
                    <h1 className=' m-6 ml-9 font-mulish font-extrabold tracking-widest text-2xl ssm:text-sm'>SHOPPING CART </h1>
            </div>
            <div className=' border-l-2 border-r-2  scrollbar-thin  flex-inline mt-[4rem]  bg-[#FFFFF5] w-[33%]  ml-[60%] p-8  h-[30vh]  overflow-scroll  2xl:w-[600px]  xl:w-[600px] xl:ml-[48%] lg:ml-[45%] lg:w-[500px]  md:w-[600px]  md:ml-[20%] md:mt-[13%] md:h-[550px] sm:ml-[10%] sm:w-[512px] ssm:w-[260px] ssm:ml-[10%]  ssm:mt-[30%]' >
                <div className='flex  overflow-auto '>
                    <div className=' mt-[5%] ml-3 ssm:mr-[-40%] '>
                        <img src={cartImg} alt="product" className='mt-4 object-cover w-[8rem] 2xl:w-[40%] xl:w-[7rem] lg:w-[6rem] sm:w-[40%] ssm:w-[30%] ssm:mt-[1] ssm:ml-[-5%]' />
                    </div>
                    <div className='mt-[9%] w-[50%] ml-[-45%] flex '>
                        <div className='flex ml-[15rem]  2xl:ml-[20%] xl:ml-[100%] lg:ml-[100%] md:ml-[100%] sm:ml-8 ssm:text-sm '>
                            <h2 className=' mt-3  tracking-wide font-mulish text-l size-[3rem] font-bold md:text-sm md:mr-[190%] lg:mr-[39%] xl:mr-[65%] ssm:ml-[-15rem] ssm:text-xs ssm:mr-[3]'>Yellow Sweatshirt</h2>
                            <span className='ml-[6rem] mt-4 font-mulish font-bold 2xl:ml-[15rem]  md:text-base sm:ml-[8rem] md:mr-[2%] md:ml-[-50%]  xl:mr-[75%] lg:ml-[80%] ssm:text-xs  ssm:ml-10'  > 3500.00</span>
                            <span className='mt-[5rem]  font-mulish text-sm ml-[-17.7rem] font-thin 2xl:ml-[-21.8rem] xl:ml-[-218%] lg:ml-[-185%] md:ml-[-207%] sm:ml-[-1.8rem] ssm:ml-[-8.5rem]'>xs/Black</span>
                        </div>

                        <div className='flex  mt-[43%] ml-[-110%]'>
                            {/* <img src={min} alt="" className='size-[20%] items-center' />
                            <input type="number" name="number_cloths "className="h-[15px] w-[45px] pl-6 bg-black ml-1 mr-2  " />
                            <img src={max} alt="" className='size-[20%] ml-[-4%]'/>
                            <img src={bin} alt=''className='size-[25%] mt-[-2%]' /> */}
                        </div>
                    </div>
                </div>
                <div className='flex  overflow-auto '>
                    <div className=' mt-[5%] ml-3 ssm:mr-[-40%] '>
                        <img src={cartImg} alt="product" className='mt-4 object-cover w-[8rem] 2xl:w-[40%] xl:w-[7rem] lg:w-[6rem] sm:w-[40%] ssm:w-[30%] ssm:mt-[1] ssm:ml-[-5%]' />
                    </div>
                    <div className='mt-[9%] w-[50%] ml-[-45%] flex '>
                        <div className='flex ml-[15rem]  2xl:ml-[20%] xl:ml-[100%] lg:ml-[100%] md:ml-[100%] sm:ml-8 ssm:text-sm '>
                            <h2 className=' mt-3  tracking-wide font-mulish text-l size-[3rem] font-bold md:text-sm md:mr-[190%] lg:mr-[39%] xl:mr-[65%] ssm:ml-[-15rem] ssm:text-xs ssm:mr-[3]'>Yellow Sweatshirt</h2>
                            <span className='ml-[6rem] mt-4 font-mulish font-bold 2xl:ml-[15rem]  md:text-base sm:ml-[8rem] md:mr-[2%] md:ml-[-50%]  xl:mr-[75%] lg:ml-[80%] ssm:text-xs  ssm:ml-10'  > 3500.00</span>
                            <span className='mt-[5rem]  font-mulish text-sm ml-[-17.7rem] font-thin 2xl:ml-[-21.8rem] xl:ml-[-218%] lg:ml-[-185%] md:ml-[-207%] sm:ml-[-1.8rem] ssm:ml-[-8.5rem]'>xs/Black</span>
                        </div>

                        <div className='flex  mt-[43%] ml-[-110%]'>
                            {/* <img src={min} alt="" className='size-[20%] items-center' />
                            <input type="number" name="number_cloths "className="h-[15px] w-[45px] pl-6 bg-black ml-1 mr-2  " />
                            <img src={max} alt="" className='size-[20%] ml-[-4%]'/>
                            <img src={bin} alt=''className='size-[25%] mt-[-2%]' /> */}
                        </div>
                    </div>
                </div>
                <div className='flex  overflow-auto '>
                    <div className=' mt-[5%] ml-3 ssm:mr-[-40%] '>
                        <img src={cartImg} alt="product" className='mt-4 object-cover w-[8rem] 2xl:w-[40%] xl:w-[7rem] lg:w-[6rem] sm:w-[40%] ssm:w-[30%] ssm:mt-[1] ssm:ml-[-5%]' />
                    </div>
                    <div className='mt-[9%] w-[50%] ml-[-45%] flex '>
                        <div className='flex ml-[15rem]  2xl:ml-[20%] xl:ml-[100%] lg:ml-[100%] md:ml-[100%] sm:ml-8 ssm:text-sm '>
                            <h2 className=' mt-3  tracking-wide font-mulish text-l size-[3rem] font-bold md:text-sm md:mr-[190%] lg:mr-[39%] xl:mr-[65%] ssm:ml-[-15rem] ssm:text-xs ssm:mr-[3]'>Yellow Sweatshirt</h2>
                            <span className='ml-[6rem] mt-4 font-mulish font-bold 2xl:ml-[15rem]  md:text-base sm:ml-[8rem] md:mr-[2%] md:ml-[-50%]  xl:mr-[75%] lg:ml-[80%] ssm:text-xs  ssm:ml-10'  > 3500.00</span>
                            <span className='mt-[5rem]  font-mulish text-sm ml-[-17.7rem] font-thin 2xl:ml-[-21.8rem] xl:ml-[-218%] lg:ml-[-185%] md:ml-[-207%] sm:ml-[-1.8rem] ssm:ml-[-8.5rem]'>xs/Black</span>
                        </div>

                        <div className='flex  mt-[43%] ml-[-110%]'>
                            {/* <img src={min} alt="" className='size-[20%] items-center' />
                            <input type="number" name="number_cloths "className="h-[15px] w-[45px] pl-6 bg-black ml-1 mr-2  " />
                            <img src={max} alt="" className='size-[20%] ml-[-4%]'/>
                            <img src={bin} alt=''className='size-[25%] mt-[-2%]' /> */}
                        </div>
                    </div>
                </div>
                <div className='flex  overflow-auto '>
                    <div className=' mt-[5%] ml-3 ssm:mr-[-40%] '>
                        <img src={cartImg} alt="product" className='mt-4 object-cover w-[8rem] 2xl:w-[40%] xl:w-[7rem] lg:w-[6rem] sm:w-[40%] ssm:w-[30%] ssm:mt-[1] ssm:ml-[-5%]' />
                    </div>
                    <div className='mt-[9%] w-[50%] ml-[-45%] flex '>
                        <div className='flex ml-[15rem]  2xl:ml-[20%] xl:ml-[100%] lg:ml-[100%] md:ml-[100%] sm:ml-8 ssm:text-sm '>
                            <h2 className=' mt-3  tracking-wide font-mulish text-l size-[3rem] font-bold md:text-sm md:mr-[190%] lg:mr-[39%] xl:mr-[65%] ssm:ml-[-15rem] ssm:text-xs ssm:mr-[3]'>Yellow Sweatshirt</h2>
                            <span className='ml-[6rem] mt-4 font-mulish font-bold 2xl:ml-[15rem]  md:text-base sm:ml-[8rem] md:mr-[2%] md:ml-[-50%]  xl:mr-[75%] lg:ml-[80%] ssm:text-xs  ssm:ml-10'  > 3500.00</span>
                            <span className='mt-[5rem]  font-mulish text-sm ml-[-17.7rem] font-thin 2xl:ml-[-21.8rem] xl:ml-[-218%] lg:ml-[-185%] md:ml-[-207%] sm:ml-[-1.8rem] ssm:ml-[-8.5rem]'>xs/Black</span>
                        </div>

                        <div className='flex  mt-[43%] ml-[-110%]'>
                            {/* <img src={min} alt="" className='size-[20%] items-center' />
                            <input type="number" name="number_cloths "className="h-[15px] w-[45px] pl-6 bg-black ml-1 mr-2  " />
                            <img src={max} alt="" className='size-[20%] ml-[-4%]'/>
                            <img src={bin} alt=''className='size-[25%] mt-[-2%]' /> */}
                        </div>
                    </div>
                </div>
                <div className='flex  overflow-auto '>
                    <div className=' mt-[5%] ml-3 ssm:mr-[-40%] '>
                        <img src={cartImg} alt="product" className='mt-4 object-cover w-[8rem] 2xl:w-[40%] xl:w-[7rem] lg:w-[6rem] sm:w-[40%] ssm:w-[30%] ssm:mt-[1] ssm:ml-[-5%]' />
                    </div>
                    <div className='mt-[9%] w-[50%] ml-[-45%] flex '>
                        <div className='flex ml-[15rem]  2xl:ml-[20%] xl:ml-[100%] lg:ml-[100%] md:ml-[100%] sm:ml-8 ssm:text-sm '>
                            <h2 className=' mt-3  tracking-wide font-mulish text-l size-[3rem] font-bold md:text-sm md:mr-[190%] lg:mr-[39%] xl:mr-[65%] ssm:ml-[-15rem] ssm:text-xs ssm:mr-[3]'>Yellow Sweatshirt</h2>
                            <span className='ml-[6rem] mt-4 font-mulish font-bold 2xl:ml-[15rem]  md:text-base sm:ml-[8rem] md:mr-[2%] md:ml-[-50%]  xl:mr-[75%] lg:ml-[80%] ssm:text-xs  ssm:ml-10'  > 3500.00</span>
                            <span className='mt-[5rem]  font-mulish text-sm ml-[-17.7rem] font-thin 2xl:ml-[-21.8rem] xl:ml-[-218%] lg:ml-[-185%] md:ml-[-207%] sm:ml-[-1.8rem] ssm:ml-[-8.5rem]'>xs/Black</span>
                        </div>

                        <div className='flex  mt-[43%] ml-[-110%]'>
                            {/* <img src={min} alt="" className='size-[20%] items-center' />
                            <input type="number" name="number_cloths "className="h-[15px] w-[45px] pl-6 bg-black ml-1 mr-2  " />
                            <img src={max} alt="" className='size-[20%] ml-[-4%]'/>
                            <img src={bin} alt=''className='size-[25%] mt-[-2%]' /> */}
                        </div>
                    </div>
                </div>
                <div className='flex  overflow-auto '>
                    <div className=' mt-[5%] ml-3 ssm:mr-[-40%] '>
                        <img src={cartImg} alt="product" className='mt-4 object-cover w-[8rem] 2xl:w-[40%] xl:w-[7rem] lg:w-[6rem] sm:w-[40%] ssm:w-[30%] ssm:mt-[1] ssm:ml-[-5%]' />
                    </div>
                    <div className='mt-[9%] w-[50%] ml-[-45%] flex '>
                        <div className='flex ml-[15rem]  2xl:ml-[20%] xl:ml-[100%] lg:ml-[100%] md:ml-[100%] sm:ml-8 ssm:text-sm '>
                            <h2 className=' mt-3  tracking-wide font-mulish text-l size-[3rem] font-bold md:text-sm md:mr-[190%] lg:mr-[39%] xl:mr-[65%] ssm:ml-[-15rem] ssm:text-xs ssm:mr-[3]'>Yellow Sweatshirt</h2>
                            <span className='ml-[6rem] mt-4 font-mulish font-bold 2xl:ml-[15rem]  md:text-base sm:ml-[8rem] md:mr-[2%] md:ml-[-50%]  xl:mr-[75%] lg:ml-[80%] ssm:text-xs  ssm:ml-10'  > 3500.00</span>
                            <span className='mt-[5rem]  font-mulish text-sm ml-[-17.7rem] font-thin 2xl:ml-[-21.8rem] xl:ml-[-218%] lg:ml-[-185%] md:ml-[-207%] sm:ml-[-1.8rem] ssm:ml-[-8.5rem]'>xs/Black</span>
                        </div>

                        <div className='flex  mt-[43%] ml-[-110%]'>
                            {/* <img src={min} alt="" className='size-[20%] items-center' />
                            <input type="number" name="number_cloths "className="h-[15px] w-[45px] pl-6 bg-black ml-1 mr-2  " />
                            <img src={max} alt="" className='size-[20%] ml-[-4%]'/>
                            <img src={bin} alt=''className='size-[25%] mt-[-2%]' /> */}
                        </div>
                    </div>
                </div>
                <div className='flex  overflow-auto '>
                    <div className=' mt-[5%] ml-3 ssm:mr-[-40%] '>
                        <img src={cartImg} alt="product" className='mt-4 object-cover w-[8rem] 2xl:w-[40%] xl:w-[7rem] lg:w-[6rem] sm:w-[40%] ssm:w-[30%] ssm:mt-[1] ssm:ml-[-5%]' />
                    </div>
                    <div className='mt-[9%] w-[50%] ml-[-45%] flex '>
                        <div className='flex ml-[15rem]  2xl:ml-[20%] xl:ml-[100%] lg:ml-[100%] md:ml-[100%] sm:ml-8 ssm:text-sm '>
                            <h2 className=' mt-3  tracking-wide font-mulish text-l size-[3rem] font-bold md:text-sm md:mr-[190%] lg:mr-[39%] xl:mr-[65%] ssm:ml-[-15rem] ssm:text-xs ssm:mr-[3]'>Yellow Sweatshirt</h2>
                            <span className='ml-[6rem] mt-4 font-mulish font-bold 2xl:ml-[15rem]  md:text-base sm:ml-[8rem] md:mr-[2%] md:ml-[-50%]  xl:mr-[75%] lg:ml-[80%] ssm:text-xs  ssm:ml-10'  > 3500.00</span>
                            <span className='mt-[5rem]  font-mulish text-sm ml-[-17.7rem] font-thin 2xl:ml-[-21.8rem] xl:ml-[-218%] lg:ml-[-185%] md:ml-[-207%] sm:ml-[-1.8rem] ssm:ml-[-8.5rem]'>xs/Black</span>
                        </div>

                        <div className='flex  mt-[43%] ml-[-110%]'>
                            {/* <img src={min} alt="" className='size-[20%] items-center' />
                            <input type="number" name="number_cloths "className="h-[15px] w-[45px] pl-6 bg-black ml-1 mr-2  " />
                            <img src={max} alt="" className='size-[20%] ml-[-4%]'/>
                            <img src={bin} alt=''className='size-[25%] mt-[-2%]' /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='   bg-[#E5E5B6] w-[33%]  ml-[60%]  p-10 rounded-b-2xl  2xl:w-[600px]  xl:w-[600px] xl:ml-[48%] lg:ml-[45%] lg:w-[500px] md:w-[600px]  md:ml-[20%] sm:ml-[10%] sm:w-[512px] ssm:w-[260px] ssm:ml-[10%]  '>
                <span className=' font-mulish text-xl font-thin ml-12 2xl:ml-[3%]  lg:ml-[2%] md:ml-[5%] xl:ml-2 xl:mr-[8%] sm:ml-[2%] ssm:ml-[0] ssm:text-base'>Total</span>
                <span className='ml-[50%] text-base font-bold 2xl:ml-[67%] xl:ml-[60%] lg:ml-[60%] md:ml-[65%] sm:ml-[60%] ssm:text-sm ssm:ml-11'>LKR 10500.00</span>
                <button  type="button " className="   flex pl-[5.5rem] w-[280px] mt-[10%] text-gray-900 bg-white  hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-600 dark:focus:ring-gray-700 ml-[20%]  2xl:ml-[22%] 2xl:w-[250px]   lg:ml-[6.5rem] lg:pl-[4.8rem] xl:ml-[28%] xl:pl-[12%] md:w-[60%] sm:w-[17rem] xl:w-[47] ssm:w-[150px] ssm:text-xs ssm:ml-4" >CHECK OUT</button>
                <span className='text font-mulish  font-extralight text-xs ml-[18%] text-slate-400 2xl:ml-[23%] lg:ml-[22%] xl:ml-[26%] sm:ml-[5.7rem]  md:ml-[25%] ssm:text-[8px] ssm:ml-2'>shipping cost and Taxes calculated on checkout</span>
            </div>
        </div>

    )
}
export default Cart