// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List } from 'immutable';

import { mapActionsToProps } from '../../utils';
import { MapBox, Button } from './styled';

import type { StateType } from './reducer';

const google = window.google;

export class Home extends Component {
  map: HTMLDivElement;
  GoogleMap: any;
  directionsService: any;
  directionsDisplay: any;
  componentDidMount = () => {
    this.initMap();
  };

  initMap = () => {
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    // TODO: get it from initial state
    const startPointer = { lng: 19.93658, lat: 50.06143 };
    this.GoogleMap = new google.maps.Map(this.map, {
      zoom: 14,
      center: startPointer
    });
    if (this.directionsDisplay.setMap) {
      this.directionsDisplay.setMap(this.GoogleMap);
    }
    // add onClick event listener
    google.maps.event.addListener(this.GoogleMap, 'click', event => {
      this.props.actions.onMapClicked(event.latLng, this.GoogleMap);
    });
  };

  // TODO: move it to saga
  getDirection = () => {
    const markers = this.props.Home.get('markers');
    const directionData = {
      origin: markers.first(),
      destination: markers.last(),
      travelMode: 'DRIVING',
      waypoints: markers
        .rest()
        .butLast()
        .toArray()
        .map(place => ({ location: place, stopover: false })),
      optimizeWaypoints: true
    };
    this.directionsService.route(directionData, (result, status) => {
      if (status == 'OK') {
        this.directionsDisplay.setDirections(result);
      }
    });
    // TODO: removes all markers
  };
  addMarkerToMap = (marker: List<*>, map: any) => {
    const newMarker = new google.maps.Marker({
      position: { lat: marker.last().lat(), lng: marker.last().lng() },
      map
    });
  };
  componentDidUpdate = (prevProps: { Home: StateType }) => {
    const markersProp = this.props.Home.get('markers');
    if (prevProps.Home.get('markers').size !== markersProp)
      this.addMarkerToMap(markersProp, this.GoogleMap);
  };
  render() {
    return (
      <div>
        <MapBox
          innerRef={map => {
            this.map = map;
          }}
        />
        <p>Map options:</p>
        <Button
          onClick={() => this.getDirection()}
          disabled={this.props.Home.get('markers').size <= 1}
        >
          Get Direction
        </Button>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => ({ ...state });

export default connect(mapStateToProps, mapActionsToProps)(Home);
