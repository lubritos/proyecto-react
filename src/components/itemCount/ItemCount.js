import { useState } from "react"
import { Link } from "react-router-dom";

const ItemCount = (props) => {
    
    const [stock, setStock] = useState(props.stock);
    const [unidades, setUnidades] = useState(0);
    const [mensaje, setMensaje] = useState('');
    const manejoStock = {
        sumaStock:() => {
            if(stock === 0) {
                setMensaje('No hay mas stock')
            }
            else {
                setUnidades(unidades + 1)
                setStock(stock - 1)
            }

        },
        restaStock:() => {
            if(unidades === 0) {
                setMensaje('El stock no puede ser cero')

            }else {
                setUnidades(unidades - 1)
                setStock(stock + 1)
            }
        }
    }
    return (
        <div className="contador">
            <div>{mensaje}</div>
            {!props.mostrar && <div>
                <div className="d-flex justify-content-center aling-items-center m-3">
                    <button className="h-25 px-2 m-3 border border-2 " onClick={manejoStock.restaStock}>-</button>
                    <p className="m-3">{unidades}</p>
                    <button className="h-25 px-2 m-3 border border-2 " onClick={manejoStock.sumaStock}>+</button>
                </div>
                <div>
                    <p className="text-uppercase fw-bold m-3">stock disponible {stock}</p>
                </div>
            </div>
            }
            <div>
            {!props.mostrar ? <button 
                    className="btn btn-outline-purple shadow-none text-uppercase w-100 mt-3"
                    onClick={()=> props.onAdd(unidades)}>
                        comprar
                </button>
            :
                <button 
                    className="btn btn-outline-purple shadow-none text-uppercase w-100 mt-3 disabled"
                    onClick={()=> props.onAdd(unidades)}>
                        comprar
                </button>
            }   
            </div>
                <div className="termCompra m-3">
                    {props.mostrar && <Link className="linkCompra c-purple text-decoration-none text-uppercase"to="/carrito">Terminar compra</Link>}
                </div>
            </div>
    )
}
export default ItemCount;