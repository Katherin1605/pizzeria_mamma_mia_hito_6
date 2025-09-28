import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container-fluid bg-light min-vh-100 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <div className="mb-5">
          <div className="display-1 fw-bold text-warning mb-3">🍕</div>
          <h1 className="display-1 fw-bold text-dark mb-3">404</h1>
          <h2 className="h2 text-muted mb-4">¡Oops! Pizza no encontrada</h2>
          <p className="lead text-muted mb-5">
            Parece que esta página se fue a hornear a otro lado.<br/>
            No te preocupes, ¡tenemos muchas más pizzas deliciosas esperándote!
          </p>
        </div>
        
        <div className="mb-4">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="bg-white p-4 rounded shadow-sm border">
                <div className="row text-center">
                  <div className="col-4">
                    <div className="h3 text-warning">🧀</div>
                    <small className="text-muted">Queso</small>
                  </div>
                  <div className="col-4">
                    <div className="h3 text-danger">🍅</div>
                    <small className="text-muted">Tomate</small>
                  </div>
                  <div className="col-4">
                    <div className="h3 text-success">🌿</div>
                    <small className="text-muted">Albahaca</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
          <Link to="/" className="btn btn-warning btn-lg px-5">
            <i className="fas fa-home me-2"></i>
            Volver al Inicio
          </Link>
          <Link to="/cart" className="btn btn-outline-dark btn-lg px-5">
            <i className="fas fa-shopping-cart me-2"></i>
            Ver Carrito
          </Link>
        </div>
        
        <div className="mt-5">
          <small className="text-muted">
            Error 404 - Página no encontrada | Pizzeria Mamma Mia
          </small>
        </div>
      </div>
    </div>
  );
};

export default NotFound;