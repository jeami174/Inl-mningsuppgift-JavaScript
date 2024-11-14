import React, { useRef } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

//"I used this guide https://developers.google.com/maps/documentation/javascript/add-google-map to implement the Google Maps JavaScript API in this component. 
//I made some adjustments to keep it simple because it's not intended for production (like hardcoding the API key).
//ChatGPT coached me throughout the process, but did not produce the code 
//It could likely be refined, but it works :)”

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
    libraries: ['marker']
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

