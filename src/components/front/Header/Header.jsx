// Import necessary modules and CSS file for styling
import React from 'react';
import { Link } from "react-router-dom"; // Import Link component for routing
import "./Header.css"; // Import CSS file for header styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Import shopping cart icon from Font Awesome

// Define the Header component which takes cartItems as a prop
const Header = ({cartItems}) => {
  // Render the Header component
  return (
    <header className ="header"> {/* Render header with specified class */}
      <div>
        <h1>
          <Link to="/" className= "logo"> {/* Create a link to home */}
              Bus Routes {/* Text for the link */}
         </Link>
       </h1>
     </div>
     <div className ="header-links"> {/* Container for header links */}
        <ul>
            <li>
                <Link to="/">Home</Link> {/* Link to home */}
            </li>
        </ul>
        <ul>
            <li>
                <Link to="/signup">Signup</Link> {/* Link to signup */}
            </li>
        </ul>
        <ul>
            <li>
            <Link to="/cart" className="cart"> {/* Link to cart */}
              <FontAwesomeIcon icon={faShoppingCart} /> {/* Render shopping cart icon */}
              <span className="cart-length">
                {cartItems.length === 0 ? "" : cartItems.length} {/* Display cart items length */}
              </span>
            </Link>
            </li>
        </ul>
     </div>
     </header>
  );
};
    
// Export the Header component as the default export
export default Header;