import React from 'react'
import Item from './item'
import Spinner from 'react-bootstrap/Spinner'
import {Card} from 'react-bootstrap'
import css from './Item.css'

const ItemList = ({productos, titulo, clase}) => {


    return(
        <React.Fragment>
         <div className={clase}>
            <h1 className='text-left' style={{ marginLeft:'6rem', marginTop:'6rem'}}>{titulo}</h1>
             <div style={{width:'90%', marginTop:'1rem', marginBottom:'5rem'}} className="d-flex justify-content-start container flex-wrap">
             {productos.length ? 
             productos.map(item => 
                <Card key={item.id} className="shadow mt-3 cardItem" style={{ color: 'black',  width: '16rem', marginRight: '1.3rem', paddingTop: '.5rem' }}>
                    <Item  nombre={item.nombre} bodega={item.bodega} 
                    varietal={item.varietal} precio={item.precio} image={item.image} id={item.id} /> 
                </Card>)
             : <Spinner animation="border" variant="info" /> }
             </div>
        </div>
        </React.Fragment>
    )
}

export default ItemList