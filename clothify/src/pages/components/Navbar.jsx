import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom'
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import cart from '../../assets/Light Shopping Bag.png'
import CartImage from "../../assets/cart.png"
import Menu from '../../assets/Menu.png'
import Image from '../../../public/logo.png'
import { useDispatch } from "react-redux";
import { showCart } from "../../states/cart/CartSlice";





const Navbar = (props) => {

    const [isScrolling, setIsScrolling] = useState(false);


    const handleScroll = () => {
        if (window.scrollY >= window.innerHeight) {
            setIsScrolling(true);
        } else {
            setIsScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    return (
        <>
            <AnimatePresence>
                {isScrolling ? (<NavbarScroll open={props.open} isScrolling={isScrolling} />) : (<NavbarFixed open={props.open}/>)}
            </AnimatePresence>
        </>
    );
}

function NavbarFixed(props) {
    const dispatch=useDispatch();

    const [hidden, setHidden] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    function handleClick() {
        console.log("clicked");
        props.open();
    }


    return (
        <motion.Navbar variants={{
            visible: { y: 0 },
            hidden: { y: "-160%" }
        }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className='  fixed  flex w-[88%] items-center  max-xl:ml-20 max-2xl:ml-24 xl:ml-28 max-md:ml-6 max-lg:ml-14   mt-10 bg-[#F4F4DC] font-mulish dark:bg-[#18191b]  rounded-xl h-[5rem]   '>
            <div className="w-1/3 justify-center items-center p-7 max-lg:hidden ">
                <ul className=" flex gap-7 p-2 dark:text-white tracking-wider lg:tracking-wide lg:text-xs  text-sm">
                    <motion.li className="ml-5 hover:underline" whileHover={{ scale: 1.2 }}><Link to='/mens'>Mens</Link></motion.li>
                    <motion.li whileHover={{ scale: 1.2 }} className="hover:underline"><Link to='/women'>Women</Link></motion.li>
                    <motion.li whileHover={{ scale: 1.2 }} className="hover:underline"><Link to='/teens'>Teens</Link></motion.li>
                    <motion.li whileHover={{ scale: 1.2 }} className="hover:underline"><Link to='/kids'>Kids</Link></motion.li>
                    <motion.li whileHover={{ scale: 1.2 }} className="hover:underline"><Link to='/subCategories'>SubCategories</Link></motion.li>
                </ul>
            </div>
            <div className="w-1/3 flex justify-center items-center max-lg:hidden p-5 lg:ml-10">
                <Link className='ml-0' to='/home'><motion.img whileHover={{ scale: 1.2 }} src={Image} className="w-40 p-3" alt="logo" /></Link>
            </div>
            <div className="flex w-1/3 justify-end items-center p-5 gap-5 max-lg:hidden dark:text-white mr-5 text " >
                <motion.img whileHover={{ scale: 1.5 }} src={cart} className={` size-5 hidden dark:flex `} onClick={()=>dispatch(showCart())} alt="" />
                <motion.img whileHover={{ scale: 1.5 }} src={CartImage} className='h-6 mr-4 dark:hidden' onClick={()=>dispatch(showCart())} alt='cart' />
                <motion.p whileHover={{ scale: 1.2 }} className='mr-4 hover:underline'><Link to='/'>Sign in</Link></motion.p>
            </div>
            <div className='lg:hidden p-5  '>
                <img src={Image} className=' size-12  w-28' alt='logo' />
            </div>
            <div className='lg:hidden ml-auto p-5 pt-6'>
                <img src={Menu} onClick={handleClick} className={`w-8 cursor-pointer ${isOpen === true ? `hidden` : ``}`} alt='menu'></img>
            </div>
        </motion.Navbar>
    )
}

function NavbarScroll(props) {


    const [hidden, setHidden] = useState(false)
    const [isOpen, setIsOpen] = useState(false)


    function handleClick() {
        props.open();
    }

    return (
        
        <motion.nav
            key={1}
            initial="initial"
            animate={props.isScrolling ? "animate" : "initial"}
            exit="exit"
            variants={NavAnimations}
            className="fixed z-10 flex justify-between px-5 py-1 rounded-full ts-bg left-1/2 top-10 max-md:w-[10rem] max-md:ts-bg max-md:mr-40 p-0 m-0 max-md:px-1 ">
                
            <ul className="flex items-center gap-5 border border-white bg-[#F4F4DC] px-9 text-xs  py-2  text-black rounded-full dark:bg-[#18191b] dark:text-white max-lg:hidden    ">
                <motion.li className=" px-4 py-3 text-md hover:border border-black rounded-full  dark:hover:border  dark:border-gray-400 dark:rounded-full" whileHover={{ scale: 1.2 }}><Link to='/mens'>Mens</Link></motion.li>
                <motion.li whileHover={{ scale: 1.2 }} className=" px-4 py-3 text-md hover:border border-black rounded-full  dark:hover:border  dark:border-gray-400 dark:rounded-full "><Link to='/women'>Women</Link></motion.li>
                <motion.li whileHover={{ scale: 1.2 }} className=" px-4 py-3 text-md hover:border border-black rounded-full  dark:hover:border  dark:border-gray-400 dark:rounded-full "><Link to='/teens'>Teens</Link></motion.li>
                <Link className=' ' to='/home'><motion.img whileHover={{ scale: 1.2 }} src={Image} className=" w-[28rem] h-full p-3" alt="logo" /></Link>
                <motion.li whileHover={{ scale: 1.2 }} className="  px-4 py-3 text-md hover:border border-black rounded-full  dark:hover:border  dark:border-gray-400 dark:rounded-full "><Link to='/kids'>Kids</Link></motion.li>
                <motion.li whileHover={{ scale: 1.2 }} className=" px-4 py-3 text-md hover:border border-black rounded-full  dark:hover:border  dark:border-gray-400 dark:rounded-full"><Link to='/subCategories'>SubCategories</Link></motion.li>
            </ul>
            <ul className="  ml-8 flex items-center justify-center w-[20rem] gap-5 border border-white bg-[#F4F4DC]  px-12 text-xs   text-black rounded-full dark:bg-[#18191b] dark:text-white max-lg:hidden">
                    <motion.img whileHover={{ scale: 1.5 }} src={cart} className={` ml-1 size-6 hidden dark:flex`} onClick={handleClick} alt="" />
                    <motion.img whileHover={{ scale: 1.5 }} src={CartImage} className=' ml-1 dark:hidden' onClick={handleClick}alt='cart' />
                    <motion.p whileHover={{ scale: 1.2 }} className='px-3 py-3 items-center justify-center flextext-md hover:border border-black rounded-full  dark:hover:border  dark:border-gray-400 dark:rounded-full '><Link to='/'>Sign in</Link></motion.p>
            </ul>
        </motion.nav>
    );
}

const NavAnimations = {
    initial: {
        y: -50,
        x: "-50%",
        opacity: 0,
    },
    animate: {
        y: 0,
        x: "-50%",
        opacity: 1,
        transition: {
            type: "spring",
            damping: 10,
            stiffness: 100,
        },
    },
    exit: {
        y: -50,
        opacity: 0,
    },
};

export default Navbar