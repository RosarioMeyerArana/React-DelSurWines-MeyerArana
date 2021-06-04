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
                    <div className='mb-4'>No tienes una cuenta? Registrate</div>
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
            </div>
        </div>
    )
}

export default Login