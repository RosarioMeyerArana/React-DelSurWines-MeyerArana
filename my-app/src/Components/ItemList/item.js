import React, {useState, useEffect} from 'react';
import {Card, Button} from 'react-bootstrap';
// import Counter from '../Counter/Counter';
import css from '../ItemList/Item.css';
import {Link} from 'react-router-dom'


const Item = ({nombre, bodega, varietal, precio, stock, img, id}) => {

    return(
        <Card className="shadow mt-3 cardItem" style={{ width: '18rem' }}>
            <Link to={`/${varietal}/${id}`} >
                <Card.Img variant="top" src={img} />
            </Link>   
                <Card.Body>
                    <Card.Text className="card-bodega">{bodega.toUpperCase()}</Card.Text>
                    <Card.Title className="card-nombre">{nombre}</Card.Title>
                    <Card.Text className="card-varietal">{varietal}</Card.Text>  

                    <Card.Text>${precio}</Card.Text>              
                    <Button variant="primary">Agregar Al Carrito</Button>
                </Card.Body> 
        </Card>
    )
}

export default Item