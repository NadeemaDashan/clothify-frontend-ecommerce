import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import CartComponents from './CartComponents';


//TODO: Customer ID is fixed
const Cart = (props) => {
    const useNav=useNavigate();
    let total=0;
    const[toReload,setToReload]=useState(0);
    
    const[cartItem,setCartItem]=useState([])
    cartItem.map((element)=>{
        total+=element.productTot;
    })

    function updateView(){
        setToReload(prevState=>prevState+1);
    }
    

    useEffect(()=>{
        const url=`http://localhost:8080/cart/get/customer/1`
        axios.get(url).then((response)=>{
            setCartItem(response.data)
        }).catch(()=>{
            useNav("/error404")
        })
    },[toReload])

    
    return (
        <div className={`flex flex-col w-[79rem] pl-[48%] mt-[-3%] items-end ${props.mt} font-mulish`}>
            <div className='flex flex-col border-b rounded-t-xl border-t-2 border-l-2 border-r-2 justify-end items-start pt-2 bg-[#FFFFF5] pb-6 w-[80%] dark:bg-[#18191b] dark:text-white'>
                <h1 className='font-mulish font-extrabold text-xl pt-3 pl-6 pb-6'>SHOPPING CART</h1>
                <div className='scrollbar-thin overflow-scroll p-2 bg-[#FFFFF5] dark:bg-black h-[15rem]'>
                 {cartItem.map((element)=>{
                    toReload
                    return(
                    <CartComponents reload={updateView} key={element.id} id={element.id} product={element}/> 
                    )
                 })}
                </div>
            </div>
            <div className='flex flex-col bg-[#E5E5B6] w-[80%] rounded-b-xl border-b-2 border-l-2 border-r-2 dark:bg-[#18191b] dark:text-white'>
                <div className='flex p-6 mb-0'>
                    <span>Total</span>
                    <span className='ml-auto'>{`LKR ${total}.00`}</span>
                </div>
                <Link to="/order">
                <button className="text-gray-900 bg-white hover:text-white border-gray-300 focus:outline-none hover:bg-black focus:ring-gray-100 font-medium rounded-lg text-sm py-2.5 me-12 ml-[10%] mb-12 dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white mt-6 w-[80%]" type="button">CHECK OUT</button>
                </Link>
                <span className='pl-15 ml-[12%] mt-[-8%] pb-3 text-sm text-slate-500'>Shipping cost and Taxes calculated on checkout</span>
            </div>
        </div>
    );
}

export default Cart;