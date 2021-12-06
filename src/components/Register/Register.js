import { useContext } from 'react';
import { useNavigate } from 'react-router';

import * as authService from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';

import './Register.css';

export default function Register() 
{
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const registerSubmitHandler = (e) => {

        e.preventDefault();

        let { email, password } = Object.fromEntries(new FormData(e.currentTarget));

        authService.register(email, password)   
            .then(authData => {
                login(authData);
                
                navigate('/catalog');
            });
    }

    return (
        <section id="login-page" className="login">
            <main className="form-signin">
                <form id="login-form" onSubmit={registerSubmitHandler} method="POST">

                    <h1 className="h3 mb-3 fw-normal">Register</h1>

                    <div className="form-floating mb-2">
                        <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="password" className="form-control" id="password" name="password" placeholder="Password"/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="password" className="form-control" id="repeat-pass" name="confirm-pass" placeholder="Repeat Password"/>
                        <label htmlFor="floatingPassword">Repeat Password</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>

                </form>
            </main>
           
        </section>
    );
}