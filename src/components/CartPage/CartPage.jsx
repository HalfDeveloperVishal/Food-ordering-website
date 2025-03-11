import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext";
import styles from "./CartPage.module.css";
import { useEffect } from "react";

const CartPage = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const deliveryFee = 2.99;
    const tax = subtotal * 0.08;
    return subtotal + deliveryFee + tax;
  };

  const incrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top
    }, []);

  return (
    <div className={styles.cartPage}>
      <div className={styles.cartHeader}>
        <Link to="/restaurant" className={styles.continueShopping}>
          ← Continue Shopping
        </Link>
        <h2>Your Cart</h2>
      </div>

      <div className={styles.cartContent}>
        <div className={styles.cartItems}>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemDetails}>
                  <img className={styles.itemImage}
                src={item.image}
                alt={item.name}
              />
                  
                  <div className={styles.itemText}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                  </div>
                </div>
                <div className={styles.itemQuantity}>
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                </div>
                <div className={styles.itemTotal}>
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                <button className={styles.removeItem} onClick={() => removeItem(item.id)}>
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className={styles.orderSummary}>
            <h2>Order Summary</h2>
            <div className={styles.summaryItem}>
              <span>Subtotal</span>
              <span>${calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className={styles.summaryItem}>
              <span>Delivery Fee</span>
              <span>$2.99</span>
            </div>
            <div className={styles.summaryItem}>
              <span>Tax</span>
              <span>${(calculateTotal() - calculateSubtotal() - 2.99).toFixed(2)}</span>
            </div>
            <div className={`${styles.summaryItem} ${styles.total}`}>
              <span>Total</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
            <button className={styles.checkoutButton}>Proceed to Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
