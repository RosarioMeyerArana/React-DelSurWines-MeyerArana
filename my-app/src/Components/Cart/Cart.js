import React from 'react'
import {useCartContext} from '../../Context/cartContext'
import {Link} from 'react-router-dom'
// import {Button} from 'react-bootstrap'
import css from '../Cart/Cart.css';
//import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { CartList } from '../CartList/CartList';


const Cart = () => {

    const {cart} = useCartContext()


    return(
        <div className='mt-5 container'>
            <h1 className='text-left mb-4'>Mi Carrito de Compras</h1>
            {cart.length == 0 ? <div className='mt-5 text-left'>Tu carrito está vacío, ve a la <Link to='/'> tienda</Link> y empieza a comprar</div>
            :
            <CartList></CartList> 
            } 
        </div>
        
        //     cart.map((item) => {
        //     return (
        //     <li className='itemCarrito text-left mb-5' key={item.id}> {item.nombre} - {item.varietal} x {item.cantidad} 
        //     <DeleteOutlinedIcon className='botonEliminar mx-4 ' onClick={() => removeItem(item)} /> </li>)
        //     }
        //     )
        //     }
        // <Button variant='outline-danger' onClick={ () => clearCart()}>Limpiar Carrito</Button>    
        
    )
}

export default Cart