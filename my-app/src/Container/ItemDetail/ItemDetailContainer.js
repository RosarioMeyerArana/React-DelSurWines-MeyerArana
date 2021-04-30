import React, {useEffect, useState} from 'react'
import ItemDetail from '../../Components/ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'


const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    const {id} = useParams() 

    const {varietal} = useParams()

    useEffect(() => {

    const productos = [{ id: 1,
        nombre: "Sapo de Otro Pozo",
        bodega: "Mosquita Muerta",
        varietal: "Blend",
        precio: 1200,
        stock: 10,
        img:'https://i.postimg.cc/kXcB5nnK/1.png',
        notas: 'Rubí profundo con tonos violáceos brillantes. Despliega un compleja aromática frutal que recuerda a ciruelas, cerezas, moras y los arándanos junto a tonos especiados y tostado. Con unos minutos en copa logra un perfil balsámico y elegante con cierto tono herbal. Ataque amplio y envolvente. Fluye con buena estructura hacia un medio de boca carnoso y frutal. Taninos firmes que sellan intensidad y un final prolongado.'
    },
    { id: 2,
    nombre: "Estiba de Familia",
    bodega: "Aristides",
    varietal: "Bonarda",
    precio: 500,
    stock: 10,
    img:'https://i.postimg.cc/kXcB5nnK/1.png',
    notas: 'Rubí profundo con tonos violáceos brillantes. Despliega un compleja aromática frutal que recuerda a ciruelas, cerezas, moras y los arándanos junto a tonos especiados y tostado. Con unos minutos en copa logra un perfil balsámico y elegante con cierto tono herbal. Ataque amplio y envolvente. Fluye con buena estructura hacia un medio de boca carnoso y frutal. Taninos firmes que sellan intensidad y un final prolongado.'

},
{ id: 3,
        nombre: "59N",
        bodega: "Kalos",
        varietal: "Cabernet Franc",
        precio: 700,
        stock: 10,
        img:'https://i.postimg.cc/kXcB5nnK/1.png',
        notas: 'Rubí profundo con tonos violáceos brillantes. Despliega un compleja aromática frutal que recuerda a ciruelas, cerezas, moras y los arándanos junto a tonos especiados y tostado. Con unos minutos en copa logra un perfil balsámico y elegante con cierto tono herbal. Ataque amplio y envolvente. Fluye con buena estructura hacia un medio de boca carnoso y frutal. Taninos firmes que sellan intensidad y un final prolongado.'

    },
    { id: 4,
        nombre: "13Cles",
        bodega: "13Cles",
        varietal: "Malbec",
        precio: 650,
        stock: 10,
        img:'https://i.postimg.cc/kXcB5nnK/1.png',
        notas: 'Rubí profundo con tonos violáceos brillantes. Despliega un compleja aromática frutal que recuerda a ciruelas, cerezas, moras y los arándanos junto a tonos especiados y tostado. Con unos minutos en copa logra un perfil balsámico y elegante con cierto tono herbal. Ataque amplio y envolvente. Fluye con buena estructura hacia un medio de boca carnoso y frutal. Taninos firmes que sellan intensidad y un final prolongado.'

    },
    { id: 5,
        nombre: "Tomero",
        bodega: "Vistalba",
        varietal: "Chardonnay",
        precio: 600,
        stock: 10,
        img:'https://i.postimg.cc/kXcB5nnK/1.png',
        notas: 'Rubí profundo con tonos violáceos brillantes. Despliega un compleja aromática frutal que recuerda a ciruelas, cerezas, moras y los arándanos junto a tonos especiados y tostado. Con unos minutos en copa logra un perfil balsámico y elegante con cierto tono herbal. Ataque amplio y envolvente. Fluye con buena estructura hacia un medio de boca carnoso y frutal. Taninos firmes que sellan intensidad y un final prolongado.'
    },]


    const buscoItems = new Promise((resolve, reject) => {
        setTimeout(()=>{    
        resolve(productos.find((item) => item.id == id))
        },2000)   
        })

        buscoItems.then((res) => {    
                setItem(res)
            })
    
            .catch(() => {
                console.log("ERROR")
            })

    },[id])

   

    return (
        <div>
            {item ? <ItemDetail nombre={item.nombre} bodega={item.bodega} 
             varietal={item.varietal} precio={item.precio} stock={item.stock} img={item.img} notas={item.notas} /> : <Spinner animation="border" variant="info" /> }
        </div>
    )

}

export default ItemDetailContainer