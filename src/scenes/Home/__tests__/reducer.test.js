import { Map, List } from 'immutable';
import HomeReducer, { initialState } from '../reducer';
import * as type from '../actionTypes';

describe('HomeReducer', () => {
  it('should handle initial state', () => {
    expect(HomeReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ON_MAP_CLICKED with new marker coridinates', () => {
    const payload = {
      id: 1,
      lat: 50.06634047951922,
      lng: 19.91443634033203
    };
    const action = {
      type: type.ON_MAP_CLICKED,
      payload
    };
    expect(HomeReducer(undefined, action).get('markers')).toBe(List(payload));
  });
});
