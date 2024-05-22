import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <Link to="./" class="navbar-brand">Book Management System</Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <Link to="./Categories" class="nav-link active" aria-current="page"> Categories</Link>
              </li>
              <li class="nav-item">
              <Link to="./Suppliers" class="nav-link"> Suppliers </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
