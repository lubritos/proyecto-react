import { Link, useLocation } from 'react-router-dom';
import Buscador from '../BuscadorProductos/Buscador';
import CartWitget from '../CartWidget/CartWidget';
import SliderHome from '../slider/slider';

const NavBar = () => {
    const location = useLocation();
    const fondo = location.pathname === '/' ? 'home position-absolute': 'bgProductos';

    return (
        <>
        <div className={fondo}>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div id="logo" className="d-flex flex-column">
                        <Link to="/">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} width="40" alt=""/>
                        </Link>
                        <span className="text-white fw-bold fs-5">
                            Elephant
                        </span>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                    </span>
                    <i className="fas fa-bars text-white mx-3 fs-4"></i>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center d-flex" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-between aling-items-center">
                            <li className="nav-item p-3 m-3">
                                <Link className="nav-link text-white fw-bold text-capitalize fs-5" to="/category/accesorios">accesorios</Link>
                            </li>
                            <li className="nav-item p-3 m-3">
                                <Link className="nav-link text-white fw-bold text-capitalize fs-5" to="/category/juguetes">juguetes</Link>
                            </li>
                            <li className="nav-item p-3 m-3">
                                <Link className="nav-link text-white fw-bold text-capitalize fs-5" to="/category/calzado">Calzado</Link>
                            </li>
                        </ul>
                        <form className="position-relative">
                            <Buscador />
                            <CartWitget />
                        </form>
                    </div>
                </div>
            </nav>
        </div>
            {location.pathname === '/' && <SliderHome />}
        </>
    )
}

export default NavBar;
