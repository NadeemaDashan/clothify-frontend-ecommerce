import {useState} from 'react'
import Image from '../../../public/logo.png'
import { Link } from 'react-router-dom'
import CartImage from "../../assets/cart.png"
import Menu from '../../assets/Menu.png'

const Header = () => {
    const[isOpen,setIsOpen]=useState(false)
    return (
        <header className="flex fixed w-screen bg-[#FFFFF5] font-mulish">
            <div className="w-1/3 justify-center items-center p-5 max-lg:hidden">
                <ul className="flex gap-7 p-5 ">
                    <li className="ml-5 hover:underline"><Link>Home</Link></li>
                    <li className="hover:underline"><Link>Mens</Link></li>
                    <li className="hover:underline"><Link>Womens</Link></li>
                    <li className="hover:underline"><Link>Kids</Link></li>
                </ul>
            </div>
            <div className="w-1/3 flex justify-center items-center max-lg:hidden p-5">
                <img src={Image} className="w-40" alt="logo" />
            </div>
            <div className="flex w-1/3 justify-end items-center p-5 gap-7 max-lg:hidden">
                <img src={CartImage} className='h-6 mr-4' alt='cart'/>
                <p className='mr-4 hover:underline'><Link to='/'>Sign in</Link></p>
            </div>

            <div className='lg:hidden p-5'>
                <img src={Image} className='w-40' alt='logo'/>
            </div>
            <div className='lg:hidden ml-auto p-5 pt-8'>
            <img src={Menu} className='w-8' alt='menu'></img>
            </div>
        </header>
    )
}

export default Header
