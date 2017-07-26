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
  markers: List(),
  directions: List()
});
const HomeReducer = (state: StateType = initialState, action: ActionType) => {
  switch (action.type) {
    case type.ON_MAP_CLICKED:
      return state.set('markers', state.get('markers').push(action.payload));
    case type.SAVE_DIRECTIONS:
      return state.set(
        'directions',
        state.get('directions').push(action.payload)
      );
    case type.CLEAR_MARKERS:
      return state.set('markers', List());
    default:
      return state;
  }
};
export default HomeReducer;
