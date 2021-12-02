import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

export default function Header(){

    const { user } = useContext(AuthContext);

    let guestNavigationButtons = (
        // <div id="guest">
            <div className="col-md-4 text-end">
                <Link className="btn btn-outline-primary me-2" to="/login">Login</Link>
                <Link to="/register" className="btn btn-primary" >Register</Link>
            </div>
        // </div>
    );

    let userNavigationButtons = (
        <div id="user">
            <span className="me-2">Welcome, {user.email}</span>
            {/* <Link className="button" to="/my-recipes">My Recipe</Link> */}
            {/* <Link className="button" to="/create">Create Recipe</Link> */}
            <Link className="btn btn-outline-info me-2" to="/logout">Logout</Link>
        </div>
    );

    return (
        <section id="app-header">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                
                <Link className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none" to="/">
                    <i className="fas fa-2x fa-mortar-pestle text-primary"></i>
                    <span className="ms-1 pt-4 text-uppercase text-primary">
                        <h5>React recipes</h5>
                    </span>
                </Link>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li>
                        <Link to="/catalog" className="nav-link px-2 link-dark">Catalog</Link>
                    </li>
                    {/* <li>
                        <NavLink to="/" className="nav-link px-2 link-dark">Create recipe</NavLink>
                    </li> */}
                </ul>

                {   
                    user.email
                        ? userNavigationButtons
                        : guestNavigationButtons
                }
                    {/* <Link className="btn btn-outline-primary me-2" to="/login">Login</Link>
                    <a href="/logout" className="btn btn-outline-info me-2">Logout</a>
                    <button type="button" className="btn btn-primary">Register</button> */}
                {/* </div> */}
                
            </header>
        </section>
    );

}