// Import React library and CSS file for styling
import React from 'react';
import "./Products.css"; // Import CSS file for products styling

// Define the Products component which takes productItems and handleAddProduct as props
const Products = ({ productItems, handleAddProduct }) => {
  // Check if productItems is not an array
  if (!Array.isArray(productItems)) {
    return <div>No products available</div>; // Display message if no products available
  }

  // Render the Products component
  return (
    <div className="products"> {/* Render products container with specified class */}
      {/* Map through productItems array and display each product */}
      {productItems.map((product) => (
        <div key={product.id} className="card"> {/* Render card for each product with unique key */}
          <div>
            <img 
              className="product-image" 
              src={product.image} 
              alt={product.name} 
            /> {/* Display product image */}
          </div>

          <div>
            <h3 className="product-name">{product.name}</h3> {/* Display product name */}
          </div>
          <div className="product-price"> R{product.price}</div> {/* Display product price */}
          <div className="product-duration">{product.duration}</div> {/* Display product duration */}

          <div>
            <button 
              className="product-add-button" 
              onClick={() => handleAddProduct(product)}
            > 
              Add to Cart {/* Button to add product to cart */}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

// Export the Products component as the default export
export default Products;