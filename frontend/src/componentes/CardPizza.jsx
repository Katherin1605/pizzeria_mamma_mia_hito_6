import React from 'react';

const CardPizza = ({ id, name, price, ingredients, img, desc, addToCart }) => {

    return (
        <>
            <div className="card h-100">
                <img 
                    src={img} 
                    className="card-img-top" 
                    alt={name} 
                    style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="card-body p-3">
                    <h5 className="card-title text-center border-bottom pb-2 mb-2">
                        Pizza {name}
                    </h5>
                    <p className="text-center text-muted small mb-2" style={{ fontSize: '0.8rem', lineHeight: '1.2' }}>
                        {desc.length > 100 ? desc.substring(0, 100) + '...' : desc}
                    </p>
                    <p className='text-center text-body-tertiary mb-1 small'>
                        Ingredientes:
                    </p>
                    <ul className="text-center border-bottom pb-2 mb-2 list-unstyled small">
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>🍕 {ingredient}</li>
                        ))}
                    </ul>
                    <h6 className="text-center mb-3">
                        Precio: ${price.toLocaleString()}
                    </h6>
                    <div className='d-flex justify-content-between gap-2'>
                        <button className="btn btn-outline-dark btn-sm flex-fill">Ver más 👀</button>
                        <button 
                            className="btn btn-dark btn-sm flex-fill"
                            onClick={() => addToCart({ id, name, price, img })}
                        >
                            Añadir 🛒
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardPizza