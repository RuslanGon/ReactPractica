
import './App.css'
import MailBox from './components/MailBox/MailBox.jsx'

function App() {
 
  return (
    <div>
     <MailBox boxTitle="Meest Express" MailBoxCounter={5} />   
     <MailBox boxTitle="Nova Poshta" MailBoxCounter={3} />   
     <MailBox boxTitle="UKR Poshta" MailBoxCounter={0} />   
    </div>
  )
}

export default App
