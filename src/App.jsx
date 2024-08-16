
import './App.css'
import MailBox from './components/MailBox/MailBox.jsx'
import MeestExpress from '../meest.json'
import NovaPoshta from '../nova.json'
import UkrPoshta from '../ukr.json'
import DrinksCounter from './components/DrinksCounter/DrinksCounter.jsx'
import DrinksValues from './components/DrinksValues/DrinksValues.jsx'
import { useState } from 'react'


function App() {

  const [counter, setCounter] = useState(0)
  const [drinks, setDrinks] = useState({beer: 0, whiskey: 0, wine: 0})

  const handleLogDrink = (drinkName) => {
    if(drinks[drinkName] === 3 && drinkName === 'beer') return
    setDrinks({...drinks, [drinkName] : drinks[drinkName] + 1})
  };

  const handleReset = () => {
    setDrinks({ beer: 0, whiskey: 0, wine: 0 });
  }

  const drinksTotal = drinks.beer + drinks.whiskey + drinks.wine
  
  const handleIncrementCounter = () => {
    setCounter(counter + 1)
  } 

  const handleDecrementCounter = () => {
    if(counter === 0) return
    setCounter(counter - 1)
  } 

  return (
    <div>
     {/* <MailBox boxUser={MeestExpress} boxTitle="Meest Express" MailBoxCounter={5} />   
     <MailBox boxUser={NovaPoshta} boxTitle="Nova Poshta" MailBoxCounter={3} />   
     <MailBox boxUser={UkrPoshta} boxTitle="UKR Poshta" MailBoxCounter={0} />   */}
     <button onClick={handleIncrementCounter}>Counter: {counter}</button>
     <button onClick={handleDecrementCounter}>decrement</button>
     <DrinksValues drinks={drinks} drinksTotal={drinksTotal} />
     <DrinksCounter handleLogDrink={handleLogDrink} handleReset={handleReset} /> 
    </div>
  )
}

export default App
