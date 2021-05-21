import React from 'react'
import { useCartContext } from '../../Context/cartContext'
import {Button} from 'react-bootstrap'
import css from '../Cart/Cart.css';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

export const CartList = () => {

    const { cart, clearCart, total, removeItem, precioTotal} = useCartContext()
    
    precioTotal()

    return (
       <>
            {
            cart.map((item) => {
            return(
            <li className='itemCarrito text-left mt-2 mb-3' key={item.id}> {item.nombre} - {item.varietal} x {item.cantidad} 
            <DeleteOutlinedIcon className='botonEliminar mx-4' onClick={() => removeItem(item)} /> 
            </li>)
            }
            )
            }
            <hr/>
            <div className='total text-left'>
                <p>Subtotal: ${total} </p>
                <Button variant='outline-info' style={{marginRight: '1.5rem'}} path={'/checkout'}>Finalizar Compra</Button> 
                <Button variant='outline-danger' onClick={ () => clearCart()}>Vaciar Carrito</Button>
            </div>
    </> 
    )
}
