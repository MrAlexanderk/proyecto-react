import {useState} from 'react'
import { FormCheck } from 'react-bootstrap';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [error, setError] = useState(false);
    const [terms, setTerms] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(error){
            return;
        }
        console.log("Formulario enviado", { email, password, newPassword }); 
    };

    const handleError = (passwordValue, newPasswordValue) => {
        setErrorMessage('');
        
        const isMatchError = passwordValue !== newPasswordValue;
        const isMinLengthError = newPasswordValue.length < 6 || passwordValue.length < 6;
    
        if (isMinLengthError || isMatchError) {
            setError(true);
            let errorMes = `${isMinLengthError ? "*La nueva contraseña debe tener al menos 6 caracteres.<br/>" : ""}
                            ${isMatchError ? "*Las contraseñas no coinciden." : ""}`;

            setErrorMessage(errorMes);

            return;
        } 
        
        else {
            setError(false);
        }
    };    

  return (
    <>
        <form id="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <h2>Sign Up</h2>
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
                        handleError(e.target.value, newPassword); 
                    }} 
                    required 
                    placeholder="Create password"
                />
                <label htmlFor="new-password" type="password" >Confirm New Password</label>
                <input 
                    type="password" 
                    id="new-password" 
                    name="new-password" 
                    onChange={(e) => { 
                        setNewPassword(e.target.value); 
                        handleError(password, e.target.value); 
                    }} 
                    required 
                    placeholder="Confirm password"
                />
                <small className="text-danger" dangerouslySetInnerHTML={{ __html: errorMessage }}></small>
                <FormCheck className="d-flex align-items-center my-2 p-0">
                    <FormCheck.Input type="checkbox" id="terms" required className="m-0 mx-1 me-2" onChange={(e) => setTerms(e.target.value)} />
                    <FormCheck.Label htmlFor="terms" required className="m-0">I agree to the terms and conditions</FormCheck.Label>
                </FormCheck>
                <button 
                        className={`btn mt-3 ${error || !terms || !email || !newPassword || !password ? "btn-secondary" : "btn-success"}`} 
                        type="submit" 
                        disabled={error || !terms || !email || !newPassword || !password} >
                    Sign Up</button>
            </div>
        </form>
    </>
  )
}

export default Register