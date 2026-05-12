import React from 'react'

// Component responsible for toggling dark/light mode
const DarkModeToggle = ({ darkMode, setDarkMode }) => {

  return (


    // Toggle darkMode state when clicked
    <button onClick={() => setDarkMode(!darkMode)}>

      {/* Dynamically update button text */}
      {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}</button>
  )
}

export default DarkModeToggle
