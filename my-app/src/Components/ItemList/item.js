import React, {useState, useEffect} from 'react';
import {Card, Button} from 'react-bootstrap';
import CounterContainer from '../../Container/Counter/CounterContainer';
import css from '../ItemList/Item.css';
import {Link} from 'react-router-dom'


const Item = ({nombre, bodega, varietal, precio, image, id}) => {

    return(
        <React.Fragment >
            <Link to={`/${varietal}/${id}`}>
                <Card.Img variant="top" src={image} className='card' />
            </Link>   
                <Card.Body>
                    <Card.Text className="card-bodega">{bodega.toUpperCase()}</Card.Text>
                    <Card.Title className="card-nombre">{nombre}</Card.Title>
                    <Card.Text className="card-varietal">{varietal}</Card.Text>  
                    <Card.Text>${precio}</Card.Text>
                </Card.Body> 
        </React.Fragment>
    )
}

export default Item