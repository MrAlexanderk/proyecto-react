import { useContext, useState } from 'react'
import { FormCheck } from 'react-bootstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';

const MySwal = withReactContent(Swal)

const Register = () => {
    const { register } = useContext(UserContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [error, setError] = useState(false)
    const [terms, setTerms] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        if(error) return
        
        try {
            await register({ 
                email: email.trim().toLowerCase(), 
                password 
            })
            
            MySwal.fire({
                title: "¡Registro exitoso!",
                text: `Bienvenido ${email}`,
                icon: "success",
            }).then(() => {
                navigate("/");
            });
            
        } catch (error) {
            const errorMsg = error.response?.data?.message || "Error en el registro"
            MySwal.fire({
                title: "Error",
                text: errorMsg,
                icon: "error"
            })
        }
    }

    const isStrongPassword = (pass) => {
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(pass)
    }

    const handleError = (passwordValue, newPasswordValue) => {
        setErrorMessage('')
        const errors = []
        
        if (passwordValue !== newPasswordValue) errors.push("* Las contraseñas no coinciden")
        if (passwordValue.length < 6) errors.push("* Mínimo 6 caracteres")
        if (!isStrongPassword(passwordValue)) errors.push("* Debe contener letras y números")
        
        if (errors.length > 0) {
            setError(true)
            setErrorMessage(errors.join("<br/>"))
        } else {
            setError(false)
        }
    }    

    return (
        <form id="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <h2>Registro</h2>
                <hr/>
                
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    placeholder="Tu email"
                    value={email}
                />
                
                <label htmlFor="password">Contraseña</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    onChange={(e) => { 
                        setPassword(e.target.value)
                        handleError(e.target.value, newPassword)
                    }} 
                    required 
                    placeholder="Crea tu contraseña"
                    value={password}
                />
                
                <label htmlFor="new-password">Confirmar Contraseña</label>
                <input 
                    type="password" 
                    id="new-password" 
                    name="new-password" 
                    onChange={(e) => { 
                        setNewPassword(e.target.value)
                        handleError(password, e.target.value)
                    }} 
                    required 
                    placeholder="Confirma tu contraseña"
                    value={newPassword}
                />
                
                <small 
                    className="text-danger" 
                    dangerouslySetInnerHTML={{ __html: errorMessage }}
                />
                
                <FormCheck className="d-flex align-items-center my-2 p-0">
                    <FormCheck.Input 
                        type="checkbox" 
                        id="terms" 
                        required 
                        className="m-0 mx-1 me-2" 
                        onChange={(e) => setTerms(e.target.checked)}
                    />
                    <FormCheck.Label htmlFor="terms" className="m-0">
                        Acepto los términos y condiciones
                    </FormCheck.Label>
                </FormCheck>
                
                <button 
                    className={`btn mt-3 ${
                        error || !terms || !email || !password ? "btn-secondary" : "btn-success"
                    }`} 
                    type="submit" 
                    disabled={error || !terms || !email || !password}
                >
                    Registrarse
                </button>
            </div>
        </form>
    )
}

export default Register