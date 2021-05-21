import React from 'react';
import css from '../ItemDetail/ItemDetail.css'

const ItemDetail = ({nombre,bodega,varietal,precio,notas}) =>{

    return(
        <div className="container d-flex justify-content-center mt-5 row">
            {/* <div className='col-6'><img className="detailImg" src={img}/></div> */}
            <div className='col-5 text-center'>
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