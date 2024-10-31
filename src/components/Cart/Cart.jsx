import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import s from "./Cart.module.scss";
import { useNavigate } from "react-router-dom";

export const Cart = ({ onClose }) => {
  const { cartData, clearCart, removeFromCart, subtractFromCart, addToCart, isCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cartData.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalItems = cartData.reduce((total, item) => total + item.quantity, 0);

  const handleCheckout = () => {
    navigate("/checkoutpage");
    onClose();
  };

  useEffect(() => {
    document.body.classList.toggle(s.noScroll, isCartOpen);
    return () => document.body.classList.remove(s.noScroll);
  }, [isCartOpen]);

  return (
    <>
      {isCartOpen && <div className={s.overlay} onClick={onClose}></div>}
      <section className={`${s.cartModal} ${isCartOpen ? s.slideIn : ""}`}>
          <button onClick={onClose} className={s.closeButton}>X</button>
          <h3>Shopping Cart</h3>
          <div className={s.cartStyle}>
            {cartData.map((item) => (
              <div className={s.productsInCart} key={item.id}>
                <h4>{item.name}</h4>
                <div className={s.quantityOption}>
                  <button onClick={() => subtractFromCart(item)} className={s.productsButton}>-</button>
                  <p className={s.quantityNumber}>{item.quantity}</p>
                  <button onClick={() => addToCart(item)} className={s.productsButton}>+</button>
                </div>
                <div>
                  <p>Price: {item.price * item.quantity} DKK</p>
                  <button onClick={() => removeFromCart(item)} className={s.removeButton}>Remove</button>
                </div>
              </div>
            ))}
            <button className={s.clearCartButton} onClick={() => clearCart()}>Empty Cart</button>
            <p>Tax (25%): {(totalPrice * 0.25)} DKK</p>
            <p>Total: {totalPrice.toFixed(2)} DKK</p>
            <p>Items in Cart: {totalItems}</p>
            <button className={s.checkoutButton} onClick={handleCheckout}>Go to checkout</button>
          </div>
      </section>
    </>
  );
};
