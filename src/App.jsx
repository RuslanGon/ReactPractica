
import './App.css'
import MailBox from './components/MailBox/MailBox.jsx'
import MeestExpress from '../meest.json'
import { useState } from 'react';
import { nanoid } from 'nanoid';
import MAilBoxForm from './components/MailBoxForm/MAilBoxForm.jsx';

function App() {

  const [users, setUsers] = useState(MeestExpress)

  const onAddUsers = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };

    setUsers([...users, finalUser]);
    //  setUsers((prevState) => [...prevState, finalUser])
  };

  return (
    <div>
      <MailBox boxUser={users} boxTitle="Meest Express" />   
      <MAilBoxForm />
    </div>
  );
}

export default App
