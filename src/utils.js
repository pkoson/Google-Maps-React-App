// @flow

import { Map } from 'immutable';
import { bindActionCreators } from 'redux';
import * as HomeActions from './scenes/Home/actions';

// Register all actions
const actions = [HomeActions];

// map all actions to props
export function mapActionsToProps(dispatch: (actions: Object) => Object) {
  const creators = Map()
    .merge(...actions)
    .filter(value => typeof value === 'function')
    .toObject();
  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch
  };
}
