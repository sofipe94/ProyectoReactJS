import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Buscamos inspirarlos a habitar espacios con encanto y personalidad'} />
    </div>
  );
}

export default App;
