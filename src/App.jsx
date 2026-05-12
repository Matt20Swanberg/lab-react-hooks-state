import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import ProductCard from './components/ProductCard'

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [darkMode, setDarkMode] = useState(false)
  // TODO: Implement state for cart management
  const [cart, setCart] = useState([]);
  // TODO: Implement state for category filtering
  const [category, setCategory] = useState('all')

  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <div>
        <DarkModeToggle
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select value={category} onChange={(e)=> setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
      cart={cart}
      setCart={setCart}
      category={category}
      />

      <Cart cart={cart} />

    </div>
  )
}

export default App
