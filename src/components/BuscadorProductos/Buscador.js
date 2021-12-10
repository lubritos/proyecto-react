import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/ProductContext";

const Buscador = () => {
    const navigate= useNavigate();
    const {prods} = useContext(Context);
    const [palabra, setPalabra] = useState('');
    const [busqueda, setBusqueda] = useState([]);
    const [show, setShow] = useState(false);
    useEffect(()=>{
        const resultadoProds = prods.filter(p => p.title.toLowerCase().includes(palabra.toLowerCase()));
        setBusqueda(palabra ? resultadoProds : []);
    }, [prods, palabra]) 

    const urlImg = `${process.env.PUBLIC_URL}/assets/productos/`;
    const css = {
        width: '5rem'
    };

    const mostrarBuscador = () => {
        setShow(!show);
        setBusqueda([]);
        setPalabra('');
    }
    const teclaPresionada = (ev) => {
        if (ev.target.value.length >= 3) {
            setPalabra(ev.target.value);
        } else {
            setBusqueda([]);
        }
    }

    const irDetalle = (id) => {
        navigate(`/item/${id}`);
    }
    return (
        <div className="position-relative start-50"> 
            <div className="position-absolute search">
                <i onClick={mostrarBuscador} className={`fas fa-search mx-3 position-absolute ${show ? 'fs-4 text-black my-1':'fs-3 text-white'}`}></i>
                {show && <input type="text" onKeyUp={teclaPresionada} className="input-buscador rounded-pill" />}
            </div>
            <div className={`position-absolute top-50 bottom-50 buscador bg-white mt-5 rounded ${busqueda.length ? '' : 'd-none'}`}>
                {busqueda.map(producto => {
                    return (
                        <div onClick={() => irDetalle(producto.id)} className="item-buscador p-3 w-100 fw-bold position-relative"
                            key={producto.id}> 
                                <img src={urlImg + producto.image} style={css} alt=""className="img-buscador position-absolute start-0 top-0 end-50"/>
                                <h1 className="title-buscador text-center fs-6 text-uppercase position-absolute start-50 end-50">
                                    {producto.title}
                                </h1>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Buscador