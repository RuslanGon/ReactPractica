
import './App.css'
import MailBox from './components/MailBox/MailBox.jsx'
import MeestExpress from '../meest.json'
import NovaPoshta from '../nova.json'
import UkrPoshta from '../ukr.json'
import DrinksCounter from './components/DrinksCounter/DrinksCounter.jsx'
import DrinksValues from './components/DrinksValues/DrinksValues.jsx'


function App() {

  const initialDrinks = {beer: 5, whiskey: 3, wine: 1}

  const handleLogDrink = (drinkName) => {
console.log(drinkName);
  }
 
  return (
    <div>
     {/* <MailBox boxUser={MeestExpress} boxTitle="Meest Express" MailBoxCounter={5} />   
     <MailBox boxUser={NovaPoshta} boxTitle="Nova Poshta" MailBoxCounter={3} />   
     <MailBox boxUser={UkrPoshta} boxTitle="UKR Poshta" MailBoxCounter={0} />   */}
     <DrinksValues drinks={initialDrinks} />
     <DrinksCounter handleLogDrink={handleLogDrink} /> 
    </div>
  )
}

export default App
