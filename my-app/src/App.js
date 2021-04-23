import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Container/ItemListContainer';

function App() {
  return (
    <div className="App bg-light">
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
