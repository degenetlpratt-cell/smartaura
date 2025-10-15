import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useLocalStorage";

const CartDrawer = ({ onClose }) => {
  const { cart, removeFromCart, total } = useCart();

  return (
    <div className="cart-drawer">
      <button className="close-btn" onClick={onClose}>X</button>
      <h3>Your Cart</h3>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>{item.quantity} × ${item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h4>Total: ${total.toFixed(2)}</h4>
          <Link to="/checkout">
            <button className="checkout-btn">Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default CartDrawer;
