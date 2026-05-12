import React from 'react'
import styles from '../styles/ProductCard.module.css'

// Component used to display individual product information
const ProductCard = ({ product, cart, setCart }) => {

  // Add selected product to cart state
  function handleAddToCart() {
    setCart([...cart, product])
  }

  return (

    // Apply conditional styling if product is out of stock
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
    >

      {/* Product details */}
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      {/* Add product to cart */}
      <button
        onClick={handleAddToCart}
        data-testid={'product-' + product.id}
      >
        Add to Cart</button>
    </div>
  )
}

export default ProductCard
