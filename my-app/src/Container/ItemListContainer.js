import React, {useState, useEffect} from 'react';
import ItemList from '../Components/ItemList/ItemList';


const ItemListContainer = () => {
    const [vinos, setVinos] = useState([])

    useEffect(()=> { 

                const wines = [
                    { id: 1,
                        nombre: "Sapo de Otro Pozo",
                        bodega: "Mosquita Muerta",
                        varietal: "Blend",
                        precio: 1200,
                        stock: 10,
                        img:'https://i.postimg.cc/kXcB5nnK/1.png'
                    },
                    { id: 2,
                    nombre: "Estiba de Familia",
                    bodega: "Aristides",
                    varietal: "Bonarda",
                    precio: 500,
                    stock: 10,
                    img:'https://i.postimg.cc/kXcB5nnK/1.png'
                },
                { id: 3,
                        nombre: "59N",
                        bodega: "Kalos",
                        varietal: "Cabernet Franc",
                        precio: 700,
                        stock: 10,
                        img:'https://i.postimg.cc/kXcB5nnK/1.png'
                    },
                    { id: 4,
                        nombre: "13Cles",
                        bodega: "13Cles",
                        varietal: "Malbec",
                        precio: 650,
                        stock: 10,
                        img:'https://i.postimg.cc/kXcB5nnK/1.png'
                    },
                    { id: 5,
                        nombre: "Tomero",
                        bodega: "Vistalba",
                        varietal: "Chardonnay",
                        precio: 600,
                        stock: 10,
                        img:'https://i.postimg.cc/kXcB5nnK/1.png'
                    },
            
                ]
            
            let listaItem = new Promise((resolve, reject) => {

                setTimeout(()=>{
                    resolve(wines)
                },2000)
            })

            listaItem.then((res)=>{
                setVinos(res)
            })

            listaItem.catch(() => console.log("OCURRIO UN ERROR"))

        },[])


    return(
            <ItemList productos={vinos}/>
        
    )
    
}

export default ItemListContainer