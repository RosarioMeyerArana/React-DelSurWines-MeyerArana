import React, { useContext } from 'react'
import {useCartContext} from '../../Context/cartContext'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import css from '../Cart/Cart.css';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';


const Cart = () => {

    const {cart, clearCart, removeItem} = useCartContext()
    console.log(cart)

    return(
        <div className='mt-5 container' >
            {cart.length == 0 ? <div className='mt-5'>Tu carrito está vacío, ve a la <Link to='/'> tienda </Link> y empieza a comprar</div> 
            :
            cart.map((item) => {
            return (
            <li className='itemCarrito text-left mb-5' key={item.id}> {item.nombre} - {item.varietal} x {item.cantidad} 
            <DeleteOutlinedIcon className='botonEliminar mx-4 ' onClick={() => removeItem(item)} /> </li>)
            {/* <Button className='botonEliminar mx-4 ' onClick={() => removeItem(item)} variant='outline-info'>Eliminar</Button></li>) */}
       }) }
        </div>
    )
}

export default Cart