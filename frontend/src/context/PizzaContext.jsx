import React, { createContext, useContext, useState, useEffect } from 'react';
import { pizzas as initialPizzas } from '../assets/js/pizzas';

// Crear el contexto
const PizzaContext = createContext();

// Hook personalizado para usar el contexto
export const usePizza = () => {
  const context = useContext(PizzaContext);
  if (!context) {
    throw new Error('usePizza debe ser usado dentro de un PizzaProvider');
  }
  return context;
};

// Componente Provider
export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPizza, setSelectedPizza] = useState(null);

  // Función para obtener todas las pizzas
  const fetchPizzas = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Intentar obtener datos de la API
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        if (!response.ok) {
          throw new Error('Error al obtener datos de la API');
        }
        const data = await response.json();
        setPizzas(data);
      } catch (apiError) {
        // Si falla la API, usar datos locales
        console.warn('API no disponible, usando datos locales:', apiError.message);
        setPizzas(initialPizzas);
      }
    } catch (err) {
      setError(err.message);
      // Como fallback, usar datos locales
      setPizzas(initialPizzas);
    } finally {
      setLoading(false);
    }
  };

  // Función para obtener una pizza específica
  const fetchPizzaById = async (id) => {
    try {
      setLoading(true);
      setError(null);
      
      // Intentar obtener de la API
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!response.ok) {
          throw new Error('Pizza no encontrada en la API');
        }
        const data = await response.json();
        setSelectedPizza(data);
        return data;
      } catch (apiError) {
        // Si falla la API, buscar en datos locales
        console.warn('API no disponible para pizza individual, usando datos locales:', apiError.message);
        const pizza = initialPizzas.find(p => p.id === id);
        if (pizza) {
          setSelectedPizza(pizza);
          return pizza;
        } else {
          throw new Error('Pizza no encontrada');
        }
      }
    } catch (err) {
      setError(err.message);
      setSelectedPizza(null);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Función para limpiar la pizza seleccionada
  const clearSelectedPizza = () => {
    setSelectedPizza(null);
  };

  // Función para buscar pizzas por nombre
  const searchPizzas = (searchTerm) => {
    if (!searchTerm.trim()) {
      return pizzas;
    }
    return pizzas.filter(pizza => 
      pizza.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pizza.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  // Cargar pizzas al montar el componente
  useEffect(() => {
    fetchPizzas();
  }, []);

  const value = {
    pizzas,
    loading,
    error,
    selectedPizza,
    fetchPizzas,
    fetchPizzaById,
    clearSelectedPizza,
    searchPizzas
  };

  return (
    <PizzaContext.Provider value={value}>
      {children}
    </PizzaContext.Provider>
  );
};