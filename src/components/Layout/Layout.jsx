import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "../../App.module.css";
import { useSelector } from "react-redux";
import {
  selectIsSignedIn,
  selectUserData,
} from "../../redux/auth/selectors.js";

const getNavLinkClassName = ({ isActive }) => {
  return clsx(css.navLink, {
    [css.active]: isActive,
  });
};
const Layout = ({ children }) => {
  const isSignedIn = useSelector(selectIsSignedIn);

  const userData = useSelector(selectUserData);

  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink className={getNavLinkClassName} to="/">
            Home Page
          </NavLink>
          {isSignedIn ? (
            <>
              <NavLink className={getNavLinkClassName} to="/contacts">
                Contacts Page
              </NavLink>
              <NavLink className={getNavLinkClassName} to="/mailbox">
                MailBox
              </NavLink>
              <NavLink className={getNavLinkClassName} to="/products">
                Products
              </NavLink>
              <NavLink className={getNavLinkClassName} to="/search">
                Search
              </NavLink>

              <div>
               <span> Helloy {userData}</span>
               <button type="button">Log out 🏃</button>
              </div>

            </>
          ) : (
            <>
              <NavLink className={getNavLinkClassName} to="/register">
                Registr Page
              </NavLink>
              <NavLink className={getNavLinkClassName} to="/login">
                Login Page
              </NavLink>
            </>
          )}
        </nav>
        <main>{children}</main>
      </header>
    </div>
  );
};

export default Layout;
