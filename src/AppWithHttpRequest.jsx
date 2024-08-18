import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader.jsx";
import { Error } from "./components/Error/Error.jsx";
import { requestProducts, requestProductsByQuery } from "./services/api.js";
import ProductList from "./components/ProductList/ProductList.jsx";
import SearchForm from "./components/SearchForm/SearchForm.jsx";

const AppWithHttpRequest = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState('')

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        const data = await requestProducts();
        setProducts(data.products);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);


useEffect(() => {
if(query.length === 0) return

async function fetchProductsByQuery() {
  try {
    setIsLoading(true);
    const data = await requestProductsByQuery(query);
    setProducts(data.products);
  } catch {
    setIsError(true);
  } finally {
    setIsLoading(false);
  }
}
fetchProductsByQuery();
}, [query])

  const onSetSearchQuery = (searchTerm) => {
    setQuery(searchTerm);
  };

  return (
    <div>
      <h1>Smart Ukrainian Big Product Store</h1>
      <SearchForm onSetSearchQuery={onSetSearchQuery} />
      {isLoading && <Loader />}
      {isError && <Error />}
      {products && <ProductList products={products} />}
    </div>
  );
};

export default AppWithHttpRequest;
