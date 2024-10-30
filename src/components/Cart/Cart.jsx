import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import s from "./Cart.module.scss";

export const Cart = ({ onClose }) => {
  const { cartData, clearCart, removeFromCart, subtractFromCart, addToCart } = useContext(CartContext);

  const totalPrice = cartData.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <section className={s.cartModal}>
      <button onClick={onClose} className={s.closeButton}>X</button>
      <h3>Shopping Cart</h3>
      <div className={s.cartStyle}>
        {cartData.map((item) => (
          <div className={s.productsInCart} key={item.id}>
            <h4>{item.name}</h4>
            <div>
              <button onClick={() => subtractFromCart(item)}>-</button>
              <p>{item.quantity}</p>
              <button onClick={() => addToCart(item)}>+</button>
            </div>
            <div>
              <p>Price: {item.price * item.quantity} DKK</p>
              <button onClick={() => removeFromCart(item)}>Remove from cart</button>
            </div>
          </div>
        ))}

        <p>Tax (25%): {(totalPrice * 0.25).toFixed(2)} DKK</p>
        <p><strong>Total: {totalPrice.toFixed(2)} DKK</strong></p>
        <button className={s.clearCartButton} onClick={() => clearCart()}>Empty Cart</button>
        <button className={s.checkoutButton}>Go to checkout</button>
      </div>
    </section>
  );
};
