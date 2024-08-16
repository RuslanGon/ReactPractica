
import './App.css'
import MailBox from './components/MailBox/MailBox.jsx'
import MeestExpress from '../meest.json'
import NovaPoshta from '../nova.json'
import UkrPoshta from '../ukr.json'


function App() {

  const handleClick = () => {

  }
 
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
     <MailBox boxUser={MeestExpress} boxTitle="Meest Express" MailBoxCounter={5} />   
     <MailBox boxUser={NovaPoshta} boxTitle="Nova Poshta" MailBoxCounter={3} />   
     <MailBox boxUser={UkrPoshta} boxTitle="UKR Poshta" MailBoxCounter={0} />   
    </div>
  )
}

export default App
