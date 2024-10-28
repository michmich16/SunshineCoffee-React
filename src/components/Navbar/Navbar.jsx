import { Paths } from "../../router/Paths";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.scss'

export const Navbar = () => {
  const navMenu = [
    {
      path: Paths.home,
      text: "Home",
    },
  ];

  return <nav className={s.navStyle}>
    <ul className={s.menuStyle}>
      <li><NavLink>Server</NavLink></li>
      <li><NavLink>Cart</NavLink></li>
      <li><NavLink>User</NavLink></li>
    </ul>
  </nav>;
};
