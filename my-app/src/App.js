import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Container/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos a Del Sur Wines"/>
    </div>
  );
}

export default App;
