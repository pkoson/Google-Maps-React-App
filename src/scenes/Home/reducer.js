// @flow

import { Map } from 'immutable';
import * as type from './actionTypes';

type StateType = Map<string, {}>;

export type ActionType = {
  type: string,
  payload: Array<string>
};

export const initialState = Map({
  origin: new window.google.maps.LatLng(50.06143, 19.93658)
});
const HomeReducer = (state: StateType = initialState, action: ActionType) => {
  switch (action.type) {
    case type.ON_MAP_CLICKED:
      return state;
    default:
      return state;
  }
};
export default HomeReducer;
