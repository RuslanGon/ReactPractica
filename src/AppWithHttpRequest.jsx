import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const AppWithHttpRequest = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get("https://dummyjson.com/products");
      setProducts(data.products);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Smart Ukrainian Big Product Store</h1>
      <ul>
        {Array.isArray(products) &&
          products.map((product) => (
            <li key={product.id}>
              <img width={250} height={250} src={product.thumbnail} alt={product.title} />
              <h2>Title: {product.title}</h2>
              <p>Id: {product.id}</p>
              <p>Total: {product.total}</p>
              <h3>Price: {product.price}</h3>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default AppWithHttpRequest;
