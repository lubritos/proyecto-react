const ItemDetail = ({title, image, description, price}) => {
    const urlImg = `${process.env.PUBLIC_URL}/assets/productos/`;
    const css = {
        width: '25rem'
    };
    return (
        <div className="d-flex w-100 justify-content-center align-items-center m-3" >
            <div className="m-3">
                <img src={urlImg + image} alt="" style={css}/>
            </div>
            <div className="descripcion d-flex flex-column m-3 align-items-center">
                <h1 className="text-uppercase fw-bold d-flex justify-content-start">{title}</h1>
                <span className="d-flex justify-content-center h-100">{description}</span>
                <span className="text-uppercase fw-bold fs-3 d-flex align-items-center justify-content-end">${price}</span>
                <button className="btn btn-outline-purple text-uppercase w-100 mt-3">Comprar</button>
            </div>

        </div>
    )
}

export default ItemDetail;