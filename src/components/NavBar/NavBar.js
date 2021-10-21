// import Logo from '../../assets';
import CartWitget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <div className="backgroundNavBar" style={{ height: '40rem'}}>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div id="logo" className="d-flex flex-column">
                        <span>
                            <img src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} width="40" alt=""/>
                        </span>
                        <span className="text-white fw-bold fs-5">
                            Elephant
                        </span>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center aling-items-center">
                        <li className="nav-item p-3 m-3">
                            <a className="nav-link text-white fw-bold text-capitalize fs-5 active" aria-current="page" href="#Home">Home</a>
                        </li>
                        <li className="nav-item p-3 m-3">
                            <a className="nav-link text-white fw-bold text-capitalize fs-5" href="#Link">ropa</a>
                        </li>
                        <li className="nav-item p-3 m-3">
                            <a className="nav-link text-white fw-bold text-capitalize fs-5" href="#Link">accesorios</a>
                        </li>
                        <li className="nav-item p-3 m-3">
                            <a className="nav-link text-white fw-bold text-capitalize fs-5" href="#Link">juguetes</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <i class="fas fa-search text-white fs-4 mx-3"></i>
                        <CartWitget />
                    </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
