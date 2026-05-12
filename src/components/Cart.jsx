import React from 'react'

// Component responsible for displaying cart contents
const Cart = ({ cart }) => {

  return (
    <div>

      {/* Display dynamic cart count */}
      <h2>Shopping Cart ({cart.length})</h2>
      <ul>

        {/* Render all cart items */}
        {cart.map((item) => (
          <li key={item.id}>{item.name} is in your cart.</li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
