import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const AppWithHttpRequest = () => {

  const [products, setProducts] = useState(null)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await axios.get("https://dummyjson.com/carts");
        console.log(data);
        setProducts(data.products); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setProducts([]); 
      }
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Smart Ukrainian Big Product Store</h1>
      <ul>
        {Array.isArray(products) && products.map(product => (
          <li key={product.id}> 
            <img width={250} height={250} src={product.thumbnail} alt={product.title} />
            <h2>Title: {product.title}</h2>
            <p>Id: {product.id}</p>
            <p>Total: {product.total}</p>
            <h3>Price: {product.price}</h3>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AppWithHttpRequest
