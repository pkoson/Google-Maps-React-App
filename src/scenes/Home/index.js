// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';

import { mapActionsToProps } from '../../utils';
import { MapBox } from './styled';

import type { StateType } from './reducer';

const google = window.google;

export class Home extends Component {
  map: HTMLDivElement;
  GoogleMap: any;
  componentDidMount = () => {
    this.initMap();
  };

  initMap = () => {
    // TODO: get it from initial state
    const startPointer = { lng: 19.93658, lat: 50.06143 };
    this.GoogleMap = new google.maps.Map(this.map, {
      zoom: 14,
      center: startPointer
    });
    // add onClick event listener
    google.maps.event.addListener(this.GoogleMap, 'click', event => {
      this.props.actions.onMapClicked(event.latLng, this.GoogleMap);
    });
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
      <MapBox
        innerRef={map => {
          this.map = map;
        }}
      />
    );
  }
}
const mapStateToProps = (state: any) => ({ ...state });

export default connect(mapStateToProps, mapActionsToProps)(Home);
