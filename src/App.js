import './App.css';
import Footer from './components/Footer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartFuncion } from './context/CartContext';
import CartContainer  from './components/itemCart/ItemCart';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartFuncion>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:category" element={<ItemListContainer/>} />
          <Route path="/carrito" element={<CartContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </CartFuncion>
      </BrowserRouter>
    </div>
  );
}

export default App;
