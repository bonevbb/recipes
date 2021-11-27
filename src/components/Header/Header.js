import { NavLink } from 'react-router-dom';

export default function Header(){

    return (
        <section id="app-header">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                
                <NavLink className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none" to="/">
                    <i className="fas fa-2x fa-mortar-pestle text-primary"></i>
                    <span className="ms-1 pt-4 text-uppercase text-primary">
                        <h5>React recipes</h5>
                    </span>
                </NavLink>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li>
                        <NavLink to="/catalog" activeClassName="text-primary" className="nav-link px-2 link-dark">Catalog</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/" className="nav-link px-2 link-dark">Create recipe</NavLink>
                    </li> */}
                </ul>

                <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-outline-primary me-2">Login</button>
                    <a href="/logout" className="btn btn-outline-info me-2">Logout</a>
                    <button type="button" className="btn btn-primary">Register</button>
                </div>
            </header>
        </section>
    );

}