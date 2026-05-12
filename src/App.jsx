import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import styles from './styles/DarkMode.module.css'


const App = () => {

  // State to track whether dark mode is enabled
  const [darkMode, setDarkMode] = useState(false)

  // State to store items added to the shopping cart
  const [cart, setCart] = useState([]);

  // State to track selected product category
  const [category, setCategory] = useState('all')

  return (

    // Dynamically apply dark/light mode styling
    <div className={darkMode ? styles.darkMode : styles.lightMode}>

      {/* Application title */}
      <h1>🛒 Shopping App</h1>


      {/* Dark mode toggle button */}
      <div>
        <DarkModeToggle
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>

      {/* Updates category state when selection changes */}
      <label>Filter by Category: </label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* Display filtered products */}
      <ProductList
        cart={cart}
        setCart={setCart}
        category={category}
      />

      {/* Display shopping cart contents */}
      <Cart cart={cart} />

    </div>
  )
}

export default App
