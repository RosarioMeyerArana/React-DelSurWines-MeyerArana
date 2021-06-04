import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Container/ItemList/ItemListContainer';
import Cart from './Components/Cart/Cart';
import ItemDetailContainer from './Container/ItemDetail/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CartProvider from './Context/cartContext'
import {CarouselHome} from './Components/Carousel/Carousel'
import Checkout from './Components/Checkout/Checkout'
import Login from './Components/Login/Login'


function App() {
  return (
    
    <div className="App bg-light">
          <CartProvider>
      <BrowserRouter>
          <NavBar/>
          <Switch>
          <Route path="/Login">    
                  <Login/>
              </Route>
             <Route path="/Cart">    
                  <Cart/>
              </Route>
              <Route path="/checkout">    
                  <Checkout/>
              </Route>
              <Route path="/:varietal/:id">
                  <ItemDetailContainer/>
              </Route>
              <Route path="/:varietal">
                  <ItemListContainer/>
              </Route>
              <Route path="/">
                  <CarouselHome/>
                  <ItemListContainer/>
              </Route>
          </Switch>
      </BrowserRouter>
          </CartProvider>
    </div>
    
  );
}

export default App;
