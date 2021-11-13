import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../itemCount/ItemCount";
import { Context } from "../../context/CartContext";
import Toast from "../toast/toast";

const ItemDetail = ({id , title, image, description, stock, price}) => {
    const [comprar, setComprar] = useState(false)
    const {agregarProductos} = useContext(Context)
    const agregar = (unidades) => {
        setComprar(true);
        agregarProductos ({id, title, image, price }, unidades)
    }

    const urlImg = `${process.env.PUBLIC_URL}/assets/productos/`;
    const css = {
        width: '25rem'
    };
    return (
        <div className="d-flex w-100 justify-content-center align-items-center m-3" >
            <Toast mensaje='producto agregado' fondo='bg-toast' mostrarToast={comprar}/>
            <div className="m-3">
                <img src={urlImg + image} alt="" style={css}/>
            </div>
            <div className="descripcion d-flex flex-column m-3 align-items-center">
                <h1 className="text-uppercase fw-bold d-flex justify-content-start">{title}</h1>
                <span className="d-flex justify-content-center h-100">{description}</span>
                <span className="text-uppercase fw-bold fs-3 d-flex align-items-center justify-content-end">${price}</span>
                <ItemCount stock={stock} onAdd={agregar} mostrar={comprar}/>
            </div>
        </div>
    )
}

export default ItemDetail;