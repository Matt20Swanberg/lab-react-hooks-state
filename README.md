# Shopping App

## Overview

This project is a React-based grocery shopping application designed to demonstrate core React concepts such as:

- State management with `useState`
- Component-based architecture
- Event handling
- Conditional rendering
- Dynamic filtering
- Shared state through props
- CSS Modules and theme switching

The application allows users to:

- Toggle between light and dark mode
- Add grocery items to a shopping cart
- Filter products by category
- View cart contents dynamically

---

# Features

## Dark Mode Toggle

Users can switch between light and dark themes using a toggle button.

### Functionality

- Clicking the button updates the `darkMode` state
- The app dynamically changes styling using conditional CSS classes
- Button text changes depending on the active mode

### Example

| Current Mode | Button Text |
|---|---|
| Light Mode | Toggle Dark Mode |
| Dark Mode | Toggle Light Mode |

---

# Product List

The application displays a list of grocery items.

Each product card includes:

- Product name
- Product price
- Stock availability
- Add to Cart button

---

# Add to Cart Functionality

Users can add items to the shopping cart.

### Functionality

- Clicking `Add to Cart` updates shared cart state
- Cart items render dynamically
- Duplicate items are allowed
- Cart count updates automatically

### Example

```txt
Apple is in your cart.
Milk is in your cart.
```

---

# Shopping Cart

The cart component displays:

- All added items
- Dynamic item count

### Example

```txt
Shopping Cart (3)
```

---

# Category Filter

Users can filter products using a dropdown menu.

### Available Categories

- All
- Fruits
- Dairy

### Functionality

- Updates category state using `onChange`
- Dynamically filters visible products
- Displays only matching categories

---

# Empty State Handling

If no products match the selected category, the application displays:

```txt
No products available
```

This is implemented using conditional rendering and array length checks.

---

# React Concepts Used

## State Management

The application uses React state for:

- Dark mode toggle
- Shopping cart contents
- Product category filtering

---

## Props

State and event handlers are passed between components using props.

### Component Structure

```txt
App
 ├── DarkModeToggle
 ├── ProductList
 │     └── ProductCard
 └── Cart
```

---

## Event Handling

The app uses:

- `onClick`
- `onChange`

to manage user interaction.

---

## Conditional Rendering

Examples include:

- Dark/light theme switching
- Empty product filtering state
- Dynamic button text
- Dynamic cart count

---

# Styling

The application uses:

- CSS Modules
- Conditional class rendering
- Dynamic dark/light themes

Dark mode changes:

- Background color
- Text color
- Overall application appearance

---

# File Structure

```txt
src/
│
├── components/
│   ├── Cart.jsx
│   ├── DarkModeToggle.jsx
│   ├── ProductCard.jsx
│   └── ProductList.jsx
│
├── styles/
│   ├── DarkMode.module.css
│   └── ProductCard.module.css
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

# Running the Project

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

or

```bash
npm start
```

depending on the project setup.

---

# Learning Objectives

By completing this project, you will practice:

- React component creation
- State management with hooks
- Passing props between components
- Handling user events
- Conditional rendering
- Dynamic filtering
- CSS Modules
- Theme switching

---


# Author

Created by Matthew Swanberg as part of a lab for course 4 mod 5.