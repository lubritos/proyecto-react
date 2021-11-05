import './App.css';
import Footer from './components/Footer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>
          <Route path="/category/:category">
            <ItemListContainer/>
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
        <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;
