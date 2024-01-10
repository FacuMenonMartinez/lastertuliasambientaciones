import logo from "../../assets/recursos/imagenes/tertuliasLogo.png";
import { Link } from "react-router-dom";
import "./navBar.css";
function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navBar">

            <div class="container-fluid">
                <Link to='/' class="navbar-brand">
                    <img className="navBarLogo" src={logo} />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">

                    <ul class="navbar-nav  navBarMenu">
                        <li class="nav-item">
                            <Link to='/sobreNosotros' class="nav-link" aria-current="page" href="#">Sobre Nosotros</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/contacto' class="nav-link" href="#">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>)
}

export default NavBar