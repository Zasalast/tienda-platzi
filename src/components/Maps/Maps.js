import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const Maps = () => {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };
  const defaultCenter = {
    lat: 19.4245451,
    lng: -99.1718796,
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyDSVvae14AqWWXqzEUrhYD1wTv6wa8GrHg">
      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Maps;
