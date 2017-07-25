import { Map, List } from 'immutable';
import HomeReducer, { initialState } from '../reducer';
import * as type from '../actionTypes';

describe('HomeReducer', () => {
  it('should handle initial state', () => {
    expect(HomeReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ON_MAP_CLICKED with new marker coridinates', () => {
    const payload = {
      lat: 50.06634047951922,
      lng: 19.91443634033203
    };
    const action = {
      type: type.ON_MAP_CLICKED,
      payload
    };
    expect(HomeReducer(undefined, action).get('markers')).toEqual(
      List([payload])
    );
  });
  // google Directions service is asynchronous
  it('should handle GET_DIRECTION action', () => {
    const action = {
      type: type.GET_DIRECTION
    };
    expect(HomeReducer(undefined, action).get('calculating')).toBe(true);
  });
});
