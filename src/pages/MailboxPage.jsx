
import '../App.css'
import MailBox from '../components/MailBox/MailBox.jsx'
import { useEffect} from 'react';
import { nanoid } from 'nanoid';
import MAilBoxForm from '../components/MailBoxForm/MAilBoxForm.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser, setFilter } from '../redux/mailbox/mailboxReduser.js';
import { selectFilter, selectorUsers } from '../redux/mailbox/selectors.js';

function MailboxPage() {

  const dispatch = useDispatch()
  const users = useSelector(selectorUsers)
  const filter = useSelector(selectFilter)

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  const onAddUsers = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };

    dispatch(addUser(finalUser))

    // setUsers([...users, finalUser]);
    //  setUsers((prevState) => [...prevState, finalUser])
  };

  const onDeleteUser = (userId) => {

    dispatch(deleteUser(userId))
    
    // setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
  }

  const onChangeFilter = (event) => {

    dispatch(setFilter(event.target.value))

    // setFilter(event.target.value)
  }

  const filteredUsers = users.filter(user =>
    user.userName.toLowerCase().includes(filter.toLowerCase()) ||
    user.userEmail.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <MAilBoxForm onAddUsers={onAddUsers} />
      <section>
        <h3>Search user by name or emaile</h3>
        <input  type="text" placeholder='🔍  search...' value={filter} onChange={onChangeFilter} />
      </section>
      <br />
      <MailBox boxUser={filteredUsers} boxTitle="Meest Express" onDeleteUser={onDeleteUser}  />   
    </div>
  );
}

export default MailboxPage
