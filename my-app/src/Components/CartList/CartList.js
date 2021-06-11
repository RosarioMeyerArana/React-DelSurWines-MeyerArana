import React from 'react'
import { useCartContext } from '../../Context/cartContext'
import {Button} from 'react-bootstrap'
import css from '../Cart/Cart.css';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'

export const CartList = () => {

    const { cart, clearCart, total, removeItem, precioTotal} = useCartContext()
    
    precioTotal()

    return (
       <React.Fragment>
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
                        <td>{item.cantidad}</td>
                        <td>{item.precio}</td>
                        <td>{item.cantidad * item.precio}</td>
                        <td>
                        <DeleteOutlinedIcon onClick={() => removeItem(item)} /> 
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
            
            </div>
    </React.Fragment> 
    )
}


