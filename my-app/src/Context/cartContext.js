import React, { useState , useContext, useEffect} from 'react';
import Cart from '../Components/Cart/Cart';
import {Notyf} from 'notyf'
import 'notyf/notyf.min.css'
import Link from 'react-router-dom'
import { getFirestore } from '../firebase'
import firebase from 'firebase/app'


export const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {


    // ITEMS EN EL CARRITO
    const [cart, setCart] = useState(localStorage.getItem('Cart') ? JSON.parse(localStorage.getItem('Cart')) : [])

    // TOTAL CANTIDAD ITEMS EN CARRITO
    const [count, setCount] = useState(0)

    // PRECIO TOTAL DEL CARRITO 
    const [total , setTotal] = useState(0)


    const db = getFirestore()
    const orders = db.collection('orders')

    useEffect(()=> {
      localStorage.setItem('Cart', JSON.stringify(cart));
    },[cart])

    
     const isInCart=(id)=>{
        const existe = cart.some(i =>i.id === id);
          return existe;
        }


  //si ya esta realiza un filtro con un mapeo para solo sumar la cantidad nueva.
 
  const tomoCantidad =(item,cantidad)=>{
    const filtro = [...cart];
      filtro.forEach(i => {
        if(i.id === item.id){
          i.cantidad += cantidad
          }  
    })
    setCart(filtro);
  }


    const updateStock = (itemId, itemStock, cantidad) => {
      const docRef = db.collection('items').doc(itemId)

      const stockPrevio = itemStock

      const stockActual = cantidad

      docRef.update({stock: stockPrevio - stockActual})


    } 


    const updateStockDelete = (itemId, itemStock, cantidad) => {
      const docRef = db.collection('items').doc(itemId)

      const stockPrevio = itemStock - cantidad

      const stockActual = cantidad

      docRef.update({stock: stockPrevio + stockActual})

    } 




    const addToCart = (item, cantidad) => {
      const notyf = new Notyf()
        notyf.success({
            message: `<div style='color: white'> Agregaste: <br/> ${cantidad} ${item.nombre} ${item.varietal} al carrito </div> 
                        <br> 
                      <a href='/Cart' style='color: white'> Ver carrito </a> `,
            duration: 2000,
        })

        if(isInCart(item.id)){
            tomoCantidad(item,cantidad)
           
          }
          else{
              setCart([...cart, {...item, cantidad}]);
              
          }

          
    }


    const removeItem = (item) => {
      
      const notyf = new Notyf()
        notyf.error({
            message: `${item.nombre} Eliminado`,
            duration: 2000,
        })

       const itemRemove =  cart.filter(i => i.id !== item.id)
       const cuantosItems = cart.reduce((acc, p) => (acc += p.cantidad), 0) 


       updateStockDelete(item.id, item.stock, item.cantidad )

       setCart(itemRemove)
       setCount(cuantosItems)
       localStorage.setItem('Cart', JSON.stringify(cart))

    }
    

    const clearCart = (cart) => {
        setCart([])
        setTotal(0)

    }

    const cartCount = () => {
      const countCart = cart.reduce((acc, p) => (acc += p.cantidad), 0)
      setCount(countCart)
    }


     const precioTotal = () => {
       const precioTotal = cart.reduce((acc, p) => (acc += p.precio * p.cantidad), 0)
        setTotal(precioTotal)
      }


    return(
        <CartContext.Provider value={{updateStock, cart, setCart, addToCart, removeItem, clearCart, total, count, cartCount, precioTotal}} >
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider