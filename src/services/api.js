import axios from "axios";


export const requestProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    return data
}