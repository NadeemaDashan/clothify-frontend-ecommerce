
import ProductImg from '../../assets/product.png'
import { Link, useParams } from 'react-router-dom'

const ProductCard = (props) => {
    console.log(props.id)
    return (
        <div className="w-225 flex gap-3 flex-col justify-center tracking-wider font-mulish mb-20">
            <Link to={`product/${props.id}`}>
        <img src={props.image}  className='w-[80%]' alt='product-image'/>
        <h3 className='text-[#4E4E4E] text-lg px-2 dark:text-white py-4'>{props.product.name}</h3>
        <h1 className='text-xl px-2 font-bold dark:text-white'>LKR {props.product.price}.00</h1>
        <p className='px-2 dark:text-white'>{props.product.category.name}</p>
        </Link>
        </div>
    )
}

export default ProductCard