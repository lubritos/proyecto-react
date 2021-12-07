import { useState, createContext } from "react"

const Context = createContext()

const ProductoContext =({children})=>{
    const [prods, setProds] = useState([]);
    return <Context.Provider value={{prods, setProds}}>
        {children}
    </Context.Provider>
}


export {
    Context,
    ProductoContext
} 