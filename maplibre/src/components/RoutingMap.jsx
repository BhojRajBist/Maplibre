// import React, { useEffect, useRef } from 'react';
// import maplibregl from 'maplibre-gl';
// import '@maplibre-gl/dist/maplibre-gl.css';
// import Directions from '@maptiler/directions';

// const RoutingMap = () => {
//   const mapContainer = useRef(null);

//   useEffect(() => {
//     const apiKey = 'i5SNt5gzLB42EuF1VtPa';
//     const directions = new Directions({ apiKey });
//     let map;

//     const initializeMap = () => {
//       map = new maplibregl.Map({
//         container: mapContainer.current,
//         style: 'https://api.maptiler.com/maps/streets/style.json?key=' + apiKey,
//         center: [YOUR_START_LONGITUDE, YOUR_START_LATITUDE],
//         zoom: 13,
//       });
//     };

//     const getRoute = async () => {
//       const route = await directions.getRoute({
//         origin: [83.9827, 28.2180], // Pokhara
//         destination: [85.3240, 27.7172], // Kathmandu
//       });

//       // Draw the route on the map
//       map.addSource('route', {
//         type: 'geojson',
//         data: route.geometry,
//       });

//       map.addLayer({
//         id: 'route',
//         type: 'line',
//         source: 'route',
//         layout: {
//           'line-join': 'round',
//           'line-cap': 'round',
//         },
//         paint: {
//           'line-color': '#3887be',
//           'line-width': 5,
//           'line-opacity': 0.75,
//         },
//       });

//       // Fit the map to the route bounds
//       map.fitBounds(route.bounds, { padding: 20 });
//     };

//     initializeMap();
//     getRoute();

//     return () => {
//       if (map) {
//         map.remove();
//       }
//     };
//   }, []);

//   return <div ref={mapContainer} style={{ height: '100vh' }} />;
// };

// export default RoutingMap;


import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import * as maptilersdk from '@maptiler/sdk';
import "maplibre-gl/dist/maplibre-gl.css";

const RoutingMap = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const apiKey = 'Yi5SNt5gzLB42EuF1VtPa'; // Replace with your actual MapTiler API key
    maptilersdk.config.apiKey = apiKey;

    let map;

    const initializeMap = () => {
      map = new maplibregl.Map({
        container: mapContainer.current,
        style: 'https://api.maptiler.com/maps/streets/style.json?key=' + apiKey,
        center: [83.9827, 28.2180], // Pokhara
        zoom: 13,
      });
    };

    const getRoute = async () => {
      try {
        const route = await maptilersdk.directions.getRoute({
          origin: [83.9827, 28.2180], // Pokhara
          destination: [85.3240, 27.7172], // Kathmandu
        });

        // Draw the route on the map
        map.addSource('route', {
          type: 'geojson',
          data: route.geometry,
        });

        map.addLayer({
          id: 'route',
          type: 'line',
          source: 'route',
          layout: {
            'line-join': 'round',
            'line-cap': 'round',
          },
          paint: {
            'line-color': '#3887be',
            'line-width': 5,
            'line-opacity': 0.75,
          },
        });

        // Fit the map to the route bounds
        map.fitBounds(route.bounds, { padding: 20 });
      } catch (error) {
        console.error('Error fetching route:', error);
      }
    };

    initializeMap();
    getRoute();

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  return <div ref={mapContainer} style={{ height: '100vh' }} />;
};

export default RoutingMap;


