import React, {useState, useEffect} from 'react'
import ItemList from '../../Components/ItemList/ItemList'
import {getFirestore} from '../../firebase'

export const TodosContainer = () => {

    const [todos, setTodos] = useState({})
    const [favoritos, setFavoritos] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(()=> { 
        setLoading(true)

        const db = getFirestore()
        const itemsCollection = db.collection('items')

        itemsCollection.get()
        .then((querySnapShot)=>{
            const documentos = querySnapShot.docs.map((doc)=> {return { id: doc.id, ...doc.data() }})
            const filtroFavoritos = documentos.filter((item) => item.favorito == true) 
            setFavoritos(filtroFavoritos)
            setTodos(documentos)
        })
        .catch((err) => console.log('ERROR')) 
        .finally(() => setLoading(false))       

        },[favoritos, todos])

    return (
        <div>
            <ItemList productos={favoritos} titulo='Los más vendidos'/>
            <ItemList className='mt-5' productos={todos} titulo='Todos'/>
        </div>
    )
}