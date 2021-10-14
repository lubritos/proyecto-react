import Logo from '../assets/img/logo.png';
const Footer = () => {
    return (
        <footer>
            <div id="footer" className="bg-purple mt-3 mb-3">
                <div className="d-flex align-items-center justify-content-between w-100 h-100">
                    <div className="d-flex align-items-center m-3">
                        <div id="logo" className="d-flex flex-column">
                            <span>
                                <img src={Logo} width="40" alt=""/>
                            </span>
                            <span className="text-white fw-bold fs-5">
                                Elephant
                            </span>
                        </div>
                    </div>
                    <div id="redes">
                        <i className="fab fa-facebook-f text-white m-3 fs-4"></i>
                        <i className="fab fa-twitter text-white m-3 fs-4"></i>
                        <i className="fab fa-pinterest-p text-white m-3 fs-4"></i>
                        <i className="far fa-envelope text-white m-3 fs-4"></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;