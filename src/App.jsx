
import './App.css'
import MailBox from './components/MailBox/MailBox.jsx'
import MeestExpress from '../meest.json'
import NovaPoshta from '../nova.json'
import UkrPoshta from '../ukr.json'
import DrinksCounter from './components/DrinksCounter/DrinksCounter.jsx'
import DrinksValues from './components/DrinksValues/DrinksValues.jsx'
import { useEffect, useState } from 'react'

const initialValues = {beer: 0, whiskey: 0, wine: 0}

function App() {

  const [counter, setCounter] = useState(0)
  const [isVisibleBar, setIsVisibleBar] = useState(false)
  const [drinks, setDrinks] = useState(() => {
    const strigifyDrinks =  localStorage.getItem('drinksValues')
    const parseDrinks =  JSON.parse(strigifyDrinks) ?? initialValues
    return parseDrinks
  })

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

  const onToggleBarIsVisible = () => {
    setIsVisibleBar(!isVisibleBar);
  }

useEffect(() => {
localStorage.setItem('drinksValues', JSON.stringify(drinks))
}, [drinks])

  return (
    <div>
      {/* <MailBox boxUser={MeestExpress} boxTitle="Meest Express" MailBoxCounter={5} />   
     <MailBox boxUser={NovaPoshta} boxTitle="Nova Poshta" MailBoxCounter={3} />   
     <MailBox boxUser={UkrPoshta} boxTitle="UKR Poshta" MailBoxCounter={0} />   */}
     <button onClick={onToggleBarIsVisible}>{isVisibleBar ? 'Hide' : 'Show'} mini-bar</button>
      {isVisibleBar && (
        <>
          <button onClick={handleIncrementCounter}>Counter: {counter}</button>
          <button onClick={handleDecrementCounter}>decrement</button>
          <DrinksValues drinks={drinks} drinksTotal={drinksTotal} />
          <DrinksCounter
            handleLogDrink={handleLogDrink}
            handleReset={handleReset}
            onToggleBarIsVisible={onToggleBarIsVisible}
          />
        </>
      )}
    </div>
  );
}

export default App
