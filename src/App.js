import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer/>
      <Footer />
    </div>
  );
}

export default App;
