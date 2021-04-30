import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Container/ItemList/ItemListContainer';
import Cart from './Components/Cart/Cart';
import ItemList from './Components/ItemList/ItemList';
import ItemDetailContainer from './Container/ItemDetail/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    
    <div className="App bg-light">
      <BrowserRouter>
        <NavBar/>
          <Switch>
            <Route path="/cart">
              <Cart/>
            </Route>
            <Route path="/:varietal/:id">
              <ItemDetailContainer/>
            </Route>
            <Route path="/:varietal">
              <ItemListContainer/>
            </Route>
            <Route path="/">
              <ItemListContainer/>
            </Route>
          </Switch>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
