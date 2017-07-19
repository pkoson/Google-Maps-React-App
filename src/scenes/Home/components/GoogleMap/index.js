// @flow
import React from 'react';
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} from 'react-google-maps';

const GoogleMapComponent = withGoogleMap(props =>
  <GoogleMap defaultZoom={14} defaultCenter={props.center}>
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
);

export default GoogleMapComponent;
