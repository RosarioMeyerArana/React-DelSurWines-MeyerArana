import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import {getFirestore} from '../../firebase'

export const Todos = () => {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(()=> { 
        setLoading(true)

        const db = getFirestore()
        const itemsCollection = db.collection('items')

        itemsCollection.get()
        .then((querySnapShot)=>{
            querySnapShot.size === 0 ? console.log('no hay items') : console.log(`hay ${querySnapShot.size} items`)
            const documentos = querySnapShot.docs.map((doc)=> {return { id: doc.id, ...doc.data() }})
            setItem(documentos)
        })
        .catch((err) => console.log('ERROR')) 
        .finally(() => setLoading(false))       

        },[item])

    return (
        <div>
            <ItemList productos={item} titulo='Todos nuestros vinos'/>
        </div>
    )
}
