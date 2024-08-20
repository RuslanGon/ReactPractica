import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader/Loader.jsx";
import { Error } from "../components/Error/Error.jsx";
import { requestProductsDetailsById } from "../services/api.js";

const ProductDetailsPage = () => {
  const { productId } = useParams();

  const [productDetails, setProductDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        setIsLoading(true);
        const data = await requestProductsDetailsById(productId);
        setProductDetails(data); 
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProductDetails();
  }, [productId]);

  return (
    <div>
      <h1>Product Details {productId}</h1>
      {isLoading && <Loader />}
      {isError && <Error />}
      {productDetails ? (
        <div>
          <img src={productDetails.thumbnail} alt={productDetails.title} />
          <h2>Title: {productDetails.title}</h2>
          <p>Brand: {productDetails.brand}</p>
          <p>Price: ${productDetails.price}</p>
        </div>
      ) : (
        <p>No product details available.</p>
      )}
    </div>
  );
};

export default ProductDetailsPage;
