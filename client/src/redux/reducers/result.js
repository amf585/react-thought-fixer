import { UPDATE_RESULT } from '../actionTypes';

const initialState = {
    result: [],
    thoughtText: ''
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_RESULT:
      return { 
        ...state, 
        result: action.payload.result, 
        thoughtText: action.payload.thoughtText 
      };
    default:
      return state;
  }
}

export default resultReducer;