import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark" data-bs-theme='dark'>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Navbar</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/users">Nationalities</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
