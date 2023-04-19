
import './App.css';
import ItemListContainer from "./components/container/ItemListContainer";
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greating={"Bienvenido a Tienda SB"}/>
    </div>
  );
}

export default App;
