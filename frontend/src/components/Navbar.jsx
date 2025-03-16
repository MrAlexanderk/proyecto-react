import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
    const { total } = useContext(CartContext);
    const { token, logout } = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Mamma Mia!</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav gap-3 ms-auto">
                        <Link className="nav-link active option" aria-current="page" to="/">🍕Home</Link>

                        {token ? (
                            <>
                                <Link className="nav-link option" to="/profile">🔓 Profile</Link>
                                <Link className="nav-link option" to="#" onClick={logout}>🔒 Logout</Link>
                            </>
                        ) : (
                            <>
                                <Link className="nav-link option" to="/login">🔐 Login</Link>
                                <Link className="nav-link option" to="/register">🔐 Register</Link>
                            </>
                        )}

                        <Link className="nav-link option" to="/cart">🛒 Total: ${total.toLocaleString("es-CL")}</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
