import { useState } from 'react'
import Image from '../../../public/logo.png'
import { Link } from 'react-router-dom'
import CartImage from "../../assets/cart.png"
import Menu from '../../assets/Menu.png'
import cart from '../../assets/Light Shopping Bag.png'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)


    function handleClick() {
        setIsOpen(prevState => !prevState)
    }
    
    return (
        <div className='mt-16  w-[85%] ml-[8%]'>
        <header className="flex sticky  bg-[#F4F4DC] font-mulish dark:bg-[#18191b]  rounded-xl h-[6rem]   ">
            <div className="w-1/3 justify-center items-center p-7 max-lg:hidden ">
                <ul className="flex gap-7 p-2 dark:text-white tracking-wider lg:tracking-wide lg:text-xs  text-sm">
                    <li className="ml-5 hover:underline"><Link to='/home'>Home</Link></li>
                    <li className="hover:underline"><Link>Category</Link></li>
                    <li className="hover:underline"><Link>SubCategory</Link></li>
                    <li className="hover:underline"><Link>Collection</Link></li>
                </ul>
            </div>
            <div className="w-1/3 flex justify-center items-center max-lg:hidden p-5 lg:ml-10">
                <img src={Image} className="w-40" alt="logo" />
            </div>
            <div className="flex w-1/3 justify-end items-center p-5 gap-5 max-lg:hidden dark:text-white mr-5 text">
                <img src={cart} className=' size-5 hidden dark:flex ' alt="" />
                <img src={CartImage} className='h-6 mr-4 dark:hidden' alt='cart' />
                <p className='mr-4 hover:underline'><Link to='/'>Sign in</Link></p>
                
            </div>
            <div className='lg:hidden p-5  '>
                <img src={Image} className=' size-12  w-28' alt='logo' />
            </div>
            <div className='lg:hidden ml-auto p-5 pt-6'>
                <img src={Menu} onClick={handleClick} className={`w-8 cursor-pointer ${isOpen===true?`hidden`:``}`} alt='menu'></img>
            </div>
        </header>
        <div className={`lg:hidden w-screen fixed bg-black h-[50%] mt-[17%] dark:bg-white bg-opacity-100 ${isOpen!==true?`max-lg:hidden`:``}`}>
            <p>hello this is the new menu</p>
            <button onClick={handleClick} className='bg-white'>close menu</button>
        </div>
        </div>
    )
}

export default Header