import { useState , createContext } from "react"

const Context = createContext()

const CartFuncion = ({children})=> {
    const [cart, setCart] = useState([])
    const [unidades, setUnidades] = useState(0)
    const [total, setTotal] = useState(0) 

    const agregarProductos = (producto, cantidad)=> {
        const itemExiste = isExist(producto.id);
        const precio = producto.price;
        if(!itemExiste) {
            setCart([...cart, {
                id:producto.id,
                title:producto.title,
                price:precio,
                image: producto.image,
                cantidad:cantidad,
                subtotal:(precio*cantidad)
            }])
            setTotal(total + (precio*cantidad))
            setUnidades(unidades+1)
        }else {
            const cartAux = cart.map((item) =>{
                if(item.id===producto.id){
                    item.cantidad+=cantidad
                    item.subtotal+=(total + (precio*cantidad))
                }
                return item
            })
            setCart(cartAux);
            setTotal(total + (precio*cantidad));
        }
    }

    const borrarProducto = (producto)=> {
        const cartActual = cart.filter(prod => prod.id !== producto.id);
        setCart(cartActual);
        setTotal(total - (producto.price*producto.cantidad));
    }

    const clear = () => {
        setCart([]);
        setUnidades(0);
        setTotal(0);
    }

    const isExist = (id) => {
        return cart.find(item=> item.id === id);
    }

    return <Context.Provider value = {{cart, unidades, total, agregarProductos, borrarProducto, clear }}>
        {children}
    </Context.Provider>

}
export {CartFuncion, Context}