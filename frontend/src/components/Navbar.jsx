import { Link} from 'react-router-dom';
import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
    const { cart, addToCart, removeFromCart, total } = useContext(CartContext);
    const [token, setToken] = useState(true);

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Mamma Mia!</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav gap-3 ms-auto">
                        <Link className="nav-link active option" aria-current="page" to="/">🍕Home</Link>
                        <Link className={`nav-link option ${!token ? 'd-none' : ''}`} to="/profile">🔓Profile</Link>
                        <Link className={`nav-link option ${!token ? 'd-none' : ''}`} to="/login" onClick={() => setToken(false)}>🔒 Logout</Link>

                        <Link className={`nav-link option ${token ? 'd-none' : ''}`} to="/login">🔐Login</Link>
                        <Link className={`nav-link option ${token ? 'd-none' : ''}`} to="/register">🔐Register</Link>
                        <Link className="nav-link option" to="/cart">🛒Total: ${total.toLocaleString("es-CL")}</Link>
                    </div>
                </div>
            </div>
        </nav>
      </>
    )
  }
  
  export default Navbar
  