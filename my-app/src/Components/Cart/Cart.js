import React , {useEffect} from 'react'
import {useCartContext} from '../../Context/cartContext'
import {Link} from 'react-router-dom'
import css from '../Cart/Cart.css';
import { CartList } from '../CartList/CartList';
import { getFirestore } from '../../firebase'
import firebase from 'firebase/app'

const Cart = () => {

    const {cart, setLoading} = useCartContext()

    const db = getFirestore()
    const orders = db.collection('orders')




    return(
        <div className='mt-5 container'>
            <h1 className='text-left mb-4'>Mi Carrito de Compras</h1>
            {cart.length == 0 ? <div className='mt-5 text-left'>Tu carrito está vacío, ve a la <Link to='/'> tienda</Link> y empieza a comprar</div>
            :
            <CartList></CartList> 
            } 
        </div>   
        
    )
}

export default Cart