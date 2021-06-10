import React, { useContext } from 'react'
import Item from './item'
import Spinner from 'react-bootstrap/Spinner'
import {Card} from 'react-bootstrap'

const ItemList = ({productos, titulo}) => {

    
    return(
         <React.Fragment>
            <h1 className='text-left' style={{color: 'blueviolet', marginLeft:'6rem', marginTop:'6rem'}}>{titulo}</h1>
             <div style={{width:'90%', marginTop:'1rem', marginBottom:'5rem'}} className="d-flex justify-content-start container flex-wrap">
             {productos.length ? 
             productos.map(item => 
                <Card className="shadow mt-3 cardItem" style={{ width: '16rem', marginRight: '1.3rem', paddingTop: '.5rem' }}>
                    <Item key={item.id} nombre={item.nombre} bodega={item.bodega} 
                    varietal={item.varietal} precio={item.precio} image={item.image} id={item.id} /> 
                </Card>)
             : <Spinner animation="border" variant="info" /> }
             </div>
        </React.Fragment>
    )
}

export default ItemList