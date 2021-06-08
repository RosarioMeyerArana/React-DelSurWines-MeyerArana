import React, { useEffect } from 'react'
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded'
import {useCartContext} from '../../Context/cartContext'
import css from './CartWidget.css'

const CartWidget = () => {

    const {count, cartCount} = useCartContext()

    localStorage.cart && JSON.parse(localStorage.cart)

    cartCount()

    return(
        <div className='d-flex justify-content-start'>
            <ShoppingCartRoundedIcon className='cartWidget' style={{color:'#46515C'}}/>
            {count === 0 ? console.log(count) : <span className='counterWidget mx-1'>{count}</span>}
        </div>
    )

}

export default CartWidget