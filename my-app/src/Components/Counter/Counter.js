import React from 'react';
import css from '../Counter/Counter.css';
import {Button} from 'react-bootstrap';

const Counter = ({enStock, resta, suma, cantidad, onAdd}) => {

    return(
        <React.Fragment>
            <div className='text-center'>
                <p className="enStock">{enStock} en stock</p>  
                <div className="container-counter d-flex justify-content-center align-items-baseline">
                    <Button variant="outline-info" className="btn-modifica" onClick={resta} disabled={cantidad === 0}>-</Button>
                    <p className="cantidad">{cantidad}</p>
                    <Button variant="outline-info" className="btn-modifica" onClick={suma} disabled={enStock === 0}>+</Button>
                </div>
                <Button variant="outline-info" disabled={cantidad === 0} onClick={() => onAdd(cantidad)}>
                Agregar al Carrito
                </Button>
            </div>
        </React.Fragment>
    )

}

export default Counter