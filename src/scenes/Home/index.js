// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { mapActionsToProps } from '../../utils';

import GoogleMapComponent from './components/GoogleMap';

const google = window.google;

type StateTypes = {
  origin: Object,
  destination: ?Object,
  directions: ?Object
};

export class Home extends Component {
  state: StateTypes;
  constructor() {
    super();
    this.state = {
      // Kraków lat & lng
      origin: new google.maps.LatLng(50.06143, 19.93658),
      destination: null,
      directions: null
    };
  }
  render() {
    return (
      <div>
        <GoogleMapComponent
          containerElement={<div style={{ height: '400px' }} />}
          mapElement={<div style={{ height: `400px` }} />}
          center={this.state.origin}
          directions={this.state.directions}
        />
      </div>
    );
  }
}
const mapStateToProps = (state: any) => ({ ...state });

export default connect(mapStateToProps, mapActionsToProps)(Home);
