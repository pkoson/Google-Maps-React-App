import { Map } from 'immutable';
import HomeReducer, { initialState } from '../reducer';
import * as type from '../actionTypes';

describe('HomeReducer', () => {
  it('should handle initial state', () => {
    expect(HomeReducer(undefined, {})).toEqual(initialState);
  });
});
