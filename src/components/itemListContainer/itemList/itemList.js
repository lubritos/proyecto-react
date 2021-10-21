// eslint-disable-next-line no-unused-vars
import Item from "./item/item";

const ItemList = ({productos}) => {
    return (
        <div className="d-flex flex-wrap justify-content-evenly">
        {productos.map((producto) => 
        <Item key={producto.id} nombre={producto.title} descripcion={producto.description} precio={producto.price} img ={producto.image}/>)}
        </div>
    )
}
export default ItemList;