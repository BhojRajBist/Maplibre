import React, { useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import { GeocodingControl } from '@maptiler/geocoding-control/maplibregl';
// import "@maptiler/geocoding-control/dist/style.css";
// import "maplibre-gl/dist/maplibre-gl.css";
import '@maptiler/geocoding-control/style.css';


const Geocoding = () => {
  useEffect(() => {
    const apiKey = 'i5SNt5gzLB42EuF1VtPa';

    const map = new maplibregl.Map({
      container: 'map', // id of HTML container element
      style: `https://api.maptiler.com/maps/streets/style.json?key=${apiKey}`,
      center: [16.3, 49.2],
      zoom: 7,
    });

    const geocodingControl = new GeocodingControl({ apiKey, maplibregl });

    map.addControl(geocodingControl);

    return () => {
      // Clean up if needed
      map.remove();
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      {/* You can add any additional content or components here */}
      <h1>Geocoding</h1>
      <div id="map" style={{ height: '100vh' }}></div>
    </div>
  );
};

export default Geocoding;
