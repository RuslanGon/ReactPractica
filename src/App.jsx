import { NavLink, Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import clsx from 'clsx';
import MailboxPage from './pages/MailboxPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import SearchPage from './pages/SearchPage.jsx';
import HomePage from './pages/HomePage.jsx';
import NotFoundPage from './pages/NotFoundPage .jsx';

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
        <NavLink className={getNavLinkClassName} to='/'>Home Page</NavLink>
          <NavLink className={getNavLinkClassName} to='/mailbox'>MailBox</NavLink>
          <NavLink className={getNavLinkClassName} to='/products'>Products</NavLink>
          <NavLink className={getNavLinkClassName} to='/search'>Search</NavLink>
        </nav>
      </header>
      <main>
      <Routes>
        <Route path="/" element={<HomePage />} />  
        <Route path="/mailbox" element={<MailboxPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </main>
    </div>
  );
};

export default App;
