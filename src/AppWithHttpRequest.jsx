
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
    // "id": 1,
    // "products": [
    //   {
    //     "id": 168,
    //     "title": "Charger SXT RWD",
    //     "price": 32999.99,
    //     "quantity": 3,
    //     "total": 98999.97,
    //     "discountPercentage": 13.39,
    //     "discountedTotal": 85743.87,
    //     "thumbnail": "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png"

const AppWithHttpRequest = () => {

    const [products, setProducts] = useState(null)

    useEffect(() => {
      async function fetchProducts() {
        const { data } = await axios.get("https://dummyjson.com/carts");
        console.log(data);
        setProducts(data.products)
      }
      fetchProducts();
    }, []);

  return (
    <div>
        <h1>Smart Ukrainian Big Product Store</h1>
        <ul>
           {Array.isArray(products) && products.map(product => {
            return (<li key={product.id}> 
                <img width={250} height={250} src="" alt="" />
                <h2>Title: {product.title}</h2>
                <p>Id {product.id}:</p>
                <p>Total: {product.total}</p>
                <h3>Price: {product.price}</h3>
            </li>)
           }) }
        </ul>
    </div>
  )
}

export default AppWithHttpRequest