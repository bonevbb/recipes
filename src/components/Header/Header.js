import { useNavigate, NavLink } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';

import './Header.css';

export default function Header(){

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const onLogoutHandler = (e) => {
        e.preventDefault();
        
        authService.logout(user.accessToken)
            .then(() => {
                logout();
                navigate('/login');
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
                <NavLink className="btn recipe-btn-outline me-2" to="/login">Login</NavLink>
                <NavLink to="/register" className="btn recipe-btn" >Register</NavLink>
            </div>
        </>
    );

    let userNavigationButtons = (
        <>
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li>
                        <NavLink 
                        className={({ isActive }) => isActive ? "nav-link px-2 link-dark active-nav-link" : "nav-link px-2 link-dark"}
                        to="/catalog">All recipes</NavLink>
                    </li>
                    <li>
                        <NavLink 
                        className={({ isActive }) => isActive ? "nav-link px-2 link-dark active-nav-link" : "nav-link px-2 link-dark"}
                        to="/create-recipe">Add recipe</NavLink>
                    </li>
                    <li>
                        <NavLink 
                        className={({ isActive }) => isActive ? "nav-link px-2 link-dark active-nav-link" : "nav-link px-2 link-dark"}
                        to="/my-recipes">My recipes</NavLink>
                    </li>
            </ul>
            <div className="col-md-4 text-end">
                <span className="me-2">Welcome, {user.email}</span>
                <NavLink className="btn recipe-btn-outline me-2" to="/logout" onClick={onLogoutHandler}>Logout</NavLink>
            </div>
        </>
    );

    return (
        <section id="app-header">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                
                <NavLink className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none pb-3" to="/">
                    <i className="fas fa-2x fa-mortar-pestle text-color"></i>
                    <span className="ms-1 pt-4 text-uppercase text-color">
                        <h5>React recipes</h5>
                    </span>
                </NavLink>

                {   
                    user.email
                        ? userNavigationButtons
                        : guestNavigationButtons
                }
                
            </header>
        </section>
    );

}