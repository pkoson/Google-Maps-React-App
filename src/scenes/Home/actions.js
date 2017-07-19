import * as types from './actionTypes';

type PayloadType = string | number;

export type ActionReturnType = {
  type: string,
  payload: PayloadType
};

export function test(payload: PayloadType): ActionReturnType {
  return {
    type: types.TEST,
    payload
  };
}
