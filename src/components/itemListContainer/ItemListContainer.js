import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import ItemList from "./itemList/itemList";
import { useParams } from "react-router";
import db from "../../db/firebase";
import { collection, getDocs, query, where  } from "firebase/firestore";

const ItemListContainer = () => {

    const {category} = useParams();
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [mensaje, setMensaje] = useState('Cargando....');

    useEffect(() => {
        const prod = category ? query(collection(db, 'productos' ), where('category', '==',  category)) 
        : collection(db, 'productos' );
        
        getDocs(prod).then(respuesta => {
            const resultado = respuesta.docs.map(doc => {
                return {
                    ...doc.data()
                }
            });
            setProductos(resultado);
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