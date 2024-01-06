import Navbar from './components/Navbar.jsx';
import './App.css';
import Map from './components/map.jsx';
import Geolocation from './components/Geolocation.jsx';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Map/>
    <Geolocation/>
    </div>
  );
}

export default App;