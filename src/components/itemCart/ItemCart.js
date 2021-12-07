import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../context/CartContext"

const CartContainer = ()=>{
    const {cart, borrarProducto, clear, total} = useContext(Context)
    const urlImg = `${process.env.PUBLIC_URL}/assets/productos/`;
    return(
        <div className="d-flex justify-content-center w-100">
            <div className="d-flex flex-column justify-content-center align-items-center m-3 border border-2 cart" >
                <h1 className="text-uppercase c-purple fw-bold fs-4 my-4 mx-3">productos comprados</h1>
                <div className="d-flex justify-content-center flex-column w-100">
                    {cart.map((producto) => 
                        <div key={producto.id} className="itemCarrito d-flex position-relative flex-row justify-content-around align-items-center border-bottom">
                            <img src={ urlImg + producto.image} className="card-thumb" alt={producto.title}/>
                            <div className="descripCart d-flex flex-column align-items-center">
                                <div className="text-uppercase fw-bold w-100 h-50 m-3">{producto.title}</div>
                            </div>
                            <div className="fw-bold fs-6 c-purple">x{producto.cantidad}</div>
                            <div className="position-relative fw-bold align-items-end my-3 mx-5">$ {producto.price}</div>
                            <button className="delet fs-4 c-purple bg-transparent border-0 position-absolute end-0 m-3" onClick={() => borrarProducto(producto)}>
                            <i className="fas fa-trash-alt"></i>
                            </button>
                        </div>                    
                    )} 
                    <div className="d-flex justify-content-between align-items-center w-100 my-3">
                        <h2 className="text-uppercase fw-bold c-purple fs-4 ms-5">total</h2>
                        <div className="fw-bold c-purple fs-4 me-5">$ {parseFloat(total).toFixed(2)}</div>
                        
                    </div>               
                    <div className="d-flex justify-content-center w-100 mr-3">
                        <button className="d-flex justify-content-center btn btn-outline-purple shadow-none text-uppercase w-25 m-3" onClick={()=> clear()}>
                            Limpiar
                        </button>
                    </div>
                    <div className="h-100 w-100 d-flex align-items-end justify-content-between m-3">
                        <Link to="/" className="d-flex btn btn-outline-purple shadow-none text-uppercase mx-3">Seguir Comprando</Link>
                        <Link to="/checkout" className="d-flex btn btn-outline-purple shadow-none text-uppercase mx-3">continuar</Link>
                    </div>                    
                </div>
            </div>
        </div>
    )
}
export default CartContainer;
