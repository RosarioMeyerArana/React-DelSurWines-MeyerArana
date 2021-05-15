import React, { useContext } from 'react'
import Item from './item'
import Spinner from 'react-bootstrap/Spinner'
import {Card, Button} from 'react-bootstrap'
import CounterContainer from '../../Container/Counter/CounterContainer'
import {CartContext} from '../../Context/cartContext'

const ItemList = ({productos}) => {

    const {addToCart} = useContext(CartContext)

   
    return(
         <React.Fragment>
             <div className="d-flex justify-content-start container flex-wrap mt-5 mx-5">
             {productos.length ? 
             productos.map(item => 
                <Card className="shadow mt-3 cardItem" style={{ width: '16rem', marginRight: '1.3rem', paddingTop: '.5rem' }}>
                    <Item key={item.id} nombre={item.nombre} bodega={item.bodega} 
                    varietal={item.varietal} precio={item.precio} stock={item.stock} img={item.img} id={item.id} /> 
                </Card>)
             : <Spinner animation="border" variant="info" /> }
             </div>
        </React.Fragment>
    )
}

export default ItemList