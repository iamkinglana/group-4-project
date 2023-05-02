
import './App.css';
import CarCollection from './components/CarList';
import Navbar from './components/NavBar';
import SearchCars from './components/SearchCars';


function App() {
  return (
    <div className="App">
      <SearchCars/>
      <Navbar/>
      <CarCollection/>
    
    </div>
  );
}

export default App;
