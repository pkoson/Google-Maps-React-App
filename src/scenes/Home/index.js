// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { mapActionsToProps } from '../../utils';

import GoogleMapComponent from './components/GoogleMap';

const google = window.google;

export class Home extends Component {
  render() {
    return (
      <div>
        <GoogleMapComponent
          containerElement={<div style={{ height: '400px' }} />}
          mapElement={<div style={{ height: `400px` }} />}
          center={this.props.Home.get('origin')}
          // directions={this.state.directions}
        />
      </div>
    );
  }
}
const mapStateToProps = (state: any) => ({ ...state });

export default connect(mapStateToProps, mapActionsToProps)(Home);
