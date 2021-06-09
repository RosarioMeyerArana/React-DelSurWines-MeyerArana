import React, {useEffect, useState} from 'react'
import Item from '../ItemList/ItemList'
import {getFirestore} from '../../firebase'
import ItemList from '../ItemList/ItemList'

export const Favoritos = () => {

    const [item, setItem] = useState({})

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = db.collection('items')

        itemsCollection.get()
        .then((querySnapShot)=>{
            querySnapShot.size === 0 ? console.log('no hay items') : console.log(`hay ${querySnapShot.size} items`)
            const documentos = querySnapShot.docs.map((doc)=> {return { id: doc.id, ...doc.data() }})
           const filtroFavoritos = documentos.filter((item) => item.favorito == true) 
            setItem(filtroFavoritos)
        })
        .catch((err) => console.log('ERROR')) 
        .finally(() => console.log('hola') )      
    
    }, [])

    return (
        <div style={{marginBottom: '7rem', marginTop:'6rem'}}>
            {item && <ItemList productos={item} titulo='Los más vendidos'/>}
        </div>
    )
}
