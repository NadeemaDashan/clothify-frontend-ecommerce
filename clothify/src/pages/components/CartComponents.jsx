import bin from '../../assets/delete.png'
import max from '../../assets/Max.png'
import min from '../../assets/min.png'
import cartImg from '../../assets/hi.png'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const CartComponents = (props) => {
    const useNav=useNavigate()
    const[qty,setQty]=useState(props.product.qty);
    function handleDelete(e){
        const url=`http://localhost:8080/cart/delete/${props.id}`
        axios.delete(url).then((res)=>{
                props.reload();
        }).catch(()=>{
            useNav("/error404")
        })
    }
    function addItems(e){
        if(props.product.stock.qty<=qty){
            alert("You can't add more items sorry stock is not available to facilitate the required need")
        }else{
            setQty(qty=>qty+1);

        }
    }
    function removeItems(e){
        if(qty>1){
            setQty(qty=>qty-1)
        }else{
            alert("You can't remove more items sorry if you want to remove click delete icon")
        }
    }
    return (
        <div className='flex mb-5 '>
            <div className=' ml-4 w-[30%]'>
                <img src={cartImg} alt="" />
            </div>
            <div className='flex flex-col pr-[20%] '>
                <div className='  flex'>
                    <h2 className='ml-3'>{props.product.stock.product.name}</h2>
                    <span className=' pr-5 mr-0 ml-[65%]'>{`${props.product.productTot}.00`}</span>
                </div>
                <span className='ml-[10%] mt-3'>{`${props.product.stock.size} / ${props.product.stock.color}`}</span>
                <div className='flex flex-row size-[15%] ml-[10%] mt-4'>
                    <img src={min} alt="reduce button" onClick={(e)=>removeItems(e)} className='w-6 object-cover' />
                    <p className='px-10 mx-2 bg-black rounded-sm text-white pb-6'>{qty}</p>
                    <img src={max} onClick={(e)=>addItems(e)} alt='add more button'className='w-6 object-cover' />
                    <img className='h-7 mx-3' src={bin} onClick={(e)=>handleDelete(e)} alt='bin'/>
                </div>
            </div>
        </div>
    )
}

export default CartComponents
