import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './MapboxGLMap.scss';

const MapboxGLMap = ({ markers, setMarkers, setMarkersDeleteFlag }) => {
  const [, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoibWNmbHkyNSIsImEiOiJjazhrZDVrN3YwMGozM3NubzhrNWlvY3NhIn0.wsGfQf6wcW47fVsuoZlTUg';
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: [19, 52],
      zoom: 5,
    });

    // Initialize map
    map.on('load', () => {
      setMap(map);
      map.resize();
    });

    map.on('click', (e) => {
      // Setting new marker delete flag to false
      setMarkersDeleteFlag((p) => {
        return [...p, false];
      });
      // Setting new marker
      setMarkers((p) => {
        return [
          ...p,
          {
            marker: new mapboxgl.Marker({ color: 'red', draggable: true })
              .setLngLat([e.lngLat.lng, e.lngLat.lat])
              .addTo(map),
          },
        ];
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      onClick={() => setMarkers(markers)}
      ref={(el) => (mapContainer.current = el)}
      className="map"
    />
  );
};

export default MapboxGLMap;
