import Navbar from './components/Navbar.jsx';
import './App.css';
import Map from './components/map.jsx';
import Geolocation from './components/Geolocation.jsx';
import Geocoding from './components/Geocoding.jsx'
import RoutingMap from './components/RoutingMap.jsx'
function App() {
  return (
    <div className="App">
    <Navbar/>
    {/* <Map/>
    <div> <Geolocation/> </div> */}
    
    {/* <div> <Geocoding /> </div> */}
    <RoutingMap />

    
    </div> 
  );
}

export default App;