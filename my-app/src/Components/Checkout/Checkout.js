import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import { useCartContext } from '../../Context/cartContext'
import css from '../Checkout/checkout.css'
import { getFirestore } from '../../firebase'
import firebase from 'firebase/app'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'


const Checkout = () => {

        const { setCart, cart, total, clearCart, batchUpdateStock} = useCartContext()
        const [validated, setValidated] = useState(false);
        const [user, setUser] = useState({nombre: '', apellido: '', mail: '', direccion:'', localidad:'', ciudad:'' })
        const [datosOrder, setDatosOrder] = useState({})
        const [orderId, setOrderId] = useState('')
        const [loading, setLoading] = useState(false)


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
           setLoading(true)
           setDatosOrder(order)
    
           if(order.cart){
           orders.add(order)
           .then ((res)=>{
               setOrderId(res.id)

           })
           .catch((err)=>{ console.log('error: ' ,err)})
           .finally(()=>{
               setLoading(false)
               clearCart()
                }
               )
            }
       }


       
       


       return (
            <Container >
               <div className='d-flex justify-content-around' > 
               <Form noValidate validated={validated} className='formCheckout col-6' onSubmit={handleSubmit} style={{marginTop: '4rem', textAlign: 'left'}}>
                    <div className='mt-2 mb-4 ultimoPaso'>Estás a un paso de finalizar tu compra!</div>
                    <div className='ingresoDatos mb-4'>Por favor ingresa tus datos y dirección de envío:</div>
                    <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                        required
                        type="text"
                        name="nombre"
                        onChange={datosUser}
                        placeholder="Nombre"
                        />
                        <Form.Control.Feedback></Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                        required
                        name="apellido"
                        type="text"
                        onChange={datosUser}
                        placeholder="Apellido"
                        />
                        <Form.Control.Feedback></Form.Control.Feedback>
                    </Form.Group>
                    </Form.Row>
                    <Form.Group as={Col} md="12" style={{paddingRight:'0', paddingLeft:'0'}} controlId="validationCustom03">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                        type="email" 
                        name='mail'
                        onChange={datosUser}
                        placeholder="Email" required />
                    </Form.Group>
                    <Form.Row>
                    <Form.Group as={Col} md="12" controlId="validationCustom04">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control 
                        type="text" 
                        name='direccion'
                        onChange={datosUser}
                        placeholder="Dirección" required />
                        <Form.Control.Feedback type="invalid">
                            Escribe tu dirección
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom05">
                        <Form.Label>Localidad</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="localidad"
                        onChange={datosUser}
                        placeholder="Localidad" required />
                        <Form.Control.Feedback type="invalid">
                        
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom06">
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="ciudad"
                        onChange={datosUser}
                        placeholder="Ciudad" required />
                        <Form.Control.Feedback type="invalid">
                    
                        </Form.Control.Feedback>
                    </Form.Group>
                    </Form.Row>
                    <Button variant='outline-info' onClick={handleCompra} className='mt-3' type="submit" >Confirmar compra</Button>
                </Form>
                {
                orderId ? 
                <div className='resumenPedidoId col-3 text-left' style={{marginTop: '7rem', height: '30%'}}> 
                Tu pedido se realizó con éxito! 
                <br/>El id de la compra es : {orderId} 
                <hr/> {datosOrder.buyer.nombre} 
                <br/> {datosOrder.buyer.apellido} 
                <br/> {datosOrder.buyer.mail} 
                <br/> {datosOrder.buyer.direccion} 
                <br/> {datosOrder.buyer.localidad}</div> 
                : 
                <div className='resumenPedido col-3 text-left' style={{marginTop: '7rem', height: '30%'}}>
                Resumen de tu pedido:
                <hr/>
                    {
                    cart && cart.map((item) => <li className='liResumen' key=''> {item.nombre} - {item.varietal} x {item.cantidad} </li>)
                    }
                   <p className='subtotal'> Subtotal: ${total} </p>
                </div>
                }
            </div>
        </Container>
    )
}

export default Checkout
