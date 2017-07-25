import * as types from './actionTypes';

type PayloadType = string | number;

export type ActionReturnType = {
  type: string,
  payload: PayloadType
};

export function onMapClicked(payload: PayloadType): ActionReturnType {
  return {
    type: types.ON_MAP_CLICKED,
    payload
  };
}
export function getDirection(payload: PayloadType): ActionReturnType {
  return {
    type: types.GET_DIRECTIONS,
    payload
  };
}
