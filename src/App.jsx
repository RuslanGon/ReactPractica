import { NavLink } from 'react-router-dom';
import './App.css';
import css from './App.module.css';
import clsx from 'clsx';

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
    </div>
  );
};

export default App;
