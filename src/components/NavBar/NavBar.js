import { Link, useLocation } from 'react-router-dom';
import Buscador from '../BuscadorProductos/Buscador';
import CartWitget from '../CartWidget/CartWidget';
import SliderHome from '../slider/slider';

const background = {
    'accesorios': 'bgAccesorios',
    'juguetes': 'bgJuguetes',
    'calzado': 'bgCalzado'
}

function getBackground(url) {
    if(url.includes('category')) {
        return background[url.split('/')[2]];
    }
    if (url.includes('item') || url.includes('carrito') ||  url.includes('checkout') || url.includes('exito')) {
        return 'bgItem';
    }
    return 'home position-absolute';
}

const NavBar = () => {
    const location = useLocation();
    const fondo = getBackground(location.pathname);

    return (
        <>
        <div className={`h-bg ${fondo}`}>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div id="logo" className="d-flex flex-column m-3">
                        <Link to="/">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/logo-sombreado.png`} width="40" alt=""/>
                        </Link>
                        <span className="titulo-logo text-white fw-bold fs-5">
                            Elephant
                        </span>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                    </span>
                    <i className="fas fa-bars text-white mx-3 fs-4"></i>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center d-flex m-3" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-between aling-items-start">
                            <li className={`nav-item p-3 m-3 ${location.pathname === '/category/accesorios' ? 'active':''}`}>
                                <Link
                                    to="/category/accesorios"
                                    className="nav-link text-white fw-bold text-capitalize fs-4"
                                >
                                    accesorios
                                </Link>
                            </li>
                            <li className={`nav-item p-3 m-3 ${location.pathname === '/category/juguetes' ? 'active':''}`}>
                                <Link
                                    to="/category/juguetes"
                                    className="nav-link text-white fw-bold text-capitalize fs-4"
                                >
                                    juguetes
                                </Link>
                            </li>
                            <li className={`nav-item p-3 m-3 ${location.pathname === '/category/calzado' ? 'active':''}`}>
                                <Link 
                                    to="/category/calzado"
                                    className="nav-link text-white fw-bold text-capitalize fs-4" 
                                    >
                                        Calzado
                                </Link>
                            </li>
                        </ul>
                        <form className="position-relative">
                            <Buscador />
                            <CartWitget />
                        </form>
                    </div>
                </div>
            </nav>
            {
                location.pathname.includes('category') 
                &&<div className ="titulo m-4">
                    {location.pathname.split('/')[2]}
                </div>
            }            
        </div>
            {location.pathname === '/' && <SliderHome />}
        </>
    )
}

export default NavBar;
