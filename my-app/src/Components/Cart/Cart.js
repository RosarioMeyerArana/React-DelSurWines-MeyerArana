import React, { useContext } from 'react'
import {useCartContext} from '../../Context/cartContext'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'


const Cart = () => {

    const {cart, clearCart, removeItem} = useCartContext()
    console.log(cart)

    return(
        <>
            {cart.length == 0 ? <div className='mt-5'>Tu carrito está vacío, ve a la <Link to='/'> tienda </Link> y empieza a comprar</div> 
            :
            cart.map((item) => {
            return (
            <li key={item.id}> {item.nombre} - {item.varietal} x {item.cantidad} <Button onClick={() => removeItem(item)} variant='outline-info'>Eliminar</Button></li>)
        }) }
        </>
    )

}

export default Cart