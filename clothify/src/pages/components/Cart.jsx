import cartImg from '../../assets/product.png'
import min from '../../assets/min.png'
import max from '../../assets/Max (1).png'
import bin from '../../assets/delete.png'

const Cart = () => {
    return (

        <div className='flex flex-col  mt-[3%] mr-[3%] items-end '>
            <div className='flex flex-col border rounded-xl  justify-end items-start w-[30%] pt-2 bg-[#FFFFF5] pb-6'>
                <h1 className='font-mulish font-extrabold text-xl pt-3 pl-6 pb-6 '>SHOPPING CART </h1>
                <div className='  scrollbar-thin overflow-scroll p-2 bg-[#FFFFF5] h-[13rem]'>
                    <div className='flex mb-3 '>
                        <div className='ml-4  w-[30%]'>
                            <img src={cartImg} alt="" />
                        </div>
                        <div className='flex flex-col pr-[20%] '>
                            <div className='  flex'>
                                <h2 className='ml-3'>Yellow Sweatshirt</h2>
                                <span className=' pr-5 mr-0 ml-[65%]'> 3500.00</span>
                            </div>
                            <span className='ml-[10%] mt-3'>xs/Black</span>
                            <div className='flex flex-row size-[9%] ml-[10%] mt-4'>
                                <img src={min} alt="" />
                                <input className='w-[4rem] pl-[2]  bg-black text-white  ' type="number" />
                                <img src={max} />
                                <img className='w-[100%] h-[24px] pb-1' src={bin} />
                            </div>
                        </div>
                    </div>
                    <div className='flex '>
                        <div className='ml-4  w-[30%]'>
                            <img src={cartImg} alt="" />
                        </div>
                        <div className='flex flex-col pr-[20%] '>
                            <div className=' 8 flex'>
                                <h2 className='pl-5'>Yellow Sweatshirt</h2>
                                <span className=' pr-5 mr-0 ml-[67%]'> 3500.00</span>
                            </div>
                            <span className='ml-[10%]'>xs/Black</span>
                            <div className='flex flex-row size-[9%] ml-[10%] mt-4'>
                                <img src={min} alt="" />
                                <input className='w-[4rem] pl-6 text-white bg-black ml-2 mr-2' type="number" />
                                <img src={max} />
                                <img className='w-[100%] h-[24px] pb-1' src={bin} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className=' mt[10%] flex flex-col bg-[#E5E5B6] w-[30%] border-b rounded-b-xl'>
                <div className='flex p-6 mb-0 '>
                    <span>Total</span>
                    <span className='ml-auto'>LKR 10500.00</span>
                </div>

                <button className="text-gray-900 bg-white  hover:text-white border-gray-300 focus:outline-none hover:bg-black  focus:ring-gray-100 font-medium rounded-lg text-sm  py-2.5 me-12 mb-12 ml-12 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-600 dark:focus:ring-gray-700 mt-6 " type="button" >CHECK OUT</button>
                <span className='pl-15  ml-[17%] mt-[-8%] pb-3 text-sm text-slate-500'>shipping cost and Taxes calculated on checkout</span>
            </div>
        </div>
    )
}
export default Cart