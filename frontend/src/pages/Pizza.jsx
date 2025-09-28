import CardPizza from "../componentes/CardPizza"
import { useState, useEffect } from 'react'

const Pizza = ({ addToCart }) => {
  const [pizza, setPizza] = useState(null)

  async function getPizza() {
    const response = await fetch('http://localhost:5000/api/pizzas/p001')
    const data = await response.json()
    setPizza(data)
  }

  useEffect(() => {
    getPizza()
  }, [])

  return (
    <div className='container my-4'>
      <div className='row justify-content-center'>
        {pizza && (
          <div className='col-md-6 col-lg-4'>
            <CardPizza
              id={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
              desc={pizza.desc}
              addToCart={addToCart}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Pizza
