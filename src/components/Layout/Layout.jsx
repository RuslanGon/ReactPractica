import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "../../App.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsSignedIn,
  selectUserData,
} from "../../redux/auth/selectors.js";
import { apiLogOut } from "../../redux/auth/operation.js";


const getNavLinkClassName = ({ isActive }) => {
  return clsx(css.navLink, {
    [css.active]: isActive,
  });
};
const Layout = ({ children }) => {

  const dispatch = useDispatch()

  const isSignedIn = useSelector(selectIsSignedIn);

  const userData = useSelector(selectUserData);

  const onLogOut = () => {
    dispatch(apiLogOut)
  }

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
               <span> Hello user {userData?.name}</span>
               <button type="button" onClick={onLogOut}>Log out 🏃</button>
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
