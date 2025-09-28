import React, { createContext, useContext, useState } from 'react';
import { pizzaCart } from '../assets/js/pizzas';

// Crear el contexto
const CartContext = createContext();

// Hook personalizado para usar el contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }
  return context;
};

// Componente Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(pizzaCart);

  // Función para agregar pizza al carrito
  const addToCart = (pizza) => {
    const existingItem = cart.find(item => item.id === pizza.id);
    
    if (existingItem) {
      // Si la pizza ya existe, aumentar la cantidad
      setCart(cart.map(item => 
        item.id === pizza.id 
          ? { ...item, count: item.count + 1 }
          : item
      ));
    } else {
      // Si es una pizza nueva, agregarla al carrito
      const newItem = {
        id: pizza.id,
        name: pizza.name,
        price: pizza.price,
        img: pizza.img,
        count: 1
      };
      setCart([...cart, newItem]);
    }
  };

  // Función para aumentar cantidad
  const increaseQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    ));
  };

  // Función para disminuir cantidad
  const decreaseQuantity = (id) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        if (item.count > 1) {
          return { ...item, count: item.count - 1 };
        } else {
          return null;
        }
      }
      return item;
    }).filter(item => item !== null));
  };

  // Función para calcular el total
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.count), 0);
  };

  // Función para obtener la cantidad total de items
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.count, 0);
  };

  const value = {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    calculateTotal,
    getTotalItems
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};