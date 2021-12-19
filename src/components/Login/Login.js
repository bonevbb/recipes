import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';
import './Login.css';

export default function Login() 
{
    const { login } = useAuth();
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState('');

    const onLoginHandler = (e) => {

        e.preventDefault();
        setErrorMsg('');

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email, password)
            .then((authData) => {
                login(authData);

                navigate('/');
            })
            .catch(err => {
                setErrorMsg(err);
            });
    }

    return (
        <section id="login-page" className="login">
            <main className="form-signin">
                <form id="login-form" onSubmit={onLoginHandler} method="POST">
                    
                    <h1 className="h3 mb-3 fw-normal">Login</h1>

                    {
                        errorMsg && <p className="text-danger text-center">
                            {errorMsg}
                        </p>
                    }

                    <div className="form-floating mb-2 has-error">
                        <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating mb-2">
                        <input type="password" className="form-control" id="password" name="password" placeholder="Password"/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <button className="w-100 btn btn-lg recipe-btn" type="submit">Login</button>
                </form>
            </main>
        </section>
    );
}