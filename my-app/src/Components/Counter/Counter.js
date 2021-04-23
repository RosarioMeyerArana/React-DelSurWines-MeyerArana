import React, {useState} from 'react';
import css from '../Counter/Counter.css';

const Counter = ({stock}) => {
    const [cantidad , setCantidad] = useState(0)
    const [enStock, setEnStock] = useState(stock)


    const suma = () => {
        setCantidad(cantidad + 1)
        setEnStock(enStock - 1)
    };

    const resta = () => {
        setCantidad(cantidad - 1)
        setEnStock(enStock + 1)
    };

    return(
        <React.Fragment>
            <p className="enStock">{enStock} en stock</p>  
            <div className="container-counter d-flex justify-content-center align-items-baseline">
                <button className="btn-modifica btn-outline-info btn" onClick={resta} disabled={cantidad === 0}>-</button>
                <p className="cantidad">{cantidad}</p>
                <button className="btn-modifica btn-outline-info btn" onClick={suma} disabled={enStock === 0}>+</button>
            </div>
        </React.Fragment>
    )

}

export default Counter