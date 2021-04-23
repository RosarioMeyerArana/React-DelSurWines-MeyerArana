import React, {useState, useEffect} from 'react';
import {Card, Button} from 'react-bootstrap';
import Counter from '../Counter/Counter';
import css from '../ItemList/Item.css';


const Item = ({nombre, bodega, varietal, precio, stock, img}) => {


    return(
        <Card className="shadow mt-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Text className="card-bodega">{bodega.toUpperCase()}</Card.Text>
                <Card.Title className="card-nombre">{nombre}</Card.Title>
                <Card.Text className="card-varietal">{varietal}</Card.Text>  

                <Card.Text>${precio}</Card.Text>              
                <Counter stock={stock}/>
                <Button variant="primary">Agregar Al Carrito</Button>
            </Card.Body>
        </Card>
    )
}

export default Item