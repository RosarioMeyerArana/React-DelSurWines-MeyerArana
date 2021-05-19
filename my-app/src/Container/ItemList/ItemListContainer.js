import React, {useState, useEffect, useContext} from 'react';
import ItemList from '../../Components/ItemList/ItemList';
import {useParams} from 'react-router-dom'
import {CartContext} from '../../Context/cartContext'
import {getFirestore} from '../../firebase'
import Spinner from 'react-bootstrap/Spinner'


const ItemListContainer = () => {
    const [item, setItem] = useState([])

    const [loading, setLoading] = useState(false)

    const {varietal} = useParams()

    const {addToCart} = useContext(CartContext)

    useEffect(()=> { 
        setLoading(true)

        const db = getFirestore()
        const itemsCollection = db.collection('items')

        itemsCollection.get()
        .then((querySnapShot)=>{
            querySnapShot.size === 0 ? console.log('no hay items') : console.log(`hay ${querySnapShot.size} items`)
            const documentos = querySnapShot.docs.map((doc)=> {return { id: doc.id, ...doc.data() }})
           const filtroVarietal = varietal ? documentos.filter((item) => item.varietal == varietal) : documentos
          console.log(documentos)  
          setItem(filtroVarietal)
        })
        .catch((err) => console.log('ERROR')) 
        .finally(() => setLoading(false))       
            
            
            // let listaItem = new Promise((resolve, reject) => {

            //     setTimeout(()=>{
            //        resolve(varietal ? wines.filter((item) => item.varietal == varietal) : wines)
            //     },2000)


            // })

            // listaItem.then((res)=>{
            //     setVinos(res)
            // })

            // listaItem.catch(() => console.log("OCURRIO UN ERROR"))

        },[varietal])


    return(
        <div>
            {loading ? <Spinner animation="border" variant="info" /> : <ItemList productos={item}/> }
        </div>
        
    )
    
}

export default ItemListContainer