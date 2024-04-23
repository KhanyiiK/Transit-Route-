// Import React and useState hook from React library
import React, { useState } from 'react';
// Import sample data from a separate file
import data from "./components/back/Data";
// Import Header component from the specified path
import Header from "./components/front/Header/Header";
// Import Routes component from the specified path
import Routes from "./components/front/Routes/Routes";
// Import BrowserRouter for routing functionality
import { BrowserRouter as Router } from "react-router-dom";

// Define the main App component
const App = () => {
  // Destructure the ProductItems from the imported data
  const { ProductItems } = data;

  // State for managing cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const handleAddProduct = (product) => {
    // Check if the product already exists in the cart
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      // If the product already exists, update its quantity
      setCartItems (
        cartItems.map((item) => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } // Update quantity of existing item
            : item
        )
      );
    } else {
      // If the product is not in the cart, add it with quantity 1
      setCartItems([...cartItems, { ...product, quantity: +1 }]); // Add new item to cart
    }
  };

  // Function to remove a product from the cart
  const handleRemoveProduct = (product) => {
    // Implementation needed based on requirements
  };

  // Function to clear the entire cart
  const handleCartClearance = () => {
    setCartItems([]); // Set cart items to an empty array
  };

  // Render the main App component
  return (
    <div>
      <Router>
        {/* Render the Header component with cartItems passed as props */}
        <Header cartItems={cartItems}/>
        {/* Render the Routes component with necessary props */}
        <Routes
          productItems={ProductItems} 
          cartItems={cartItems} 
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleCartClearance={handleCartClearance}
        />
      </Router>
    </div>
  );
};

// Export the App component as the default export
export default App;