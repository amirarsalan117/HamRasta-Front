import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
        <li>
          <NavLink to="/contactus">ContactUs</NavLink>
        </li>
        <li>
          <NavLink to="/dashboards">Dashboards</NavLink>
        </li>
        <li>
          <NavLink to="/templates">templates</NavLink>
        </li>
        <li>
          <NavLink to="/boards">Boards</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
      </ul>
    </nav>
  );
};
