// Import React library and CSS file for styling
import React from 'react';
import "./Cart.css";

// Define the Cart component which takes cartItems as a prop
const Cart = ({ cartItems }) => {
  // Calculate total price by multiplying quantity and price for each item
  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

  // Render the Cart component
  return (
    <div className="cart-items">
      {/* Display header for the shopping cart */}
      <h2 className="cart-items-header">Your Shopping Cart</h2>
      <div>
        {/* Display message if the cart is empty */}
        {cartItems.length === 0 && (
          <div className="cart-items-empty">Cart is empty.</div>
        )}
        {/* Map through cartItems array and display each item */}
        {cartItems.map((item) => ( 
          <div key={item.id} className="cart-items-list">
            {/* Display image, name, quantity, and price for each item */}
            <img 
              className="cart-items-image"
              src={item.image} 
              alt={item.name} 
            />
            <div className="cart-items-name">{item.name}</div>
            {/* Display quantity of each item */}
            <div className="cart-items-function">
              <div className="cart-items-quantity">{item.quantity}</div>
            </div>
            {/* Display price of each item */}
            <div className="cart-items-price">
              R{item.price} each
            </div>
          </div>
        ))}
      </div>
      {/* Display total amount of all items in the cart */}
      <div className="total-amount">
        Total amount: R{totalPrice}
      </div>
    </div>
  );
};

// Export the Cart component as the default export
export default Cart;