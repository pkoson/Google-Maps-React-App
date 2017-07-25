// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { mapActionsToProps } from '../../utils';
import { MapBox } from './styled';

const google = window.google;

export class Home extends Component {
  map: HTMLDivElement;
  map = null;
  componentDidMount = () => {
    this.initMap();
  };

  initMap = () => {
    const startPointer = { lng: 19.93658, lat: 50.06143 };
    const map = new google.maps.Map(this.map, {
      zoom: 14,
      center: startPointer
    });
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
