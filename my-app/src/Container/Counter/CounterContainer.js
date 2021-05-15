import React, {useEffect, useState} from 'react'
import Counter from '../../Components/Counter/Counter'
import { useCartContext } from '../../Context/cartContext'



const CounterContainer = ({stock, onAdd}) => {

    const [cantidad , setCantidad] = useState(0)
    const [enStock, setEnStock] = useState(0)


    useEffect(()=>{
        setEnStock(stock)
    }, [stock])


    const suma = () => {
        setCantidad(cantidad + 1)
        setEnStock(enStock - 1)
    };

    const resta = () => {
        setCantidad(cantidad - 1)
        setEnStock(enStock + 1)
    };


    return(
        <Counter onAdd={onAdd} cantidad={cantidad} enStock={enStock} suma={suma} resta={resta} />
    )
}

export default CounterContainer