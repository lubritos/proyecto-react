import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../itemDetail/ItemDetail';
import db from "../../db/firebase";
import { collection, getDocs, query, where } from '@firebase/firestore';

const ItemDetailContainer = ()=> {

    const {id} = useParams();
    const [producto, setProducto] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [mensaje, setMensaje] = useState('Cargando....');


    useEffect(() => {
        const prod = id ? query(collection(db, 'productos' ), where('id', '==',  parseInt(id, 10))) 
        : collection(db, 'productos' );
        
        getDocs(prod).then(respuesta => {
            const resultado = respuesta.docs.map(doc => {
                return {
                    ...doc.data()
                }
            });
            // const producto=resultado.filter(prod => prod.id === parseInt(id, 10))
            setProducto(resultado);
            setCargando(false);
        }).catch(error => {
            setCargando(true);
            setMensaje('No se pueden cargar los productos');
        });
    },[cargando, id]);

    return (
        <div>
            <div className="productos fs-5 fw-light m-3 p-3">
                {cargando ? <p>{mensaje}</p> : <ItemDetail {...producto[0]} />}
            </div>
        </div>
    )
}

export default ItemDetailContainer;