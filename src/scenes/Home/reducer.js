// @flow

import { Map, List } from 'immutable';
import * as type from './actionTypes';

export type StateType = Map<string, List<*>>;

export type ActionType = {
  type: string,
  payload: Array<string>
};

export const initialState = Map({
  origin: new window.google.maps.LatLng(50.06143, 19.93658),
  markers: List()
});
const HomeReducer = (state: StateType = initialState, action: ActionType) => {
  switch (action.type) {
    case type.ON_MAP_CLICKED:
      return state.set('markers', state.get('markers').push(action.payload));
    default:
      return state;
  }
};
export default HomeReducer;
