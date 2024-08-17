
import './App.css'
import MailBox from './components/MailBox/MailBox.jsx'
import MeestExpress from '../meest.json'
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import MAilBoxForm from './components/MailBoxForm/MAilBoxForm.jsx';

function App() {

  const [users, setUsers] = useState(() => {
    const stringifyUsers = localStorage.getItem('users')
    const parseUsers = JSON.parse(stringifyUsers) ?? MeestExpress
    return parseUsers
  })

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  const onAddUsers = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };

    // setUsers([...users, finalUser]);
     setUsers((prevState) => [...prevState, finalUser])
  };

  const onDeleteUser = (userId) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
  }

  return (
    <div>
      <MAilBoxForm onAddUsers={onAddUsers} />
      <br />
      <MailBox boxUser={users} boxTitle="Meest Express" onDeleteUser={onDeleteUser}  />   
    </div>
  );
}

export default App
