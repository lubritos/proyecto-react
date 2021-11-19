import { Link } from "react-router-dom";

const Item = ({id, title, description, price, image}) => {
    const urlImg = `${process.env.PUBLIC_URL}/assets/productos/`;
    const css = {
        width: '20rem'
    };
    return (
        <div className="card m-3" style={css}>
            <img src={ urlImg + image} className="card-img-top" alt={title}/>
            <div className="card-body">
                <h5 className="card-title fw-bold text-uppercase c-purple">{title}</h5>
                {description && <p className="card-text">{description.substring(0,50)}...</p>}
                <p className="card-text fw-bold c-purple fs-3">${price}</p>
                <Link to={'/item/'+id} className="btn btn-outline-purple text-uppercase">ver</Link>
            </div>
        </div>
    )
}
export default Item;
