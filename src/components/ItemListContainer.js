const ItemListContainer = (props) => {
    return (
        <div className="fs-3 fw-bold m-3 p-3 text-capitalize text-info">
            {props.greeting}
        </div>
    )
}

export default ItemListContainer;