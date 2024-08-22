import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate} from "react-router-dom";
import { incrementTimer } from "../redux/timer/timerSlice.js";

const NotFoundPage = () => {

const dispatch = useDispatch()
const timer = useSelector((state) => {return state.timerCount.timer})

  // const [timer, setTimer] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(incrementTimer())
      //  setTimer(prevTimer => prevTimer + 1)
    },1000)

    return () => clearInterval(intervalId)
  }, [dispatch])

  if(timer === 5){
return <Navigate to='/' replace />
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go home</Link>
      <h2>You will be redirected to home page in {5 - timer} seconds</h2>
    </div>
  );
};

export default NotFoundPage;
