
import "../App.css";
import Loader from "../components/Loader/Loader.jsx";
import { Error } from "../components/Error/Error.jsx";
import ProductList from "../components/ProductList/ProductList.jsx";
import SearchForm from "../components/SearchForm/SearchForm.jsx";
import { useProductSearch } from "../hooks/useProductSearch.jsx";

const SearchPage = () => {
 
   const { products, isLoading, isError, onSetSearchQuery} = useProductSearch();

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

export default SearchPage;
