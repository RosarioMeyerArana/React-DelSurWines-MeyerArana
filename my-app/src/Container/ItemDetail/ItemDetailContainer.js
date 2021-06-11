import React, {useState, useEffect} from 'react';
import ItemDetail from '../../Components/ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'
import {useCartContext} from '../../Context/cartContext'
import CounterContainer from '../../Container/Counter/CounterContainer'
import {getFirestore} from '../../firebase'


const ItemDetailContainer = () => {
    
    const [item, setItem] = useState({})

    const {addToCart, updateStock} = useCartContext()


   const onAdd = (cantidad) => {
       addToCart(item,cantidad)
       updateStock(item.id, item.stock,cantidad)
    }

    const {id} = useParams() 

    useEffect(()=> { 

        const db = getFirestore()
        const itemsCollection = db.collection('items')

        itemsCollection.get()
        .then((querySnapShot)=>{
            const documentos = querySnapShot.docs.map((doc)=> {return { id: doc.id, ...doc.data() }})
            const filtroId = id ? documentos.filter((item) => item.id === id) : documentos
          
          setItem(filtroId[0])

        })
        .catch((err) => console.log('ERROR')) 
        .finally(() => console.log('terminé detail'))       
        },[id])


    return (
        <div>
            {item ? 
            <div className='d-flex justify-content-center row' style={{marginBottom: '5rem'}}>
                <div className='col-5'><img className="detailImg" style={{width: '90%', marginTop:'5rem'}} src={item.image}/></div>
                    <div className='col-4 mx-5' >
                            <ItemDetail  nombre={item.nombre} bodega={item.bodega} 
                        varietal={item.varietal} precio={item.precio} notas={item.notas} onAdd={onAdd} />
                            <CounterContainer onAdd={onAdd} stock={item.stock} />
                    </div>
             </div> 
             : 
             < Spinner animation="border" variant="info" /> }
        </div>
    )
}

export default ItemDetailContainer