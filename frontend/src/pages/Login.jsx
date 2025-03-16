import {useState, useContext} from 'react'
import { FormCheck } from 'react-bootstrap';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { UserContext } from '../context/UserContext';

const Login = () => {
    const {token, login} = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [error, setError] = useState(false);

    const emailData = "GranMaestroPanadero@gmail.com";
    const passwordData = "123456";

    const handleSubmit = (event) => {
        event.preventDefault();
        if(error){
            return;
        }
        
        const MySwal = withReactContent(Swal)
        
        if(email.toLowerCase() === emailData.toLowerCase() && password === passwordData){
            login();
            MySwal.fire({
                title: <p>Acceso concedido</p>,
                didOpen: () => {
                    // `MySwal` is a subclass of `Swal` with all the same instance & static methods
                    MySwal.fire(<p>Bienvenido/a! 🦔</p>)
                },
                })
                  
        }else{
            MySwal.fire({
                title: <p>Error al ingresar</p>,
                didOpen: () => {
                    // `MySwal` is a subclass of `Swal` with all the same instance & static methods
                    MySwal.fire(<p>El correo y la contraseña no coinciden. Vuelva a intentar</p>)
                },
                })
        }

    };

  return (
    <>
        <form id="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <h2>Log In</h2>
                <hr></hr>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required placeholder="Your email"></input>

                <label htmlFor="password">New Password</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    onChange={(e) => { 
                        setPassword(e.target.value); 
                    }} 
                    required 
                    placeholder="Create password"
                />
                
                <small className="text-danger" dangerouslySetInnerHTML={{ __html: errorMessage }}></small>

                <button 
                        className={`btn mt-3 ${error || !email || !password ? "btn-secondary" : "btn-success"}`} 
                        type="submit" 
                        disabled={error || !email || !password} >
                    Log In</button>
            </div>
        </form>
    </>
  )
}

export default Login