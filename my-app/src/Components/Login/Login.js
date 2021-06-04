import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const Login = () => {
    return (
        <div style={{marginTop: '7rem'}}>
            <div className='d-flex justify-content-around'>
                <Form style={{width: '30%'}} className='text-left'>
                    <div className='mb-4'>Iniciar Sesión</div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Tu Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Recordarme" />
                    </Form.Group>
                    <Button variant="outline-info" type="submit">
                        Acceder
                    </Button>
                </Form>
                <Form style={{width: '30%'}} className='text-left'>
                <Form noValidate className='formCheckout col-6' style={{marginTop: '4rem', textAlign: 'left'}}>
                    <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                        required
                        type="text"
                        name="nombre"
                        
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
                        
                        placeholder="Email" required />
                    </Form.Group>
                    <Form.Row>
                    <Form.Group as={Col} md="12" controlId="validationCustom04">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control 
                        type="text" 
                        name='direccion'
                        
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
                        
                        placeholder="Localidad" required />
                        <Form.Control.Feedback type="invalid">
                        
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom06">
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="ciudad"
                        
                        placeholder="Ciudad" required />
                        <Form.Control.Feedback type="invalid">
                    
                        </Form.Control.Feedback>
                    </Form.Group>
                    </Form.Row>
                    <Button variant='outline-info' className='mt-3' type="submit" >Confirmar compra</Button>
                </Form>
                </Form>
            </div>
        </div>
    )
}

export default Login