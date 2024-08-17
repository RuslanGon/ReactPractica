
import './App.css'
import MailBox from './components/MailBox/MailBox.jsx'
import MeestExpress from '../meest.json'

function App() {

  return (
    <div>
      <MailBox boxUser={MeestExpress} boxTitle="Meest Express" />   
    </div>
  );
}

export default App
