import React, {useState, useEffect} from 'react';
import ItemList from '../../Components/ItemList/ItemList';
import {useParams} from 'react-router-dom'
import {getFirestore} from '../../firebase'
import Spinner from 'react-bootstrap/Spinner'


const ItemListContainer = () => {
    const [item, setItem] = useState([])

    const [loading, setLoading] = useState(false)

    const {varietal} = useParams()


    useEffect(()=> { 
        setLoading(true)

        const db = getFirestore()
        const itemsCollection = db.collection('items')

        itemsCollection.get()
        .then((querySnapShot)=>{
            const documentos = querySnapShot.docs.map((doc)=> {return { id: doc.id, ...doc.data() }})
            const filtroVarietal = varietal && documentos.filter((item) => item.varietal == varietal)
            setItem(filtroVarietal)
        })
        .catch((err) => console.log('ERROR')) 
        .finally(() => setLoading(false))       

        },[varietal])


    return(
        <div>
            {loading ? <div className='loader text-center' style={{marginTop: '20%', height:'100vh'}}> <Spinner animation="border" variant="info"/> </div> 
            : 
            <ItemList productos={item} titulo={varietal} clase='todos'/> }
        </div>
        
    )
    
}

export default ItemListContainer