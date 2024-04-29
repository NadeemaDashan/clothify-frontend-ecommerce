import bin from '../../assets/delete.png'
import max from '../../assets/Max.png'
import min from '../../assets/min.png'
import cartImg from '../../assets/hi.png'

function CartItem(params) {
    return (
        <div className='flex mb-5'>
            <div className=' ml-4 w-[30%]'>
                <img src={cartImg} alt="" />
            </div>
            <div className='flex flex-col pr-[20%] '>
                <div className='  flex'>
                    <h2 className='ml-3'>Yellow Sweatshirt</h2>
                    <span className=' pr-5 mr-0 ml-[65%]'> 3500.00</span>
                </div>
                <span className='ml-[10%] mt-3'>xs/Black</span>
                <div className='flex flex-row size-[9%] ml-[10%] mt-4'>
                    <img src={min} alt="reduce button" className='mt-1' />
                    <p className='px-10 mx-2 bg-black rounded-sm text-white pb-6'>1</p>
                    <img src={max} alt='add more button'className='mt-1' />
                    <img className='h-6 mx-3' src={bin} alt='bin' />
                </div>
            </div>
        </div>
    )
}

export default CartItem