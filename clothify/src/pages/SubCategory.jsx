import t_shirts from '../assets/collection-T-shirt.png'
import shirts from '../assets/collection-shirt.png'
import frocks from '../assets/collection-frock.png'
import denims from '../assets/collection-denim.png'
import blouses from '../assets/collection-blouses.png'
import perfumes from '../assets/collection-perfumes.png'
import Header from '../pages/components/Header'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Tshirt from '../assets/tshirts.jpg'
import Shirt from '../assets/shirts.jpg'
import Denim from '../assets/denims.jpg'
import Blouse from '../assets/blouses.jpg'
import Perfume from '../assets/perfumes.jpg'
import Frock from '../assets/frocks.png'
import Footer from './components/Footer'

const SubCategory = () => {
    const gridVariants={
        hidden:{opacity:0},
        show:{opacity:1,
            transition:{
                staggerChildren:0.25,
            },
        },
    }

    const gridSquareVariants={
        hidden:{opacity:0},
        show:{opacity:1}
    }
  return (
        <main className=' pt-8 dark:bg-black font-mulish '>
            <div>
                <Header />
            </div>
            <motion.div variants={gridVariants} initial="hidden" animate="show" className='  gap-3 p- h-screen  grid grid-cols-2  p-20 pt-20  max-lg:hidden '>
                <Link to={"tshirts/product"} state={{url:"tshirt",image:Tshirt}}>
                <motion.img variants={gridSquareVariants}  whileHover={{scale:1.15}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={t_shirts} alt="" />
                </Link>
                <Link to={"shirts/product"} state={{url:"shirt",image:Shirt}}>
                <motion.img variants={gridSquareVariants}  whileHover={{scale:1.15}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={shirts} alt="" />
                </Link>
                <Link to={"denims/product"} state={{url:"denims",image:Denim}}>
                <motion.img variants={gridSquareVariants}  whileHover={{scale:1.15}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={denims} alt="" />
                </Link>
                <Link to={"frocks/product"} state={{url:"frocks",image:Frock}}>
                <motion.img variants={gridSquareVariants}   whileHover={{scale:1.15}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={frocks} alt="" />
                </Link>
                <Link to={"blouses/product"} state={{url:"blouses",image:Blouse}}>
                <motion.img variants={gridSquareVariants}  whileHover={{scale:1.15}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={blouses} alt="" />
                </Link>
                <Link to={"perfumes/product"} state={{url:"perfumes",image:Perfume}}>
                <motion.img variants={gridSquareVariants}  whileHover={{scale:1.15}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={perfumes} alt="" />
                </Link>
            </motion.div>
            <motion.div variants={gridVariants} initial="hidden" animate="show" className=' p-16 max-sm:p-4 gap-4 flex flex-col mt-3 lg:hidden'>
                <motion.img variants={gridSquareVariants} whileHover={{scale:1.15}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={t_shirts} alt="" />
                <motion.img variants={gridSquareVariants} whileHover={{scale:1.15}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={shirts} alt="" />
                <motion.img variants={gridSquareVariants} whileHover={{scale:1.15}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={denims} alt="" />
                <motion.img variants={gridSquareVariants} whileHover={{scale:1.15}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={frocks} alt="" />
                <motion.img variants={gridSquareVariants} whileHover={{scale:1.15}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={blouses} alt="" />
                <motion.img variants={gridSquareVariants} whileHover={{scale:1.15}} className='w-[100%] h-[100%] object-cover rounded-3xl' src={perfumes} alt="" />
            </motion.div>
            <div className='mt-36'>
            <Footer/>
            </div>
        </main>
    )
    
  
}

export default SubCategory
