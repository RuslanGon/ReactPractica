
import '../App.css'
import MailBox from '../components/MailBox/MailBox.jsx'
import { useEffect} from 'react';
import { nanoid } from 'nanoid';
import MAilBoxForm from '../components/MailBoxForm/MAilBoxForm.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser } from '../redux/mailbox/mailboxReduser.js';
import { selectFilter, selectorUsers } from '../redux/mailbox/selectors.js';
import MailBoxFilter from '../components/MailBoxFilter/MailBoxFilter.jsx';

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

  const filteredUsers = users.filter(user =>
    user.userName.toLowerCase().includes(filter.toLowerCase()) ||
    user.userEmail.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <MAilBoxForm onAddUsers={onAddUsers} />
      <section>
        <MailBoxFilter />
      </section>
      <br />
      <MailBox
        boxUser={filteredUsers}
        boxTitle="Meest Express"
        onDeleteUser={onDeleteUser}
      />
    </div>
  );
}

export default MailboxPage
