import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/CartContext"

const CartWitget = () => {
    const {cart} = useContext(Context)

    const mostrarCantidad = ( )=>{
        let suma = 0;
        cart.map(producto => suma += producto.cantidad)
        return suma;        
    }
    
    return mostrarCantidad() &&( 
        <div>
            <Link to="/carrito" className="position-relative">
                <i className="fas fa-shopping-cart text-white fs-4 mx-3"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {mostrarCantidad()}
                    
                </span>
            </Link>
        </div>
    )
}

export default CartWitget;