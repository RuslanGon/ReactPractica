import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { apiGetContacts } from "../redux/contacts/operation.js"
import { selectPhoneBookContacts, selectPhoneBookIsError, selectPhoneBookIsLoading } from "../redux/contacts/selectors.js"
import Loader from "../components/Loader/Loader.jsx"
import { Error } from "../components/Error/Error.jsx"
import AddContactForm from "../components/AddContactForm/AddContactForm.jsx"


const ContactsPage = () => {

const dispatch = useDispatch()
const isLoading = useSelector(selectPhoneBookIsLoading)
const isError  = useSelector(selectPhoneBookIsError)
const contacts = useSelector(selectPhoneBookContacts)

useEffect(() => {
dispatch(apiGetContacts())
}, [dispatch])
  
  return (
    <div>
      <AddContactForm />
      {isLoading && <Loader />}
      {isError && <Error />}
      <ul>
        {Array.isArray(contacts) && contacts.length === 0 && 
          <li>You dont have any added contacts yet! </li>
        }
        {Array.isArray(contacts) &&
          contacts.map(item => 
            <li key={item.id}>
              <h3>Name {item.name}</h3>
              <p>Number {item.number}</p>
            </li>
          )}
      </ul>
    </div>
  );
}

export default ContactsPage