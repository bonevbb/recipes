import { useContext } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';

import './Header.css';

export default function Header(){

    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogoutHandler = (e) => {
        e.preventDefault();
        
        authService.logout(user.accessToken)
            .then(() => {
                logout();
                navigate('/');
        });
    }

    let guestNavigationButtons = (
        <>
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li>
                        <NavLink 
                            className={({ isActive }) => isActive ? "nav-link px-2 link-dark active-nav-link" : "nav-link px-2 link-dark"}
                            to="/catalog" 
                        >
                            All recipes
                        </NavLink>
                    </li>
            </ul>
            <div className="col-md-4 text-end">
                <NavLink className="btn btn-outline-primary me-2" to="/login">Login</NavLink>
                <NavLink to="/register" className="btn btn-primary" >Register</NavLink>
            </div>
        </>
    );

    let userNavigationButtons = (
        <>
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li>
                        <NavLink to="/catalog" className="nav-link px-2 link-dark">All recipes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/create-recipe" className="nav-link px-2 link-dark">Create recipe</NavLink>
                    </li>
                    <li>
                        <NavLink to="/create-recipe" className="nav-link px-2 link-dark">My recipes</NavLink>
                    </li>
            </ul>
            <div className="col-md-4 text-end">
                <span className="me-2">Welcome, {user.email}</span>
                <NavLink className="btn btn-outline-info me-2" to="/logout" onClick={onLogoutHandler}>Logout</NavLink>
            </div>
        </>
    );

    return (
        <section id="app-header">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                
                <NavLink className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none" to="/">
                    <i className="fas fa-2x fa-mortar-pestle text-primary"></i>
                    <span className="ms-1 pt-4 text-uppercase text-primary">
                        <h5>React recipes</h5>
                    </span>
                </NavLink>

               

                {   
                    user.email
                        ? userNavigationButtons
                        : guestNavigationButtons
                }
                    {/* <NavLink className="btn btn-outline-primary me-2" to="/login">Login</NavLink>
                    <a href="/logout" className="btn btn-outline-info me-2">Logout</a>
                    <button type="button" className="btn btn-primary">Register</button> */}
                {/* </div> */}
                
            </header>
        </section>
    );

}