import React, {useEffect, useState} from 'react'
import { useCartContext } from '../../Context/cartContext'
import {Button} from 'react-bootstrap'
import css from '../Cart/Cart.css';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import { getFirestore } from '../../firebase'
import firebase from 'firebase/app'
import Table from 'react-bootstrap/Table'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { Link } from 'react-router-dom';

export const CartList = () => {

    const [orderId, setOrderId] = useState('')
    const [order, setOrder] = useState('')

    const { cart, clearCart, total, removeItem, precioTotal} = useCartContext()
    
    precioTotal()

    const db = getFirestore()
    const orders = db.collection('orders')


    return (
       <>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Nombre</th>
                <th>Bodega</th>
                <th>Varietal</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Total por item</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
            {
            cart.map((item) => {
                        return(
                            <tr key={item.id}>
                        <td>{item.nombre}</td>
                        <td>{item.bodega}</td>
                        <td>{item.varietal}</td>
                        <td>{item.cantidad}
                        </td>
                        <td>{item.precio}</td>
                        <td>{item.cantidad * item.precio}</td>
                        <td>
                        <EditOutlinedIcon/>
                        <DeleteOutlinedIcon className='botonEliminar' onClick={() => removeItem(item)} /> 
                        </td>
                        </tr>
                        )
                        }
                        )
                    }
            </tbody>
        </Table>

            <hr/>
            <div className='total text-left'>
                <p>Subtotal: ${total} </p>
                <Link to={'/checkout'}>
                    <Button variant='outline-info' style={{marginRight: '1.5rem'}}>Finalizar Compra</Button> 
                </Link>
                <Button variant='outline-danger' onClick={ () => clearCart()}>Vaciar Carrito</Button>
            
            { orderId &&
                <div className='mt-4'> Tu pedido fue confirmado! El id de tu compra es: {orderId} </div>
            }
                
            </div>
    </> 
    )
}


