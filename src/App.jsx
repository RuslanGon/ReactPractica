import { NavLink, Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import clsx from 'clsx';
import MailboxPage from './pages/MailboxPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import SearchPage from './pages/SearchPage.jsx';

const getNavLinkClassName = ({ isActive }) => {
  return clsx(css.navLink, {
    [css.active]: isActive,
  });
};

const App = () => {
  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink className={getNavLinkClassName} to='/mailbox'>MailBox</NavLink>
          <NavLink className={getNavLinkClassName} to='/products'>Products</NavLink>
          <NavLink className={getNavLinkClassName} to='/search'>Search</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/mailbox" element={<MailboxPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    
    </div>
  );
};

export default App;
