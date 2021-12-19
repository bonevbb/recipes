import { useState } from 'react';
import { useNavigate } from 'react-router';

import * as authService from '../../services/authService';
import { useAuth } from '../../contexts/AuthContext';

import './Register.css';

export default function Register() 
{
    const initialErrorMsg = '';

    const navigate = useNavigate();
    const { login } = useAuth();
    const [errorMsg, setErrorMsg] = useState(initialErrorMsg);

    const registerSubmitHandler = (e) => {

        e.preventDefault();
        setErrorMsg(initialErrorMsg);

        let { email, password, confirmPass } = Object.fromEntries(new FormData(e.currentTarget));

        if(password !== confirmPass){
            setErrorMsg('The passwords do not match!');
        }
        else{
            authService.register(email, password)   
                .then(authData => {
                    login(authData);
                    
                    navigate('/catalog');
                })
                 .catch(err => {
                    setErrorMsg(err);
                });
        }

    }

    return (
        <section id="login-page" className="login">
            <main className="form-signin">
                <form id="login-form" onSubmit={registerSubmitHandler} method="POST">
                    <h1 className="h3 mb-3 fw-normal">Register</h1>

                    {
                        errorMsg && <p className="text-danger text-center">
                            {errorMsg}
                        </p>
                    }

                    <div className="form-floating mb-2">
                        <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating mb-2">
                        <input type="password" className="form-control" id="password" name="password" placeholder="Password"/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-floating mb-2">
                        <input type="password" className="form-control" id="repeat-pass" name="confirmPass" placeholder="Repeat Password"/>
                        <label htmlFor="floatingPassword">Repeat Password</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
                </form>
            </main>
           
        </section>
    );
}