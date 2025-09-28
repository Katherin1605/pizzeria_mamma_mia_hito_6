import React from 'react';
import Header from "../componentes/Header"
import CardPizza from "../componentes/CardPizza"
import { usePizza } from '../context/PizzaContext';
import { useCart } from '../context/CartContext';

const Home = () => {
    const { pizzas, loading, error } = usePizza();
    const { addToCart } = useCart();

    if (loading) {
        return (
            <>
                <Header />
                <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            </>
        );
    }

    if (error) {
        return (
            <>
                <Header />
                <div className="alert alert-warning m-4" role="alert">
                    <h4 className="alert-heading">¡Atención!</h4>
                    <p>No se pudieron cargar las pizzas desde el servidor. Mostrando datos locales.</p>
                </div>
            </>
        );
    }


    return (
        <>
            <Header />
            <div className='row p-4 my-4'>
                {pizzas.map((pizza) => (
                    <div key={pizza.id} className='col-md-4 mb-4'>
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
                ))}
            </div>
        </>
    )
}

export default Home