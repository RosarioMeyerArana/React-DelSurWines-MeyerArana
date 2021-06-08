import React from 'react';
import css from '../ItemDetail/ItemDetail.css'

const ItemDetail = ({nombre,bodega,varietal,precio,notas}) =>{

    return(
        <div style={{marginTop: '5rem', marginBottom: '3rem'}}>
            <div className='text-center'>
                <p className='detailBodega'>{bodega}</p>
                <h1 className='detailNombre'>{nombre}</h1>
                <p className='detailVarietal'>{varietal}</p>
                <p className='detailPrecio'>${precio}</p>
                <hr/>
                <p className='detailNotas mt-2'>{notas}</p>
            </div>
        </div>
    )

}

export default ItemDetail