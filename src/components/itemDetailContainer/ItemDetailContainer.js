import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../itemDetail/ItemDetail';
import NavBar from '../NavBar/NavBar';

const ItemDetailContainer = ()=> {

    const {id} = useParams();
    const [producto, setProducto] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [mensaje, setMensaje] = useState('Cargando....');

    async function getProductos() {
        const Api = await fetch('https://6184984aac0b850017489ee4.mockapi.io/productos');
        return await(Api.json());
    }

    useEffect(() => {
        const Api = getProductos();

        Api.then((productos) => {
            const producto=productos.filter(prod => prod.id === parseInt(id, 10))
            setProducto(producto);
            setCargando(false);
        }).catch(error => {
            setCargando(true);
            setMensaje('No se pueden cargar los productos');
        });
    },[cargando, id]);

    return (
        <div>
            <NavBar />
            <div className="productos fs-5 fw-light m-3 p-3">
                {cargando ? <p>{mensaje}</p> : <ItemDetail {...producto[0]} />}
            </div>
        </div>
    )
}

export default ItemDetailContainer;