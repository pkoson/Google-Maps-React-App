// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { mapActionsToProps } from '../../utils';

export type PropsType = {
  intl: any,
  fm: () => string,
  toggleSideBar: () => void,
  documentsListReducer: Map<string, {}>
};
export class Home extends Component {
  props: PropsType;

  render() {
    return <div>test</div>;
  }
}
const mapStateToProps = (state: any) => ({ ...state });

export default connect(mapStateToProps, mapActionsToProps)(Home);
