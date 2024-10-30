import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Paths } from "../../router/Paths";
import { NavLink } from "react-router-dom";
import { Cart } from "../Cart/Cart";
import s from './Navbar.module.scss';
import coffeeIcon from '../../assets/images/icons8-coffee-50.png';
import cartIcon from '../../assets/images/icons8-cart-50.png';
import userIcon from '../../assets/images/icons8-user-50.png';

export const Navbar = () => {
  const { isCartOpen, toggleCart } = useContext(CartContext);

  return (
    <>
      <nav className={s.navStyle}>
        <div className={s.logoStyle}>
          <h1><NavLink to={'/'}>Sunshine Coffee</NavLink></h1>
          <img src={coffeeIcon} alt="Coffee Icon" />
        </div>
        <ul className={s.menuStyle}>
          <li><NavLink>Europa</NavLink></li>
          <li onClick={toggleCart}><img src={cartIcon} alt="Cart Icon" /></li>
          <li><NavLink to={'/AccountPage'}><img src={userIcon} alt="User Icon" /></NavLink></li>
        </ul>
      </nav>
      {isCartOpen && <Cart onClose={toggleCart} />} {/* Display Cart modal only when isCartOpen is true */}
    </>
  );
};
