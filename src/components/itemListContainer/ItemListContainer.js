import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import ItemList from "./itemList/itemList";
import productosJson from '../../api/products.json';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    useEffect(() => {
        const Api = new Promise((respuesta, rechazo) => {
            setTimeout(() => {
                respuesta(productosJson)
            }, 2000);
        });

        Api.then((productos) => {
            setProductos(productos);
            setCargando(false);
        })
    },[cargando]);

    return (
        <div className="fs-5 fw-light m-3 p-3">
            {cargando ? <p>Cargando....</p> : <ItemList productos={productos} />}
        </div>
    )
}

export default ItemListContainer;