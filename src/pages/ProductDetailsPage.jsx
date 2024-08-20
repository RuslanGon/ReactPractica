import { useParams } from "react-router-dom"


const ProductDetailsPage = () => {

    const {productId} = useParams()

  return (
    <div>
        <h1>Product Details {productId}</h1>
        <div>
            <img src="" alt="" />
            <h2>Title:</h2>
            <p>Brand:</p>
            <p>Price:</p>
        </div>
    </div>
  )
}

export default ProductDetailsPage