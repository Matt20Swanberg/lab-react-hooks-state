import React from 'react'
import ProductCard from './ProductCard'

// Sample product data used for rendering products
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

// Component responsible for rendering filtered products
const ProductList = ({ cart, setCart, category }) => {

  // Filter products based on selected category
  const filteredProducts = sampleProducts.filter((product) => {

    // Show all products if category is "all"
    if (category === "all") { return true }

    // Otherwise only show matching categories
    return category === product.category
  })

  return (
    <div>
      <h2>Available Products</h2>

      {/* Display fallback message if no products exist */}
      {filteredProducts.length === 0 ?
        <p>no products available</p>

        // Render filtered products
        : filteredProducts
          .map((product) => (
            < ProductCard
              key={product.id}
              product={product}
              cart={cart}
              setCart={setCart}
            />
          ))
      }
    </div>
  )
}

export default ProductList
