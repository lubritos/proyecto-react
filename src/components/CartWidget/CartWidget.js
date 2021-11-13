import { Link } from "react-router-dom";

const CartWitget = () => {

    return (
        <div>
            <Link to="/carrito">
                <i className="fas fa-shopping-cart text-white fs-4 mx-3"></i>
            </Link>
        </div>
    )
}

export default CartWitget;