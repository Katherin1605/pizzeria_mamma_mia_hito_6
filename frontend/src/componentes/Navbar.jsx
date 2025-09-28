import React from "react";
import { Link } from "react-router-dom";
import { useCart } from '../context/CartContext';

const formatNumber =(number) => number.toLocaleString('es-ES') 
const Navbar = () => {
    const { calculateTotal } = useCart();
    const total = calculateTotal();
    const token = false;

    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Pizzería Mamma Mía!</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="btn btn-outline-light" to="/">🍕 Home</Link>
                            </li>
                            {token? <li className="nav-item"><Link className="btn btn-outline-light mx-2" to="/profile">🔓 Profile</Link>
                            </li> : <li className="nav-item"><Link className="btn btn-outline-light mx-2" to="/login">🔐 Login</Link>
                            </li>}
                            {token? <li className="nav-item dropdown">
                                <button className="btn btn-outline-light" type="submit">🔒 Logout</button>
                            </li>
                            : <li className="nav-item dropdown">
                                <Link className="btn btn-outline-light" to="/register">🔐 Register</Link>
                            </li>
                            }
                            
                        </ul>
                        <div className="d-flex">
                            <Link className="btn btn-outline-info text-info" to="/cart">🛒 Total: $ {formatNumber(total)}</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar