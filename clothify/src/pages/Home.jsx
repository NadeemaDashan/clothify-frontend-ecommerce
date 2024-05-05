import { motion } from 'framer-motion';
import React from "react";
import autumn_m from '../assets/autumn-mobile.png';
import autumn from '../assets/autumn.png';
import bento2 from '../assets/bento2.png';
import bento3 from '../assets/bento3.png';
import bento4 from '../assets/bento4.png';
import bento5 from '../assets/bento5.png';
import men_mobile from '../assets/c1.png';
import women_mobile from '../assets/c2.png';
import teens_mobile from '../assets/c3.png';
import kids_mobile from '../assets/c4.png';
import category from '../assets/category.png';
import collection from '../assets/collection.png';
import start from '../assets/homeStart.png';
import kids from '../assets/kids.png';
import bento_m1 from '../assets/m1.png';
import bento_m2 from '../assets/m2.png';
import bento_m3 from '../assets/m3.png';
import bento_m4 from '../assets/m4.png';
import bento_m5 from '../assets/m5.png';
import men from '../assets/mens.png';
import season from '../assets/seasonal.png';
import spring_m from '../assets/spring-m.png';
import spring from '../assets/summer2.png';
import summer_m from '../assets/summer-m.png';
import summer from '../assets/summer.png';
import bento1 from '../assets/T-shirtBento.png';
import teen from '../assets/teens.png';
import visit from '../assets/visit.png';
import winter_m from '../assets/winter-m.png';
import winter from '../assets/winter.png';
import women from '../assets/women.png';
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Link } from 'react-router-dom';

export default function Home() {
    const [isOpen, setIsOpen] = React.useState(false);

    function handleClick(){
        setIsOpen(prevState=>!prevState)
        console.log(isOpen);

    }

    return (
        <div className='flex flex-col bg-[#FCFCF5]  dark:bg-black'>
            <div className='mb-0 p-0'>
                <Header action={handleClick}/>
            </div>
            <motion.main animate={{ scale: 1 }} transition={{ type: "spring", duration: 2 }} initial={{ scale: 0 }} className={`flex flex-col items-center justify-center 2xl:p-24 lg:p-24    ${isOpen==true?` overflow-hidden`:` overflow-scroll`} `}>

                <div className="flex w-[90%] mt-10 justify-end  overflow-y-hidden mb-12  max-sm:p-7 max-lg:p-12 max-xl:p-16  2xl:mt-[-14%] ">
                    <div  className="  2xl:mt-0 pt-0 ">
                        <img  src={start} alt="" />
                    </div>
                    <div   className={`mt-[-4%] absolute mr-[-9%] ${isOpen==true?`fixed`:`hidden`}`}>
                        <Cart />
                    </div>
                </div>

                <div>
                    <img className="" src={collection} alt="" />
                </div>
                <div className="g grid grid-cols-2 gap-1   ml-[5%]   mt-2 p-5  max-sm:hidden">
                    <Link to='subCategory/tshirt/product'>
                    <motion.img whileHover={{ scale: 1.15 }} whileInView={{ x: 0 }} initial={{ x: -20 }} className="w-[95%]" src={bento1} alt="" />
                    </Link>
                    <motion.img whileHover={{ scale: 1.15 }} whileInView={{ x: 0 }} initial={{ x: 20 }} className=" w-[100%] mr-2 pr-6" src={bento2} alt="" />
                    <motion.img whileHover={{ scale: 1.15 }} whileInView={{ x: 0 }} initial={{ x: -20 }} className="w-[95%] pt-0 mt-[-80%] md:mt-[-75%] sm:mt-[-74%] " src={bento3} alt="" />
                    <motion.img whileHover={{ scale: 1.15 }} whileInView={{ x: 0 }} initial={{ x: 20 }} className="pt-5 w-[97%] lg:w-[95%] md:w-[94.5%] md:h-[99%] sm:w-[93%] sm:h-[99%] " src={bento4} alt="" />
                </div>

                <div className=" flex flex-col justify-center items-center p-10 md:hidden ">
                    <motion.img whileHover={{scale:1.15}} className="" src={bento_m1} alt="" />
                    <motion.img whileHover={{scale:1.15}} className="ssm:mt-[-12%]" src={bento_m2} alt="" />
                    <motion.img whileHover={{scale:1.15}} className="ssm:mt-[-12%]" src={bento_m3} alt="" />
                    <motion.img whileHover={{scale:1.15}} className="ssm:mt-[-12%]" src={bento_m4} alt="" />
                    <motion.img whileHover={{scale:1.15}} className="ssm:mt-[-12%]" src={bento_m5} alt="" />
                </div>

                <div className=" pl-[3%]  pr-3 flex ml-[3%] max-sm:hidden">
                    <motion.img whileHover={{ scale: 1.15 }} whileInView={{ x: 0 }} initial={{ x: -20 }} className="r rounded-lg w-[98%]" src={bento5} alt="" />
                </div>
                <div className="mt-[10%]">
                    <img className="ml-0 p-0  mr-[-2%]" src={category} alt="" />
                </div>
                <div  className="flex mt-7 ml-[2%] mr-[1%] w-[100%]  justify-center gap-5 max-lg:hidden p-20">
                    <Link to='/mens' className=''>
                    <motion.img whileHover={{scale:1.5}} className="" src={men} alt="" />
                    </Link>
                    <Link to='/women'>
                    <motion.img whileHover={{scale:1.5}} className=" object-cover " src={women} alt="" />
                    </Link>
                    <Link to='/teens'>
                    <motion.img whileHover={{scale:1.5}} className="" src={teen} alt="" />
                    </Link>
                    <Link to='/kids'>
                    <motion.img whileHover={{scale:1.5}} className="" src={kids} alt="" />
                    </Link>
                </div>
                <div className="mt-5 flex flex-col items-center p-10 lg:hidden ">
                    <Link to='/mens'>
                    <motion.img whileHover={{scale:1.15}} src={men_mobile} alt="" />
                    </Link>
                    <Link to='/womens'>
                    <motion.img whileHover={{scale:1.15}} src={women_mobile} alt="" />
                    </Link>
                    <Link to='/teens'>
                    <motion.img whileHover={{scale:1.15}} src={teens_mobile} alt="" />
                    </Link>
                    <Link to='/kids'>
                    <motion.img whileHover={{scale:1.15}} src={kids_mobile} alt="" />
                    </Link>
                </div>
                <div className="mt-[10%] pb-8 ">
                    <img className="ml-0 p-0  mr-[-2%]" src={season} alt="" />
                </div>
                <div className="grid grid-cols-2 pt-10 pl-8 gap-3 mr-2 ml-2 max-lg:hidden">
                <motion.img whileHover={{scale:1.15}} src={summer} alt="" />
                    <motion.img whileHover={{scale:1.15}} className="xl:w-[93%] lg:w-[92%] md:w-[85%] sm:w-[83%] mb-0" src={winter} alt="" />
                    <motion.img whileHover={{scale:1.15}} className="p-0 mt-[-6%]" src={autumn} alt="" />
                    <motion.img whileHover={{scale:1.15}} className="pr-12 h-[100%] object-cover " src={spring} alt="" />
                </div>
                <div className=" p-10 flex flex-col items-center lg:hidden ">
                <motion.img whileHover={{scale:1.15}} className="pl-1" src={summer_m} alt="" />
                    <motion.img whileHover={{scale:1.15}} className="pl-1" src={winter_m} alt="" />
                    <motion.img whileHover={{scale:1.15}} className="ml-1" src={autumn_m} alt="" />
                    <motion.img whileHover={{scale:1.15}} className="pl-1" src={spring_m} alt="" />
                </div>
                <div className=" mt-10">
                    <img src={visit} alt="" />
                </div>
            </motion.main>
            <Footer />
        </div>
    )
}