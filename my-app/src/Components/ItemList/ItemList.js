import React from 'react';
import Item from './item';
import Spinner from 'react-bootstrap/Spinner'

const ItemList = ({productos}) => {
   
    return(
         <React.Fragment>
             <div className="d-flex justify-content-around flex-wrap mt-5 mx-5">
             {productos.length ? productos.map(item => <Item key={item.id} nombre={item.nombre} bodega={item.bodega} 
             varietal={item.varietal} precio={item.precio} stock={item.stock} img={item.img} id={item.id} />) : <Spinner animation="border" variant="info" /> }
             </div>
    </React.Fragment>
    )
}

export default ItemList