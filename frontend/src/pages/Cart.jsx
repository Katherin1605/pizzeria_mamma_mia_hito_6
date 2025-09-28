import React from 'react'
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, calculateTotal } = useCart();

  return (
    <div className='container my-4 ps-5'>
      <div className='card h-100'>
        <div className='card-header bg-dark text-white'>
          <h3 className='text-center'>
            Carrito de compras
          </h3>
        </div>
        <div className='card-body ps-5'>
          {cart.length === 0 ? (
            <div className="text-start">
              <h5 className="text-muted">Detalles del pedido:</h5>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="d-flex align-items-center border-bottom py-3">
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  className="me-3"
                />
                <div className="flex-grow-1">
                  <h5 className="mb-1">Pizza {item.name}</h5>
                  <p className="mb-1">Precio: ${item.price.toLocaleString()}</p>
                </div>
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className="mx-3 fw-bold">{item.count}</span>
                  <button
                    className="btn btn-outline-success btn-sm"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
                <div className="ms-3">
                  <strong>${(item.price * item.count).toLocaleString()}</strong>
                </div>
              </div>
            ))
          )}
          <div className="mt-4">
            <h4>Total: ${calculateTotal().toLocaleString()}</h4>
            <button className="btn btn-dark">
              Pagar 💳
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
