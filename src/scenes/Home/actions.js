import * as types from './actionsTypes';

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
