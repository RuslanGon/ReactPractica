
import './App.css'
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
  return (
    <div>
        <h1>Smart Ukrainian Big Product Store</h1>
        <ul>
            <li>
                <img width={250} height={250} src="" alt="" />
                <h2>Title:</h2>
                <p>Description:</p>
                <p>Id:</p>
                <p>Total:</p>
                <h3>Price:</h3>
            </li>
        </ul>
    </div>
  )
}

export default AppWithHttpRequest