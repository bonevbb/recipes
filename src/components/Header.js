
export default function Header(){
    return (
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center justify-content-between">
      
            <h1 className="logo">
                <a href="/home">
                  <i className="bx bxl-sketch bx-sm icon"></i>
                  DR
                  <p className="small" id="logo-text">Diamond recipes</p>
                </a>
            </h1>
      
            <nav id="navbar" className="navbar">
              <ul>
                <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                <li><a className="nav-link scrollto active" href="#our-mission">Our Mission</a></li>
                <li><a className="nav-link scrollto" href="#today-ideas">Today ideas</a></li>
                <li><a className="nav-link scrollto" href="#latest-recipes">Latest recipes</a></li>

                <span className="ms-4">|</span>

                <li><a className="nav-link scrollto" href="/">All recipes</a></li>
                <li><a className="nav-link scrollto" href="/">Create recipe</a></li>
                <li><a className="nav-link scrollto" href="/">Login</a></li>
                <li><a className="nav-link scrollto" href="/">Logout</a></li>
                <li><a className="nav-link scrollto" href="/">Register</a></li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
      
          </div>
        </header>
    )
}