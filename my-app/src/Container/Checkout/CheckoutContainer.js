import React from 'react'
import Checkout from '../../Components/Checkout/Checkout'

export const CheckoutContainer = () => {


    const { cart, total, clearCart, precioTotal} = useCartContext()
    const [validated, setValidated] = useState(false);
    const [user, setUser] = useState({nombre: '', apellido: '', mail: '', direccion:'', localidad:'', ciudad:'' })
    const [datosOrder, setDatosOrder] = useState({})
    const [orderId, setOrderId] = useState('')


    const db = getFirestore()
    const orders = db.collection('orders')

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  

    const datosUser = (event) => {
        event.preventDefault()
        setUser({...user , [event.target.name]: event.target.value})
    }

    const handleCompra = (event) => {
        event.preventDefault()

        const order = {
           date: firebase.firestore.Timestamp.fromDate(new Date()),
           buyer: user ,
           cart,
           total
       }
       setDatosOrder(order)

       if(order.cart){
       orders.add(order)
       .then ((res)=>{
           setOrderId(res.id)

       })
       .catch((err)=>{ console.log('error: ' ,err)})
       .finally(()=>{
           clearCart()
            }
           )
        }
   }


    return (
        <div>
            <Checkout datosOrder={datosOrder} handleSubmit={handleSubmit()} datosUser={datosUser} handleCompra={handleCompra()} orderId={orderId} />
        </div>
    )
}
