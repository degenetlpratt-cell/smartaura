import React from "react";
import { useCart } from "../hooks/useLocalStorage";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, total } = useCart();

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>${item.price} × {item.quantity}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
          <Link to="/checkout">
            <button className="checkout-btn">Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
