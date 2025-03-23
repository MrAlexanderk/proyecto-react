import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { UserContext } from '../context/UserContext';

const Login = () => {
    const { login } = useContext(UserContext);
    const navigate = useNavigate(); 

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [error, setError] = useState(false);

    const MySwal = withReactContent(Swal);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (error) return;

        try {
            const normalizedEmail = email.toLowerCase();
            await login({ email: normalizedEmail, password });
    
        
            MySwal.fire({
                title: "Acceso concedido",
                text: "Bienvenido/a! 🦔",
                icon: "success",
            }).then(() => {
                navigate("/");
            });
        } catch (err) {

            setErrorMessage("El correo y la contraseña no coinciden. Vuelva a intentar");
            MySwal.fire({
                title: "Error al ingresar",
                text: "El correo y la contraseña no coinciden. Vuelva a intentar",
                icon: "error",
            });
        }
    };

    return (
        <>
            <form id="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <h2>Log In</h2>
                    <hr />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Your email"
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Enter password"
                    />
                    
                    <small className="text-danger">{errorMessage}</small>

                    <button 
                        className={`btn mt-3 ${error || !email || !password ? "btn-secondary" : "btn-success"}`} 
                        type="submit" 
                        disabled={error || !email || !password}>
                        Log In
                    </button>
                </div>
            </form>
        </>
    );
};

export default Login;
