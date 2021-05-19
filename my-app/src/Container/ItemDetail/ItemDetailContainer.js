import React, {useState, useEffect} from 'react';
import ItemDetail from '../../Components/ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'
import {useCartContext} from '../../Context/cartContext'
import CounterContainer from '../../Container/Counter/CounterContainer'
import AlertCart from '../../Components/Alert/Alert'
import {getFirestore} from '../../firebase'


const ItemDetailContainer = () => {
    
    const [item, setItem] = useState({})

    const [loading, setLoading] = useState(false)

    const {addToCart, show} = useCartContext()

    const [cantidad , setCantidad] = useState(0)
    const [enStock, setEnStock] = useState(0)


   const onAdd = (cantidad) => {
       addToCart(item,cantidad)
    }


    const {id} = useParams() 

    const {varietal} = useParams()

    useEffect(()=> { 
        setLoading(true)

        const db = getFirestore()
        const itemsCollection = db.collection('items')

        itemsCollection.get()
        .then((querySnapShot)=>{
            querySnapShot.size === 0 ? console.log('no hay items') : console.log(`hay ${querySnapShot.size} items`)
            const documentos = querySnapShot.docs.map((doc)=> {return { id: doc.id, ...doc.data() }})
           const filtroId = id ? documentos.filter((item) => item.id == id) : documentos
          
          setItem(filtroId[0])
        })
        .catch((err) => console.log('ERROR')) 
        .finally(() => setLoading(false))       
        },[id])



    return (
        <div>
            {item ? 
            <div className='d-flex justify-content-center row container'>
                <div className='col-4 mt-5'><img className="detailImg" src={item.img}/></div>
                    <div className='col-6'>
                            <ItemDetail  nombre={item.nombre} bodega={item.bodega} 
                        varietal={item.varietal} precio={item.precio} stock={item.stock} img={item.img} notas={item.notas} />
                            <CounterContainer onAdd={onAdd} stock={item.stock} />
                            {/* <Button onClick={agregarCarrito} variant="info" className="mb-4">Agregar al Carrito</Button> */}
                            {/* <Button variant="outlined" color="info">
                                Agregar al Carrito
                            </Button> */}
                        {show && <AlertCart cantidad={cantidad} nombre={item.nombre} />}
                    </div>
             </div> 
             : 
             < Spinner animation="border" variant="info" /> }
        </div>
    )
}

export default ItemDetailContainer