import { UPDATE_RESULT } from './actionTypes';

export const updateResult = (newResult, text) => ({
  type: UPDATE_RESULT,
  payload: {
    thoughtText: text,
    result: newResult
  }
});
