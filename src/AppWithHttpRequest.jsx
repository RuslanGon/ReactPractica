import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Loader from './components/Loader/Loader.jsx';
import { Error } from './components/Error/Error.jsx';

const AppWithHttpRequest = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        const { data } = await axios.get("https://dummyjson.com/products");
        setProducts(data.products);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Smart Ukrainian Big Product Store</h1>
      {isLoading && <Loader />}
      {isError && <Error /> }
      <ul>
        {Array.isArray(products) &&
          products.map((product) => (
            <li key={product.id}>
              <img width={250} height={250} src={product.thumbnail} alt={product.title} />
              <h2>Title: {product.title}</h2>
              <p>Rating: {product.rating}</p>
              <p>Category: {product.category}</p>
              <h3>Price: {product.price}</h3>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default AppWithHttpRequest;
