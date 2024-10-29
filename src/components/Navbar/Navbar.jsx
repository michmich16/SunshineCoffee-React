import { Paths } from "../../router/Paths";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.scss'
import coffeeIcon from '../../assets/images/icons8-coffee-50.png'
import cartIcon from '../../assets/images/icons8-cart-50.png'
import userIcon from '../../assets/images/icons8-user-50.png'

export const Navbar = () => {
  const navMenu = [
    {
      path: Paths.home,
      text: "Home",
    },
  ];

  return (
    <>
      <nav className={s.navStyle}>
        <div className={s.logoStyle}>
        <h1><NavLink>Sunshine Coffe</NavLink></h1>
          <img src={coffeeIcon} alt="" />
        </div>
        <ul className={s.menuStyle}>
          <li><NavLink>Europa</NavLink></li>
          <li><NavLink><img src={cartIcon} alt="" /></NavLink></li>
          <li><NavLink><img src={userIcon} alt="" /></NavLink></li>
        </ul>
      </nav>


    </>
  )
};
