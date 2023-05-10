import '../../App.css'
import { useState, useEffect} from "react"
import { getProducts, getProductsByCategory } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"

import { useParams, useLocation } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState ([]) 

    const { categoryId } = useParams()

    const location = useLocation()

    const isRoot = location.pathname === '/'

    useEffect(() => {
        const asyncFunc = categoryId ? () => getProductsByCategory(categoryId) : getProducts

        asyncFunc().then((response) => {
          setProducts(response)
        })

    }, [categoryId])

    return( 
        <div>
            { isRoot ? (
              <>
                <h1 className="greeting">{greeting}</h1>
                <br />
                <h5 id="greetingHome">Bienvenidos a Tienda South Beach</h5>
              
              </>
            ) : null }
            <ItemList products={products}/>
        </div>
    )
}


export default ItemListContainer
