import React from 'react'
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded'
import {useCartContext} from '../../Context/cartContext'
import css from './CartWidget.css'

const CartWidget = () => {

    const {count} = useCartContext()

    return(
        <div className='d-flex justify-content-start'>
            <ShoppingCartRoundedIcon style={{color:'#46515C'}}/>
            {count === 0 ? console.log(count) : <div className='counterWidget mx-1'>{count}</div>}
        </div>
    )

}

export default CartWidget