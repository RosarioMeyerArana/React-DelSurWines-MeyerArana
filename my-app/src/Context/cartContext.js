import React, { useState , useContext, useEffect} from 'react';
import Cart from '../Components/Cart/Cart';
import {Notyf} from 'notyf'
import 'notyf/notyf.min.css'



export const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {


    // ITEMS EN EL CARRITO
    const [cart, setCart] = useState([])

    // const [show, setShow] = useState(false)

    // TOTAL CANTIDAD ITEMS EN CARRITO
    const [count, setCount] = useState(0)

    // PRECIO TOTAL DEL CARRITO 
    const [total , setTotal] = useState(0)


    // const [userInfo, setUserInfo] = useState({
    //   name: "",
    //   mail: "",
    //   confirm: "",
    //   phone: "",
    // });

    // const products = items.map((item) => ({
    //   title: item.name,
    //   price: item.price,
    //   quantity: item.amount,
    //   id: item.id,
    // }));

    // function CreateOrder() {
    //   const db = getFirestore();
    //   const orders = db.collection("orders");
  
    //   orders
    //     .add(order)
    //     .then(({ id }) => {
    //       alert(`Your order n° ${id} is sucefully created`);
    //       console.log(id);
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     })
    //     .finally(clean);
    // }
    // let query = categoryId ? collection.where("categoryId", "==", categoryId) : collection



    useEffect(()=> {
      localStorage.setItem('Items', JSON.stringify(cart));
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
      const notyf = new Notyf()
        notyf.success({
            message: `<p style='color: white'> Agregaste ${cantidad} ${item.nombre} ${item.varietal} al carrito <p> <br> <a href='/cart' style='color: white'> Ver carrito </a> `,
            duration: 2000,
        })

        if(isInCart(item.id)){
            tomoCantidad(item,cantidad)

          }
          else{
              setCart([...cart, {...item, cantidad}]);
              console.log(cantidad)
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

       setCart(itemRemove)
       setCount(cuantosItems)
    }
    

    const clearCart = () => {
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
        <CartContext.Provider value={{cart, addToCart, removeItem, clearCart, total, count, cartCount, precioTotal}} >
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider