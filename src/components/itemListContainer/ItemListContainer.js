import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import ItemList from "./itemList/itemList";
import { useParams } from "react-router";

const ItemListContainer = () => {

    const {category} = useParams();
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [mensaje, setMensaje] = useState('Cargando....');
    async function getProductos() {
        const Api = await fetch('https://6184984aac0b850017489ee4.mockapi.io/productos');
        return await(Api.json());
    }

    useEffect(() => {
        const Api = getProductos();
        Api.then((productos) => {
            const prodCategory = productos.filter(prod => prod.category === category);
            setProductos(category ? prodCategory: productos);
            setCargando(false);
        }).catch(error => {
            setCargando(true);
            setMensaje('No se pueden cargar los productos');
        });
    },[cargando,category]);

    return (
        <div>
            <div className="productos fs-5 fw-light m-3 p-3">
                {cargando ? <p>{mensaje}</p> : <ItemList productos={productos} />}
            </div>
        </div>
    )
}

export default ItemListContainer;