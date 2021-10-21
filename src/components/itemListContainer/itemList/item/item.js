const Item = ({nombre, descripcion, precio, img}) => {
    const css = {
        width: '20rem'
    };
    return (
        <div className="card m-3" style={css}>
            <img src={img} className="card-img-top" alt={nombre}/>
            <div className="card-body">
                <h5 className="card-title fw-bold text-uppercase c-purple">{nombre}</h5>
                <p className="card-text">{descripcion.substring(0,50)}...</p>
                <p className="card-text fw-bold c-purple fs-3">${precio}</p>
                <a href="./#" className="btn btn-outline-purple text-uppercase">comprar</a>
            </div>
        </div>
    )
}
export default Item;
