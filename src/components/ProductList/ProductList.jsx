

const ProductList = ({products}) => {
  return (
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
  )
}

export default ProductList