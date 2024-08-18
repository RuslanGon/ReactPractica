import { useEffect, useState } from 'react';
import './App.css';
import Loader from './components/Loader/Loader.jsx';
import { Error } from './components/Error/Error.jsx';
import { requestProducts } from './services/api.js';
import ProductList from './components/ProductList/ProductList.jsx';

const AppWithHttpRequest = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        const  data  = await requestProducts() ;
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
      <ProductList products={products} />
    </div>
  );
};

export default AppWithHttpRequest;
