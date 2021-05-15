import React, {useState, useEffect} from 'react';
import ItemDetail from '../../Components/ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'
import {useCartContext} from '../../Context/cartContext'
import CounterContainer from '../../Container/Counter/CounterContainer'
import {Button} from 'react-bootstrap'
import AlertCart from '../../Components/Alert/Alert'


const ItemDetailContainer = () => {
    
    const [item, setItem] = useState({})

    const {addToCart, show} = useCartContext()

    const [cantidad , setCantidad] = useState(0)
    const [enStock, setEnStock] = useState(0)


   const onAdd = (cantidad) => {
       addToCart(item,cantidad)
       console.log(show)
    }

    //  const agregarCarrito = () => {
    //      addToCart(item, cantidad)
    //      console.log(cantidad)
         
    //  }

    const {id} = useParams() 

    const {varietal} = useParams()

    useEffect(() => {

    console.log(cantidad)
    const productos = [{ id: 1,
        nombre: "Sapo de Otro Pozo",
        bodega: "Mosquita Muerta",
        varietal: "Blend",
        precio: 1200,
        stock: 10,
        img:'https://i.postimg.cc/kXcB5nnK/1.png',
        notas: 'Rubí profundo con tonos violáceos brillantes. Despliega un compleja aromática frutal que recuerda a ciruelas, cerezas, moras y los arándanos junto a tonos especiados y tostado. '
    },
    { id: 2,
    nombre: "Estiba de Familia",
    bodega: "Aristides",
    varietal: "Bonarda",
    precio: 500,
    stock: 10,
    img:'https://i.postimg.cc/kXcB5nnK/1.png',
    notas: 'Rubí profundo con tonos violáceos brillantes. Despliega un compleja aromática frutal que recuerda a ciruelas, cerezas, moras y los arándanos junto a tonos especiados y tostado. '
},
{ id: 3,
        nombre: "59N",
        bodega: "Kalos",
        varietal: "Cabernet Franc",
        precio: 700,
        stock: 10,
        img:'https://i.postimg.cc/kXcB5nnK/1.png',
        notas: 'Rubí profundo con tonos violáceos brillantes. Despliega un compleja aromática frutal que recuerda a ciruelas, cerezas, moras y los arándanos junto a tonos especiados y tostado. '
    },
    { id: 4,
        nombre: "13Cles",
        bodega: "13Cles",
        varietal: "Malbec",
        precio: 650,
        stock: 10,
        img:'https://i.postimg.cc/kXcB5nnK/1.png',
        notas: 'Rubí profundo con tonos violáceos brillantes. Despliega un compleja aromática frutal que recuerda a ciruelas, cerezas, moras y los arándanos junto a tonos especiados y tostado. '
    },
    { id: 5,
        nombre: "Tomero",
        bodega: "Vistalba",
        varietal: "Chardonnay",
        precio: 600,
        stock: 10,
        img:'https://i.postimg.cc/kXcB5nnK/1.png',
        notas: 'Rubí profundo con tonos violáceos brillantes. Despliega un compleja aromática frutal que recuerda a ciruelas, cerezas, moras y los arándanos junto a tonos especiados y tostado. '    },]


    const buscoItems = new Promise((resolve, reject) => {
        setTimeout(()=>{    
        resolve(productos.find((item) => item.id == id))
        },2000)   
        })

        buscoItems.then((res) => {    
                setItem(res)
                setEnStock(res.stock)
            })
    
            .catch(() => {
                console.log("ERROR")
            })

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
                        <AlertCart cantidad={cantidad} nombre={item.nombre} />
                    </div>
             </div> 
             : 
             < Spinner animation="border" variant="info" /> }
        </div>
    )
}

export default ItemDetailContainer