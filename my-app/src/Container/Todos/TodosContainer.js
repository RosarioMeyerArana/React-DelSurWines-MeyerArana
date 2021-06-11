import React, {useState, useEffect} from 'react'
import ItemList from '../../Components/ItemList/ItemList'
import {getFirestore} from '../../firebase'

export const TodosContainer = () => {

    const [todos, setTodos] = useState({})
    const [favoritos, setFavoritos] = useState({})

    useEffect(()=> { 

        const db = getFirestore()
        const itemsCollection = db.collection('items')

        itemsCollection.get()
        .then((querySnapShot)=>{
            const documentos = querySnapShot.docs.map((doc)=> {return { id: doc.id, ...doc.data() }})
            const filtroFavoritos = documentos.filter((item) => item.favorito === true) 
            setFavoritos(filtroFavoritos)
            setTodos(documentos)
        })
        .catch((err) => console.log('ERROR')) 
        .finally(() => console.log('terminé todos'))       

        },[])

    return (
        <React.Fragment>
            <ItemList productos={favoritos} titulo='Los más vendidos' clase='favs'/>
            <ItemList className='mt-5' productos={todos} titulo='Todos' clase='todos'/>
       </React.Fragment>
    )
}