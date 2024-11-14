import React, { useRef } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


const libraries = ['marker'];

const Map = () => {
  const mapRef = useRef(null);
  const defaultCenter = { lat: 59.326947358258934, lng: 18.071740855303712 };

  const mapContainerStyle = {
    width: '636px',
    height: '540px',
    borderRadius: '8px'
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDdEj2m4eacbkJNz2-fnacVXv-iGp55h7k",
    libraries: libraries, // Använd `libraries`-konstanten
  });

  const handleMapLoad = async (map) => {
    mapRef.current = map;
    const { AdvancedMarkerElement } = await window.google.maps.importLibrary("marker");

    new AdvancedMarkerElement({
      map: mapRef.current,
      position: defaultCenter,
      title: "Imagine if you could get medical advice at the royal palace."
    });
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={16}
      center={defaultCenter}
      onLoad={handleMapLoad}
      options={{ mapId: 'DEMO_MAP_ID' }}
    />
  );
};

export default Map;


