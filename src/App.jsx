
import { NavLink } from 'react-router-dom'
import './App.css'
// import MailboxPage from './pages/MailboxPage.jsx'
// import ProductsPage from './pages/ProductsPage.jsx'
// import SearchPage from './pages/SearchPage.jsx'

const App = () => {
  return (
    <div>
      <header>
        <NavLink to='/mailbox'>MailBox</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/search'>Search</NavLink>
      </header>
    
    </div>
  )
}

export default App
