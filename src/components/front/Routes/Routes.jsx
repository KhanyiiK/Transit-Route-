// Import necessary modules and components
import React from 'react';
import Products from "./Products/Products"; // Import Products component
import { Route, Switch } from "react-router-dom"; // Import Route and Switch components for routing
import Signup from '../Signup/Signup'; // Import Signup component
import Cart from '../Cart/Cart'; // Import Cart component

// Define the Routes component which takes productItems, cartItems, and several handlers as props
const Routes = ({ productItems, cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance }) => {
  // Render the Routes component
  return (
    <div>
      <Switch>
        {/* Define routes for different paths */}
        <Route path="/" exact>
          <Products productItems={productItems} handleAddProduct={handleAddProduct}/> {/* Render Products component for home path */}
        </Route>
        <Route path="/signup">
          <Signup /> {/* Render Signup component for signup path */}
        </Route>
        <Route path="/cart">
          <Cart 
            cartItems={cartItems} 
            handleAddProduct={handleAddProduct} 
            handleRemoveProduct={handleRemoveProduct} 
            handleCartClearance={handleCartClearance}
          /> {/* Render Cart component for cart path with necessary props */}
        </Route>
      </Switch>
    </div>
  );
};

// Export the Routes component as the default export
export default Routes;