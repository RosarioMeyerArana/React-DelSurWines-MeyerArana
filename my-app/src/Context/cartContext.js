import React, { useState , useContext, useEffect} from 'react';
import Cart from '../Components/Cart/Cart';


export const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext);


export const CartProvider = ({children}) => {


    // ITEMS EN EL CARRITO
    const [cart, setCart] = useState([])

    const [show, setShow] = useState(false)


    // PRECIO TOTAL DEL CARRITO 
    const [total , setTotal] = useState(0)

    useEffect(()=> {
        console.log(cart)
    },[cart])


    //  const exists = cart.find(i => i.nombre == item.nombre)

    //  console.log(exists)
    //    if(exists){
    //         exists.cantidad += cantidad
    //     //   let indexItem = cart.findIndex(i => i.nombre == i.nombre)
    //     //   let sumoCant = cart[indexItem].cantidad + cantidad
    //        setCart(...cart)
    //        console.log(cart)

    
     //si el producto esta o no en el carrito devuelve true || false.
  
  
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


 //agrega el producto al carrito y si ya esta, manda la info a cantidad.
    const addToCart = (item, cantidad) => {

        if(isInCart(item.id)){
            tomoCantidad(item,cantidad)
            console.log('ifis ' + item)
          }
          else{
              setCart([...cart, {...item, cantidad}]);
              console.log(cantidad)
          }
        
       setShow(!show)
    }


    const removeItem = (item) => {
       const itemRemove =  cart.filter(i => i.id !== item.id)
       setCart(itemRemove)
    }
    

    const clearCart = () => {
        setCart([])
        setTotal(0)
    }


    const handleShow = () => {
        setShow(!show)
    }

    return(
        <CartContext.Provider value={{cart, addToCart, removeItem, clearCart, total}} >
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider