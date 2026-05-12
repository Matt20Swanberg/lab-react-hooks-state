import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ cart, setCart, category }) => {

  const filteredProducts = sampleProducts.filter((product) => {
    if (category === "all") { return true }
    else { return category === product.category }
  })

  return (
    <div>
      <h2>Available Products</h2>

      {filteredProducts.length === 0 ?
      <p>no products available</p>
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
